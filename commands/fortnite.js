const Discord = require("discord.js")
const ftn = require("fortnitetracker-7days-stats")

exports.run = (client, message, args) => {

const type = args[0]
const search = message.content.slice(2)

ftn.getStats(search, type, (err, result) => {
    if(err) {
        message.channel.send("`" + err.message + "`");
    }
    else {
        const skin = result.skinUrl
        var ftnembd = new Discord.RichEmbed()
            .setColor("7EBCAD")
            .setTitle("Statistiques Fortnite de l'utilisateur" + result.accountName + "durant les sept derniers jours")
            .addField("Pseudo", result.accountName)
            .addField("Plateforme", result.platform)
            .addField("Score total", result.score)
            .addField("Nombre de kills", result.kills)
            .addField("Nombre de parties gagnées", result.wins)
            .addField("Nombre de parties jouées", result.matches)
            .addField("Temps de jeu en minutes", result.minutesPlayed)
            .setThumbnail(skin)
            .setTimestamp()
            .setFooter(client.user.username + client.user.avatarURL)
        messsage.channel.send(ftnembd)
    }
})
}

exports.help = {
    name: "fortnite"
}

exports.conf = {
    dm: true,
    enabled: true,
    aliases: ["ftn", "fortnite-search", "ftn-search"]
}

