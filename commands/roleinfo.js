const Discord = require('discord.js')

exports.run = (client, message, args) => {

    var rl

    if(!args[0]) {
        return message.channel.send("Blablabla")
    }
    else if(message.guild.roles.exists("id", args[0])) {
        rl = message.guild.roles.get(args[0])
    }
    else if(message.mentions.roles.first()) {
        rl = message.mentions.roles.first()
    }
    else if(message.guild.roles.exists("name", args[0])) {
        rl = message.guild.roles.find("name", args[0])
    }
    else if(rl === undefined) {
        return message.channel.send("Le rôle demandé n'existe pas. Essayez avec le nom, l'identifiant ou la mention.")
    }

    var crrl = rl.createdAt.toString().split(" ")
    var rlmbd = new Discord.RichEmbed()
        .setTitle("Informations sur le rôle " + rl.name)
        .setFooter(client.user.username, client.user.avatarURL)
        .setColor(rl.hexColor)
        .addField("Nom du rôle ", rl.name, true)
        .addField("ID du rôle", rl.id, true)
        .addField("Couleur du rôle", rl.hexColor, true)
        .addField("Date de création du rôle", crrl[0] + ' ' + crrl[2] + ' ' + crrl[1] + ' ' + crrl[3] + ", " + crrl[4], true)
        .addField("Position du rôle", rl.calculatedPosition, true)
        .addField("Utilisateurs avec ce rôle", rl.members, true)
        .addField("Mentionnable", rl.mentionable, true)
        .addField("Hoist", rl.hoist, true)
        .addField("Permissions", rl.permissions, true)
    message.channel.send(rlmbd)
}

exports.help = {
    name: "roleinfo",
    description: "Avoir des informations sur un rôle"
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ri", "roleinfo"]
}