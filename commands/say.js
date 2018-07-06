exports.run = (client, message, args) => {
    if(!args[0]) {
        message.channel.send("Merci de préciser ce que vous voulez que le bot dise.")
    }
    else{
        let sayMessage = args.join(" ")
        message.channel.send(sayMessage)
    }
}