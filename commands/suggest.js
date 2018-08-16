const Discord = require('discord.js')
const moment = require('moment')
moment.locale('fr')

exports.run = (client, message, args) => {

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

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
        let datef = moment(message.createdAt).format('dddd Do MMMM YYYY, HH:mm:ss');
        let datefr = datef.substring(0,1).toLocaleUpperCase() + datef.substring(1);
        let guildicon = message.guild.iconURL
        let useravatar = message.author.avatarURL
        let neutreemoteguild = client.guilds.get("440633466128695306")
        let check = neutreemoteguild.emojis.find(emoji => emoji.name === "check")
        let neutre = neutreemoteguild.emojis.find(emoji => emoji.name === "neutre")
        let xmark = neutreemoteguild.emojis.find(emoji => emoji.name === "xmark")
        var suggestembed = new Discord.RichEmbed()
            .setColor("7EBCAD")
            .setAuthor(`Nouvelle suggestion par ${message.author.username}#${message.author.discriminator} !`, guildicon)
            .addField("Depuis le serveur :", message.guild.name)
            .addField("Date de la suggestion :", datefr)
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