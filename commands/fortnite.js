const Discord = require("discord.js")
const fortnite = require("fortnite")
const api = new fortnite('6e760d67-4161-4461-a319-a027387d7bf0')

exports.run = (client, message, args) => {
    api.user('Number1Swifty', 'xbl').then(()=> {

        var ftnembd = new Discord.RichEmbed()
            .setColor("7EBCAD")
            .setTitle("Statistiques Fortnite de l'utilisateur" + user.username)
            .addField("Pseudo", user.username)
            .addField("Plateforme", user.platform)
            .addField("Score total", user.score)
            .addField("Nombre de kills", "a")
            .addField("Nombre de parties gagnées", "a")
            .addField("Nombre de parties jouées", "a")
            .addField("Temps de jeu en minutes", "a")
            .setThumbnail(skin)
            .setTimestamp()
            .setFooter(client.user.username + client.user.avatarURL)
        messsage.channel.send(ftnembd)
    });
}

exports.help = {
    name: "fortnite"
}

exports.conf = {
    dm: true,
    enabled: false,
    aliases: ["ftn", "fortnite-search", "ftn-search"]
}

