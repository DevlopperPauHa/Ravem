const Discord = require('discord.js')

exports.run = (client, message) => {

    var reportargs = message.content.split().toString().slice(9)

    if(!reportargs) {
        message.channel.send("Merci de préciser la raison de ce report.")
    }
    else{

    if(reportargs.length < 25) {
        message.channel.send("Votre report doit faire au moins 25 caractères.")
    }
    else {

    let reportguild = client.guilds.get("447920023827251201")
        let reportcha = reportguild.channels.get("464873087708692500")

        let guildicon = message.guild.iconURL
        let useravatar = message.author.avatarURL
        let reportembed = new Discord.RichEmbed()
            .setColor("7EBCAD")
            .setAuthor(`Nouveau report par ${message.author.username}#${message.author.discriminator} !`, useravatar)
            .addField("Depuis le serveur", message.guild.name)
            .addField('Argumentation :', reportargs)
            .setThumbnail(guildicon)
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
        reportcha.send(reportembed)
        message.channel.send("Votre report a bien été envoyé ! Nous vous donnerons des informations dès que possible !")
    }
    }
}