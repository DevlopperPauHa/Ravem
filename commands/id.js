exports.run = (client, message, args) => {
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
        let idus = user.id
        message.channel.send(`Voici l'id de ${user.username}#${user.discriminator} : ` + '`' + `${idus}` + '`')
}

exports.help = {
    name: "id",
    description: "Affiche l'id d'un player"
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["id"]
}