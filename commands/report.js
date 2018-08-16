const Discord = require('discord.js')
const moment = require('moment')
moment.locale('fr')

exports.run = (client, message) => {

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

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
        let reportcha = reportguild.channels.get("465259561071280138")
        let datef = moment(message.guild.createdAt).format('dddd Do MMMM YYYY, HH:mm:ss');
        let datefr = datef.substring(0,1).toLocaleUpperCase() + datef.substring(1);
        let guildicon = message.guild.iconURL
        let useravatar = message.author.avatarURL
        let reportembed = new Discord.RichEmbed()
            .setColor("7EBCAD")
            .setAuthor(`Nouveau report par ${message.author.username}#${message.author.discriminator} !`, guildicon)
            .addField("Depuis le serveur :", message.guild.name)
            .addField("Date du report :", datefr)
            .addField('Argumentation :', reportargs)
            .setThumbnail(useravatar)
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
        reportcha.send(reportembed)
        message.channel.send("Votre report a bien été envoyé ! Nous vous donnerons des informations dès que possible !")
    }
}
}

exports.help = {
    name: "report",
    description: "Pour reporter une anomalie"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}