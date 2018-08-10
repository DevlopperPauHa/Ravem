const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
const fs = require("fs")
const moment = require("moment");

const log = (message) => {
  console.log(`[${moment().format("DD/MM/YYYY HH:mm:ss")}] ${message}`);
};

client.on("ready", () => {
  client.user.setActivity(`-help | ${client.users.size} utilisateurs`, {
        type: 'Watching'
      });
      console.log("Hey Paulé, I'm ready !");
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} commandes.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`${props.help.name} chargé.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on("message", message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot || message.channel.type === "dm") return;
  let command = message.content.split(" ")[0].slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, args);
  }
});


client.on("error", console.error);
client.on("warn", console.warn);

client.login(config.token);

client.reload = function(command) {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });

      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
