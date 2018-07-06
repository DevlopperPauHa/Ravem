const Discord = require('discord.js');
const client = new Discord.Client()
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const ytdl = require('ytdl-core');
const config = require("./config.json");
const weather = require('weather-js');
const fs = require("fs");
const adapter = new FileSync('database.json')
const db = low(adapter)


client.on("ready", () => {
  client.user.setActivity('Ravem®, r!help', {
        type: 'Listening',
      });
      console.log("Bonjour Paulé, je suis prêt !");
});

client.on('message', message => {

    var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    if (message.channel.type === "dm") return message.channel.send("Please go in a guild channel to execute commands.")


    fs.readdir("./events/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
          let eventFunction = require(`./events/${file}`);
          let eventName = file.split(".")[0];
          client.on(eventName, (...args) => eventFunction.run(client, ...args));
        });
      });

      
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
      } catch (err) {
        console.log(err);
    }
});

client.login(config.token);