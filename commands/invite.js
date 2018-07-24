exports.run = (client, message) => {
    message.channel.send(message.author.username + ", voici mon lien d'invitation : https://lc.cx/mQz7 !")
}

exports.help = {
    name:"invite"
}

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: []
}