exports.run = (client, message) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne pouvez pas effectuer cette commande.")
        
        let args = message.content.split(" ").slice(1);
        let num = (parseInt(args[0]) + 1)


        if(!args[0]) return message.channel.send("Veuillez préciser combien de message vous voulez supprimer.")
        if(isNaN(parseInt(args[0]))) return message.channel.send("Veuillez entrer un nombre valide.")
        message.channel.bulkDelete(num).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés.`).then(sentMessage => {
                setTimeout(() => {
                    sentMessage.delete()
                }, 1000)
            })
        })
}

exports.help = {
    name: "purge",
    description: "Pour purger des messages"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["prune", "clear"]
}