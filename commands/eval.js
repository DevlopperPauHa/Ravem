exports.run = (client, message, args) => {

    if(!args) {
        message.channel.send("Vous devez préciser.")
    }

    var ev = eval(args)
    message.channel.send(ev)
}

exports.help = {
    name: "eval"
}

exports.conf = {
    enabled: true,
    aliases: ["e"]
}