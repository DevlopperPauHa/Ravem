const Discord = require('discord.js')

exports.run = (client, message, args) => {

    var embedcolor = '7EBCAD'

    if(!args[0]) {
        var help_embed = new Discord.RichEmbed()
            .setColor('7EBCAD')
            .setTitle('Commandes du bot')
            .addField('\n\nModération :', "`kick` `ban` `purge` `warn`")
            .addField('\n\nUtilitaires :', "`help` `meteo` `id` `serverinfo` `channelinfo` `userinfo`")
            .addField('\n\nFun :', "`ping` `say`")
            .addField('\n\nInformations :', "`info` `fancreate` `fanshare`")
            .setThumbnail('https://cdn.discordapp.com/icons/447920023827251201/7087033799720809aaee2709cec6fdf6.jpg')
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
        message.author.send(help_embed)
        message.reply('regarde tes messages privés !')
        console.log('Help envoyé')

    }
    else {
        if(args[0] === "ping") {
        let pingembd = new Discord.RichEmbed()
            .setColor('7EBCAD')
            .setTitle('Commande : ping')
            .addField('Description de la commande', "Affiche le ping du bot.")
            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande. ")
            .addField('Utilisation', "`r!ping`")
            .setTimestamp(new Date)
            .setThumbnail(client.user.avatarURL)
            .setFooter(client.user.username, client.user.avatarURL)
            message.channel.send(pingembd)
        }
        else {
            if(args[0] === "avatar") {
                let avatarembd = new Discord.RichEmbed()
                    .setColor('7EBCAD')
                    .setTitle('Commande : avatar')
                    .addField('Description de la commande', "Affiche l'avatar d'un utilisateur mentionné ou le vôtre.")
                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande. ")
                    .addField('Utilisation', "`r!avatar`" + "\n`r!avatar {utilisateur}`")
                    .setTimestamp(new Date)
                    .setThumbnail(client.user.avatarURL)
                    .setFooter(client.user.username, client.user.avatarURL)
                message.channel.send(avatarembd)
            }
            else {
                if(args[0] === "kick") {
                    let kickembd = new Discord.RichEmbed()
                        .setColor('7EBCAD')
                        .setTitle('Commande : kick')
                        .addField('Description de la commande', 'Permet d\'\expulser un utilisateur du serveur avec la permission "KICK_MEMBERS".')
                        .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                        .addField('Utilisation', "`r!kick {utilisateur} {raison}`\n`r!kick {utilisateur}`")
                        .setTimestamp(new Date)
                        .setThumbnail(client.user.avatarURL)
                        .setFooter(client.user.username, client.user.avatarURL)
                    message.channel.send(kickembd)
                }
                else {
                    if(args[0] === "ban") {
                        let banembd = new Discord.RichEmbed()
                            .setColor('7EBCAD')
                            .setTitle('Commande : kick')
                            .addField('Description de la commande', 'Permet de bannir un utilisateur du serveur avec la permission "BAN_MEMBERS".')
                            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                            .addField('Utilisation', "`r!ban {utilisateur} {raison}`\n`r!ban {utilisateur}`")
                            .setTimestamp(new Date)
                            .setThumbnail(client.user.avatarURL)
                            .setFooter(client.user.username, client.user.avatarURL)
                        message.channel.send(banembd)
                    }
                    else {
                        if(args[0] === "purge") {
                            let purgeembd = new Discord.RichEmbed()
                                .setColor(embedcolor)
                                .setTitle('Commande : purge')
                                .addField('Description de la commande', 'Permet d\'\effacer un nombre de message définini avec la permission "MANAGE_MESSAGES".')
                                .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                .addField('Utilisation', "`r!purge {nombre de message}`")
                                .setTimestamp(new Date)
                                .setThumbnail(client.user.avatarURL)
                                .setFooter(client.user.username, client.user.avatarURL)
                            message.channel.send(purgeembd)
                        }
                        else {
                            if(args[0] === "warn") {
                                let warnembed = new Discord.RichEmbed()
                                    .setColor(embedcolor)
                                    .setTitle("Commande : warn")
                                    .addField('Description de la commande :', 'Permet d\'\avertir un utilisatzeur en message privé avec la permission "KICK_MEMBERS".')
                                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                    .addField('Utilisation', "`r!warn {utilisateur} {raison}`")
                                    .setThumbnail(client.user.avatarURL)
                                    .setTimestamp(new Date)
                                    .setFooter(client.user.username, client.user.avatarURL)
                                message.channel.send(warnembed)
                            }
                            else {
                                if(args[0] === "help") {
                                    let helphelpembed = new Discord.RichEmbed()
                                        .setColor(embedcolor)
                                        .setTitle('Commande : help')
                                        .addField('Description de la commande', "Affiche toutes les commandes disponibles sur le bot.")
                                        .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                        .addField('Utilisation', "`r!help`")
                                        .setThumbnail(client.user.avatarURL)
                                        .setTimestamp(new Date)
                                        .setFooter(client.user.username, client.user.avatarURL)
                                    message.channel.send(helphelpembed)
                                }
                                else {
                                    if(args[0] === "weather") {
                                        let weatherembed = new Discord.RichEmbed()
                                            .setColor(embedcolor)
                                            .setTitle('Commande : meteo')
                                            .addField('Description de la commande', "Affiche la météo de votre localisation.")
                                            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                            .addField('Utilisation', "`r!meteo {votre localisation}`")
                                            .setThumbnail(client.user.avatarURL)
                                            .setTimestamp(new Date)
                                            .setFooter(client.user.username, client.user.avatarURL)
                                        message.channel.send(weatherembed)
                                    }
                                    else {
                                        if(args[0] === "id") {
                                            let idembed = new Discord.RichEmbed()
                                                .setColor(embedcolor)
                                                .setTitle("Commande : id")
                                                .addField("Description de la commande", "Affiche l'id d'un utilisateur mentionné.")
                                                .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                .addField("Utilisation", "`r!id`\n`r!id {utilisateur}`")
                                                .setTimestamp(new Date)
                                                .setThumbnail(client.user.avatarURL)
                                                .setFooter(client.user.username, client.user.avatarURL)
                                            message.channel.send(idembed)
                                        }
                                        else {
                                            if(args[0] === "serverinfo") {
                                                let siembed = new Discord.RichEmbed()
                                                    .setColor(embedcolor)
                                                    .setTitle("Commande : serverinfo")
                                                    .addField("Description de la commande", "Affiche des informations sur le serveur actuel.")
                                                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                    .addField("Utilisation", "`r!serverinfo`")
                                                    .setTimestamp(new Date)
                                                    .setThumbnail(client.user.avatarURL)
                                                    .setFooter(client.user.username, client.user.avatarURL)
                                                message.channel.send(siembed)
                                            }
                                            else {
                                                if(args[0] === "channelinfo") {
                                                    let chanlembd = new Discord.RichEmbed()
                                                        .setColor(embedcolor)
                                                        .setTitle("Commande : channelinfo")
                                                        .addField("Description de la commande", "Affiche des informations sur le channel actuel ou un channel mentionné.")
                                                        .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                        .addField("Utilisation", "`r!channelinfo`\n`r!channelinfo {channel}`")
                                                        .setTimestamp(new Date)
                                                        .setThumbnail(client.user.avatarURL)
                                                        .setFooter(client.user.username, client.user.avatarURL)
                                                    message.channel.send(chanlembd)
                                                }
                                                else {
                                                    if(args[0] === "userinfo") {
                                                        let usrembd = new Discord.RichEmbed()
                                                            .setColor(embedcolor)
                                                            .setTitle("Commande : userinfo")
                                                            .addField("Description de la commande", "Affiche vos informations ou celles d'un utilisateur mentionné.")
                                                            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                            .addField('Utilisation', "`r!userinfo`\n`r!userinfo {utilisateur}`")
                                                            .setTimestamp(new Date)
                                                            .setThumbnail(client.user.avatarURL)
                                                            .setFooter(client.user.username, client.user.avatarURL)
                                                        message.channel.send(usrembd)
                                                    }
                                                    else {
                                                        if(args[0] === "say") {
                                                            let sayembed = new Discord.RichEmbed()
                                                                .setColor(embedcolor)
                                                                .setTitle("Commande : say")
                                                                .addField("Description de la commande", "Fait parler le bot.")
                                                                .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                .addField("Utilisation", "`r!say {message}`")
                                                                .setTimestamp(new Date)
                                                                .setThumbnail(client.user.avatarURL)
                                                                .setFooter(client.user.username, client.user.avatarURL)
                                                            message.channel.send(sayembed)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}