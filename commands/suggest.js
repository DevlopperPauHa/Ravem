const Discord = require('discord.js')

exports.run = (client, message, args) => {

    var suggestargs = message.content.split().toString().slice(9)

    if(!suggestargs) {
        message.channel.send("Merci de préciser les arguments de votre suggestion.")
    }
    else {

    if(suggestargs.length < 25) {
        message.channel.send("Votre suggestion doit faire plus de 25 caractères.")
    }
    else {
        let suggestguild = client.guilds.get("447920023827251201")
        let suggestcha =  suggestguild.channels.get("465259756907659304")

        let guildicon = message.guild.iconURL
        let suggestdate = message.createdAt.toString().split(" ")
        let useravatar = message.author.avatarURL
        let neutreemoteguild = client.guilds.get("440633466128695306")
        let check = neutreemoteguild.emojis.find("name", "check")
        let neutre = neutreemoteguild.emojis.find("name", "neutre")
        let xmark = neutreemoteguild.emojis.find("name", "xmark")
        var suggestembed = new Discord.RichEmbed()
            .setColor("7EBCAD")
            .setAuthor(`Nouvelle suggestion par ${message.author.username}#${message.author.discriminator} !`, guildicon)
            .addField("Depuis le serveur :", message.guild.name)
            .addField("Date de la suggestion :", suggestdate[0] + ' ' + suggestdate[2] + ' ' + suggestdate[1] + ' ' + suggestdate[3] + ", " + suggestdate[4])
            .addField('Argumentation :', suggestargs)
            .setThumbnail(useravatar)
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
        suggestcha.send(suggestembed).then(suggestembed => {
        message.channel.send("Votre suggestion a bien été envoyée ! Nous vous donnerons des informations dès que possible !")
        suggestembed.react(check).then(() => {
            suggestembed.react(neutre).then(() => {
                suggestembed.react(xmark)
            })
        })
            })
        }
    }
}

exports.help = {
    name: "suggest",
    description: "Pour faire une suggestion"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}