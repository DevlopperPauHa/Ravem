exports.run = (client, message, args) => {
    message.channel.send('Pong ! `' + ` ${client.ping} ` + '` ms' + ' :ping_pong:')
}

exports.help = {
    name: "ping",
    description: "Affiche le ping du bot"
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["p"]
}