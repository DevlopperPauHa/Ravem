exports.run = (client, message, args) => {
  if (message.author.id !== "376812375795302402") return;
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`Commande ${args[0]} inexistante`);
  } else {
    message.channel.send(`Reload de \`${command}\``)
    .then(m => {
      client.reload(command)
      .then(() => {
        m.edit(`Commande \`${command}\` reloaded avec succès.`);
      })
      .catch(e => {
        m.edit(`Echec du reload de la commande ${command}\n\`\`\`${e.stack}\`\`\``);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["r"],
};

exports.help = {
  name : "reload",
  description: "Reload une commande.",
  usage: "reload [cmd]"
};