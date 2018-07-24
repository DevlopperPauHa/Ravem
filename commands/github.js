exports.run = (client, message) => {
    message.channel.send(message.author.username + ", voici le lien de mon code sur GitHub : https://github.com/DevlopperPauHa/Ravem. N'oubliez pas que vous avez la commande `-code` aussi ! ")
}

exports.help = {
    name:"github"
}

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: []
}