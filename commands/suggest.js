const Discord = require('discord.js')

exports.run = (client, message) => {

    var suggestargs = message.content.split().toString().slice(9)

    if(!suggestargs) {
        message.channel.send("Merci de préciser les arguments de votre suggestion.")
    }
    else {

    if(suggestargs.length < 25) {
        message.channel.send("Votre suggestion doit faire plus de 25 caractères.")
    }
    else {
        let suggestguild = client.guilds.get("447920023827251201")
        let suggestcha =  suggestguild.channels.get("465259756907659304")
    }
}
}