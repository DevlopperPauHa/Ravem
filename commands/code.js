const fs = require("fs"); //go souffrir :noel:

exports.run = (client, message, args) => {
    if (!args[0]) return message.channel.send("Utilisation de la commande : `-code <nomDeLaCommande>`")
    let command;
    if (client.commands.has(args[0])) {
        command = args[0];
    } else if (client.aliases.has(args[0])) {
        command = client.aliases.get(args[0]);


    if (client.commands.has(command)) {
        let commandFile = fs.readFileSync(`./commands/${command}.js`, "utf8")
        if (commandFile.length < 1992) {
            message.channel.send(`\`\`\`js\n` + commandFile + `\`\`\``)
        } else {
            message.channel.send(`Le code de la commande est supérieur à 2000 caractères. (${commandFile.length})`)
        }

    }
    else if (!client.commands.has(command)) {
        message.channel.send("Cette commande n'existe pas :no_mouth:")
    }
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["c"],
};

exports.help = {
    name: "code",
    description: "Montre le code d'une commande.",
    usage: "=code <nomDeLaCommande>"
}
