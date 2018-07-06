exports.run = (client, message, args) => {

    const Discord = require("discord.js")

    let idav = args[0].substr(-19).substring(0, 18)
    let emo = message.guild.emojis.find("id", idav)
    if (emo == undefined) {
        message.channel.send("Merci de rentrer un emoji du serveur")
    } else {
        let emoicn = emo.url
        let emocreate = emo.createdAt.toString().split(" ")
        let embedaR = new Discord.RichEmbed()
            .setTitle(`Informations de l'emoji :`)
            .setColor("7EBCAD")
            .setThumbnail(emoicn)
            .setFooter(client.user.username, client.user.avatarURL)
            .addField(`Id`, `\`${emo.id}\``, true)
            .addField(`Nom`, `\`${emo.name}\``, true)
            .addField(`Emoji animé`, `\`${emo.animated}\``,true)
            .addField(`Créé le :`, "`" + emocreate[0] + ' ' + emocreate[2] + ' ' + emocreate[1] + ' ' + emocreate[3] + ", " + emocreate[4] + "`", true)
            .setTimestamp()
        message.channel.send(embedaR)
    }
}

exports.conf = {
    userPerm: [],
    botPerm: ["SEND_MESSAGES"],
    coolDown: 0,
    dm: true,
    category: "Informations",
    help: "Obtenir des informations sur un emoji",
    args: "",
  }