const weather = require('weather-js')
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    
    weather.find({search: args, degreeType: 'C'}, function(err, result) {
        if(err) message.channel.send(err);

        console.log(JSON.stringify(result, false, 2));
        
        var current = result[0].current
        var location = result[0].location
        var forecast = result[0].forecast

        if(!location.alert) {
            location.alert = "Pas d'alerte."
        }

        let weatherembd = new Discord.RichEmbed()
            .setColor('FFA500')
            .setTitle("Météo à " + location.name, true)
            .addField('Jour', current.day, true)
            .addField('Date', current.date, true)
            .addField("Température", current.temperature + "°", true)
            .addField('Ressenti', current.feelslike + "°", true)
            .addField("Vitesse du vent", current.windspeed, true)
            .addField("Sens du vent", current.winddisplay, true)
            .addField('Temps actuel', current.skytext, true)
            .addField('Humidité', current.humidity + "%", true)
            .addField('Alerte', location.alert, true)
            .addField('Type de degrés', "°" + location.degreetype, true)
            .addField('Heure d\'\observation', current.observationtime, true)
            .addField('Point d\'\observation', current.observationpoint, true)
            .setThumbnail(current.imageUrl)
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(weatherembd)
    });
}