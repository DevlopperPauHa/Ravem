const fs = require("fs"); //go souffrir :noel:

exports.run = (client, message, args) => {
    const command = args.shift().toLowerCase();
    let commandFile = fs.readFileSync(`./commands/${command}.js`, "utf8")
    if (commandFile.length < 1992) {
        message.channel.send(`\`\`\`js\n` + commandFile + `\`\`\``)
    } else {
        message.channel.send(`Le code de la commande est supérieur à 2000 caractères. (${commandFile.length})`)
    }
}    