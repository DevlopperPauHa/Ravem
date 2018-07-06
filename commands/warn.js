const Discord = require('discord.js')

exports.run = (client, message) => {

    let raison = message.content.split(" ").slice(2).join(" ");

        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Vous ne pouvez pas avertir des membres du serveur.")
        }

        if(!raison) {
            return message.channel.send("Veuillez préciser la raison de cet avertissement.")
        }

        if(message.mentions.users.size === 0) {
            return message.channel.send("Veuillez préciser l'utilisateur à avertir.")
        }

        let userwarn = message.guild.member(message.mentions.users.first())

        if(!userwarn.kickable) {
            return message.channel.send("Vous ne pouvez pas avertir cet utilisateur.")
        }

        if(!userwarn) {
            return message.channel.send("Cet utilisateur est introuvable.")
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission d'avertir des membres.")
        }

        let userwarnusername = message.mentions.users.first().username
        let userwarndiscrim = message.mentions.users.first().discriminator 

        var warnmsg = new Discord.RichEmbed()
            .setColor('FFFF00')
            .setTitle("Vous avez été **warn** sur le serveur " + message.guild.name)
            .addField("Par : ", message.author.username + "#" + message.author.discriminator)
            .addField("Raison : ", raison)
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
            .setThumbnail('https://cdn.discordapp.com/icons/447920023827251201/7087033799720809aaee2709cec6fdf6.png')
            let sendembd = userwarn.send(warnmsg)
        sendembd

        sendembd.then(member => {
            message.channel.send(`${userwarnusername} a été averti.`)
            let warnnumber = 
            fs.createWriteStream(`./warnsfiles/${message.guild.id}-warns.json`)
            fs.writeFile(`./warnsfiles/${message.guild.id}-warns.json`, `{\n"${userwarnusername}#${userwarndiscrim} (id : ${userwarn.id}) has been warned on": \n"${message.guild.name} (guild id : ${message.guild.id})",\n"Reason": "${raison}"\n}\n\n`)
        })
}