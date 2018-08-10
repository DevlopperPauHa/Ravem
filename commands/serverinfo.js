const Discord = require('discord.js')
const moment = require('moment')
moment.locale('fr')

exports.run = (client, message) => {

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    let servericon = message.guild.iconURL
        let servercreatedatef = moment(message.guild.createdAt).format('dddd Do MMMM YYYY, HH:mm:ss');
        let servercreatedatefr = servercreatedatef.substring(0,1).toLocaleUpperCase() + servercreatedatef.substring(1);
        var si_embed = new Discord.RichEmbed()
            .setThumbnail(message.guild.avatarURL)
            .setColor('7EBCAD')
            .setAuthor(message.guild.name, servericon)
            .setThumbnail(servericon)
            .addField('Propriétaire du serveur', message.guild.owner, true)
            .addField('ID du serveur ', message.guild.id, true)
            .addField('Nombre de membres ', message.guild.memberCount, true)
            .setTimestamp(new Date)
            .addField("Nombre de canaux ", message.guild.channels.size, true)
            .addField("Nombre de rôles ", message.guild.roles.size, true)
            .addField('Date de création du serveur ', servercreatedatefr, true)
            .addField('Région du serveur ', message.guild.region, true)
            .addField('Liste des rôles', message.guild.roles.sort((x,y)=> y.position - x.position).map(role=> role.name).join(', '))
            .addField("Liste des emojis", message.guild.emojis.array().join(" "))
            .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(si_embed)
        console.log('serverinfo envoyé')

}

exports.help = {
    name: "serverinfo",
    description: "Donner des informations sur le serveur."
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["si", "infoserveur", "serveurinfo"]
}