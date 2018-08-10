const Discord = require('discord.js')

exports.run = (client, message, args) => {

    var embedcolor = '7EBCAD'
    var rappel = "Rappel : les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l\'exécution de votre commande. "

    if(!args[0]) {
        var help_embed = new Discord.RichEmbed()
            .setColor('7EBCAD')
            .setTitle('Commandes du bot')
            .setDescription('Rappel : les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l\'exécution de votre commande. \nNote : Vous pouvez aussi faire `-help {commande}` pour avoir plus d\'informations sur celle-ci.\n\n')
            .addField('Informations :', "`info` `fancreate` `fanshare` `emoji` `userinfo` `channelinfo` `serverinfo` `ping`")
            .addField('Modération :', "`kick` `ban` `purge` `warn`")
            .addField('Fun :', "`ping` `say` `lmgtfy`")
            .addField('Utilitaires :', "`help` `meteo` `id` `report` `avatar` `suggest`")
            .setThumbnail('https://cdn.discordapp.com/icons/447920023827251201/7087033799720809aaee2709cec6fdf6.jpg')
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
        message.author.send(help_embed)
        message.reply('regarde tes messages privés !')
        console.log('Help envoyé')

    }
    else {
        if((args[0] === "ping") || (args[0] === "p")) {
        let pingembd = new Discord.RichEmbed()
            .setColor('7EBCAD')
            .setTitle('Commande : ping')
            .addField('Description de la commande', "Affiche le ping du bot.")
            .setDescription("Rappel : les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande. ")
            .addField('Utilisation', "`-ping`")
            .addField("Alias", "`-p`")
            .setTimestamp(new Date)
            .setThumbnail(client.user.avatarURL)
            .setFooter(client.user.username, client.user.avatarURL)
            message.channel.send(pingembd)
        }
        else {
            if((args[0] === "avatar") || (args[0] === "pp")) {
                let avatarembd = new Discord.RichEmbed()
                    .setColor('7EBCAD')
                    .setTitle('Commande : avatar')
                    .addField('Description de la commande', "Affiche l'avatar d'un utilisateur mentionné ou le vôtre.")
                    .setDescription("Rappel : les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande. ")
                    .addField('Utilisation', "`-avatar`" + "\n`-avatar {utilisateur}`")
                    .addField("Alias", "`-pp`")
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
                        .addField('Description de la commande', 'Permet d\'expulser un utilisateur du serveur avec la permission "KICK_MEMBERS".')
                        .setDescription(rappel)
                        .addField('Utilisation', "`-kick {utilisateur} {raison}`\n`-kick {utilisateur}`")
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
                            .setDescription(rappel)
                            .addField('Utilisation', "`-ban {utilisateur} {raison}`\n`-ban {utilisateur}`")
                            .setTimestamp(new Date)
                            .setThumbnail(client.user.avatarURL)
                            .setFooter(client.user.username, client.user.avatarURL)
                        message.channel.send(banembd)
                    }
                    else {
                        if((args[0] === "purge") || (args[0] === "clear") || (args[0] === "prune")) {
                            let purgeembd = new Discord.RichEmbed()
                                .setColor(embedcolor)
                                .setTitle('Commande : purge')
                                .addField('Description de la commande', 'Permet d\'effacer un nombre de message définini avec la permission "MANAGE_MESSAGES".')
                                .setDescription(rappel)
                                .addField('Utilisation', "`-purge {nombre de message}`")
                                .addField("Alias", "`-clear`\n`-prune`")
                                .setTimestamp(new Date)
                                .setThumbnail(client.user.avatarURL)
                                .setFooter(client.user.username, client.user.avatarURL)
                            message.channel.send(purgeembd)
                        }
                        else {
                            if((args[0] === "warn") || (args[0] === "avert")) {
                                let warnembed = new Discord.RichEmbed()
                                    .setColor(embedcolor)
                                    .setTitle("Commande : warn")
                                    .addField('Description de la commande :', 'Permet d\'\avertir un utilisatzeur en message privé avec la permission "KICK_MEMBERS".')
                                    .setDescription(rappel)
                                    .addField('Utilisation', "`-warn {utilisateur} {raison}`")
                                    .addField("Alias", "`-avert`")
                                    .setThumbnail(client.user.avatarURL)
                                    .setTimestamp(new Date)
                                    .setFooter(client.user.username, client.user.avatarURL)
                                message.channel.send(warnembed)
                            }
                            else {
                                if((args[0] === "help") || (args[0] === "h")) {
                                    let helphelpembed = new Discord.RichEmbed()
                                        .setColor(embedcolor)
                                        .setTitle('Commande : help')
                                        .addField('Description de la commande', "Affiche toutes les commandes disponibles sur le bot.")
                                        .setDescription(rappel)
                                        .addField('Utilisation', "`-help`\n`-help {catégorie}`\n`-help {commande}\n`-help here`")
                                        .addField("Alias", "`-h`")
                                        .setThumbnail(client.user.avatarURL)
                                        .setTimestamp(new Date)
                                        .setFooter(client.user.username, client.user.avatarURL)
                                    message.channel.send(helphelpembed)
                                }
                                else {
                                    if((args[0] === "weather") || (args[0] === "meteo") || (args[0] === "météo")) {
                                        let weatherembed = new Discord.RichEmbed()
                                            .setColor(embedcolor)
                                            .setTitle('Commande : meteo')
                                            .addField('Description de la commande', "Affiche la météo de votre localisation.")
                                            .setDescription(rappel)
                                            .addField('Utilisation', "`-meteo {localisation}`")
                                            .addField("Alias", "`-weather`\n`-météo`")
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
                                                .setDescription(rappel)
                                                .addField("Utilisation", "`-id`\n`-id {utilisateur}`")
                                                .setTimestamp(new Date)
                                                .setThumbnail(client.user.avatarURL)
                                                .setFooter(client.user.username, client.user.avatarURL)
                                            message.channel.send(idembed)
                                        }
                                        else {
                                            if((args[0] === "serverinfo") || (args[0] === "si") || (args[0] === "infoserveur") || (args[0] === "serveurinfo")) {
                                                let siembed = new Discord.RichEmbed()
                                                    .setColor(embedcolor)
                                                    .setTitle("Commande : serverinfo")
                                                    .addField("Description de la commande", "Affiche des informations sur le serveur actuel.")
                                                    .setDescription(rappel)
                                                    .addField("Utilisation", "`-serverinfo`")
                                                    .addField("Alias", "`-si`\n`-infoserveur`\n`-serveurinfo`")
                                                    .setTimestamp(new Date)
                                                    .setThumbnail(client.user.avatarURL)
                                                    .setFooter(client.user.username, client.user.avatarURL)
                                                message.channel.send(siembed)
                                            }
                                            else {
                                                if((args[0] === "channelinfo") || (args[0] === "ci")) {
                                                    let chanlembd = new Discord.RichEmbed()
                                                        .setColor(embedcolor)
                                                        .setTitle("Commande : channelinfo")
                                                        .addField("Description de la commande", "Affiche des informations sur le channel actuel ou un channel mentionné.")
                                                        .setDescription(rappel)
                                                        .addField("Utilisation", "`-channelinfo`\n`-channelinfo {channel}`")
                                                        .addField("Alias", "`-ci`")
                                                        .setTimestamp(new Date)
                                                        .setThumbnail(client.user.avatarURL)
                                                        .setFooter(client.user.username, client.user.avatarURL)
                                                    message.channel.send(chanlembd)
                                                }
                                                else {
                                                    if((args[0] === "userinfo") || (args[0] === "ui")) {
                                                        let usrembd = new Discord.RichEmbed()
                                                            .setColor(embedcolor)
                                                            .setTitle("Commande : userinfo")
                                                            .addField("Description de la commande", "Affiche vos informations ou celles d'un utilisateur mentionné.")
                                                            .setDescription(rappel)
                                                            .addField('Utilisation', "`-userinfo`\n`-userinfo {utilisateur}`")
                                                            .addField("Alias", "`-ui`")
                                                            .setTimestamp(new Date)
                                                            .setThumbnail(client.user.avatarURL)
                                                            .setFooter(client.user.username, client.user.avatarURL)
                                                        message.channel.send(usrembd)
                                                    }
                                                    else {
                                                        if((args[0] === "say") || (args[0] === "s")) {
                                                            let sayembed = new Discord.RichEmbed()
                                                                .setColor(embedcolor)
                                                                .setTitle("Commande : say")
                                                                .addField("Description de la commande", "Fait parler le bot.")
                                                                .setDescription(rappel)
                                                                .addField("Utilisation", "`-say {message}`")
                                                                .addField("Alias", "`-s`")
                                                                .setTimestamp(new Date)
                                                                .setThumbnail(client.user.avatarURL)
                                                                .setFooter(client.user.username, client.user.avatarURL)
                                                            message.channel.send(sayembed)
                                                        }
                                                        else {
                                                            if(args[0] === "report") {
                                                                let reportembd = new Discord.RichEmbed()
                                                                    .setColor(embedcolor)
                                                                    .setTitle('Commande : report')
                                                                    .addField("Description de la commande", "Vous voulez nous signaler un utilisateur ou bien une erreur ? Une faille ? Une anomalie ou encore un problème ? Cette commande vous aidera. Mais attention, pour les suggestions, faites `-help suggest`.\nNote : votre report doit contenir plus de 25 caractères.")
                                                                    .setDescription(rappel)
                                                                    .addField("Utilisation", "`-report {votre raison}`")
                                                                    .setTimestamp(new Date)
                                                                    .setThumbnail(client.user.avatarURL)
                                                                    .setFooter(client.user.username, client.user.avatarURL)
                                                                message.channel.send(reportembd)
                                                            }
                                                            else {
                                                                if(args[0] === "suggest") {
                                                                    let suggestembed = new Discord.RichEmbed()
                                                                        .setColor(embedcolor)
                                                                        .setTitle('Commande : suggest')
                                                                        .addField('Description de la commande', "Vous voulez nous faire parvenir une suggestion ? Cette commande est faite pour.")
                                                                        .setDescription(rappel)
                                                                        .addField('Utilisation', "`-suggest {votre suggestion}`")
                                                                        .setTimestamp(new Date)
                                                                        .setThumbnail(client.user.avatarURL)
                                                                        .setFooter(client.user.username, client.user.avatarURL)
                                                                    message.channel.send(suggestembed)
                                                                }
                                                                else {
                                                                    if((args[0] === "code") || (args[0] === "c")) {
                                                                        let codeembd = new Discord.RichEmbed()
                                                                            .setColor(embedcolor)
                                                                            .setTitle('Commande : code')
                                                                            .addField("Description de la commande", "Vous voulez voir le code d'une commande en particulier ? Cette cmmande est faite pour cela.")
                                                                            .setDescription(rappel)
                                                                            .addField("Utilisation", "`-code {commande}`")
                                                                            .addField("Alias", "`-c`")
                                                                            .setTimestamp(new Date)
                                                                            .setThumbnail(client.user.avatarURL)
                                                                            .setFooter(client.user.username, client.user.avatarURL)
                                                                        message.channel.send(codeembd)
                                                                    }
                                                                    else {
                                                                        if((args[0] === "8ball") || (args[0] === "8b")) {
                                                                            let ballembed = new Discord.RichEmbed()
                                                                                .setColor(embedcolor)
                                                                                .setTitle("Commande : 8ball")
                                                                                .setDescription(rappel)
                                                                                .addField("Description de la commande", "Le bot répond par une question que vous avez posé juste avant. :8ball:")
                                                                                .addField("Utilisation", "`-8ball {question}`")
                                                                                .addField("Alias", "`-8b`")
                                                                                .setTimestamp(new Date)
                                                                                .setThumbnail(client.user.avatarURL)
                                                                                .setFooter(client.user.username, client.user.avatarURL)
                                                                            message.channel.send(ballembed)
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
            }
        }
    }
}

exports.help = {
    name: "help",
    description: "Affiche le help"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["h"]
}