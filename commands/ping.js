exports.run = (client, message, args) => {
    message.channel.send('Pong ! `' + ` ${client.ping} ` + '` ms' + ' :ping_pong:')
}