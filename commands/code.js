const fs = require("fs"); //go souffrir :noel:
const h = require('hastebin-generator')

exports.run = (client, message, args) => {
    let command;
    if (client.commands.has(args[0])) {
        command = args[0];
    } else if (client.aliases.has(args[0])) {
        command = client.aliases.get(args[0]);
    }
    
    if(command === "eval") return message.channel.send("Cette commande n'existe pas :no_mouth:")
    if (client.commands.has(command)) {
        let commandFile = fs.readFileSync(`./commands/${command}.js`, "utf8")
        if (commandFile.length < 1992) {
            message.channel.send(`\`\`\`js\n` + commandFile + `\`\`\``)
        } else {
            h(commandFile, 'js').then(r => {
            message.channel.send(`Le code de la commande est supérieur à 2000 caractères. (${commandFile.length})\nVoivi un hastebin : ${r}`)
            })
        }

    }
    else if (!client.commands.has(command)) {
        message.channel.send("Cette commande n'existe pas :no_mouth:")
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["c"],
};

exports.help = {
    name: "code",
    description: "Montre le code d'une commande.",
    usage: "code [cmd]"
};
