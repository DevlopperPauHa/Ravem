exports.run = (client, message, args) => {

    if(!args) return message.channel.send("Merci de préciser ce que vous voulez chercher.")
    const ggitargs = args.join("+")

    message.channel.send("https://lmgtfy.com/?q=" + ggitargs)
}

exports.help = {
    name: "lmgtfy"
}

exports.conf = {
    enabled: true,
    dm: true,
    aliases: ["googleit"]
}