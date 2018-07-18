const Discord = require('discord.js')

exports.run = (client, message, args) => {

    let chawritten = message.mentions.channels.first() ? message.mentions.channels.first() : message.channel
        let iconsrv = message.guild.iconURL
        let chacreadate = chawritten.createdAt.toString().split(" ")
        let channelembd = new Discord.RichEmbed()
            .setTitle('Informations sur le channel')
            .setColor('7EBCAD')
            .addField('Nom du channel', "#" + chawritten.name)
            .addField('ID du channel', chawritten.id)
            .addField('Type du channel', chawritten.type)
            .addField('Position du channel dans le serveur', chawritten.calculatedPosition)
            .addField('Position du channel dans la catégorie', chawritten.position)
            .setTimestamp(new Date)
            .addField('Création du channel', chacreadate[0] + ' ' + chacreadate[2] + ' ' + chacreadate[1] + ' ' + chacreadate[3] + ", " + chacreadate[4])
            .addField('Topic du channel', chawritten.topic ? chawritten.topic : "Pas de topic.")
            .setThumbnail(iconsrv)
            .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(channelembd)
        console.log('channelinfo sent')
        
}

exports.help = {
    name: "channelinfo",
    description: "Donne des infot sur les canaux"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ci"]
}