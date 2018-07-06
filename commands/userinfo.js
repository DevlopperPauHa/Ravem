const Discord = require('discord.js')

exports.run = (client, message, args) => {

    let usermtnd = message.mentions.users.first() ? message.mentions.users.first() : message.author
        let usericon = usermtnd.avatarURL
        let onthesrv = message.guild.joinedAt.toString().split(" ")
        let usercreate = usermtnd.createdAt.toString().split(" ")
        let ui_embed = new Discord.RichEmbed()
            .setColor('7EBCAD')
            .setAuthor(`Information sur ${usermtnd.username}`, usermtnd.avatarURL)
            .addField('Username', usermtnd.username)
            .addField('Discriminateur', usermtnd.discriminator)
            .addField('ID', usermtnd.id)
            .addField('Tag', usermtnd.tag)
            .addField('Statut', usermtnd.presence.status)
            .addField('Utilisateur bot', usermtnd.bot)
            .setTimestamp(new Date)
            .addField('Date de création du compte', usercreate[0] + ' ' + usercreate[2] + ' ' + usercreate[1] + ' ' + usercreate[3] + ", " + usercreate[4])
            .addField('Date d\'\arrivée sur le serveur', onthesrv[0] + ' ' + onthesrv[2] + ' ' + onthesrv[1] + ' ' + onthesrv[3] + ", " + onthesrv[4])
            .setThumbnail(usericon)
            .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(ui_embed)
        console.log('ui envoyé')
}