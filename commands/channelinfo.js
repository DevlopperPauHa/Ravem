const Discord = require('discord.js')

exports.run = (client, message, args) => {

    var chnl

    if(!args[0]) {
        chnl = message.channel
    }
    else if(message.guild.channels.exists("id", args[0])) {
        chnl = message.guild.channels.get(args[0])
    }
    else if(message.mentions.channels.first()) {
        chnl = message.mentions.channels.first()
    }
    else if(message.guild.channels.exists("name", args[0])) {
        chnl = message.guild.channels.find("name", args[0])
    }
    else if(chnl === undefined) {
        return message.channel.send("Le channel demandé n'existe pas. Essayez avec l'identifiant, le nom ou la mention.")
        
    }

        let iconsrv = message.guild.iconURL
        let chacreadate = chnl.createdAt.toString().split(" ")
        let channelembd = new Discord.RichEmbed()
            .setTitle('Informations sur le channel')
            .setColor('7EBCAD')
            .addField('Nom du channel', "#" + chnl.name)
            .addField('ID du channel', chnl.id)
            .addField('Type du channel', chnl.type)
            .addField('Position du channel dans le serveur', chnl.calculatedPosition)
            .addField('Position du channel dans la catégorie', chnl.position)
            .setTimestamp(new Date)
            .addField('Création du channel', chacreadate[0] + ' ' + chacreadate[2] + ' ' + chacreadate[1] + ' ' + chacreadate[3] + ", " + chacreadate[4])
            .addField('Topic du channel', chnl.topic ? chnl.topic : "Aucun")
            .setThumbnail(iconsrv)
            .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(channelembd)
        
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