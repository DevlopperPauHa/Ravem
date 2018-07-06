const Discord = require('discord.js')

exports.run = (client, message, args) => {

    let servericon = message.guild.iconURL
        let servercreatedate = message.guild.createdAt.toString().split(" ")
        var si_embed = new Discord.RichEmbed()
            .setThumbnail(message.guild.avatarURL)
            .setColor('7EBCAD')
            .setTitle('Informations sur le serveur')
            .setThumbnail(servericon)
            .addField('\nNom du serveur :', message.guild.name)
            .addField('\nPropriétaire du serveur :', message.guild.owner)
            .addField('\nID du serveur :', message.guild.id)
            .setTimestamp(new Date)
            .addField('\nDate de création du serveur :', servercreatedate[0] + ' ' + servercreatedate[2] + ' ' + servercreatedate[1] + ' ' + servercreatedate[3] + ", " + servercreatedate[4])
            .addField('\nNombre de membres :', message.guild.memberCount)
            .addField('\nRégion du serveur :', message.guild.region)
            .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(si_embed)
        console.log('serverinfo envoyé')

}