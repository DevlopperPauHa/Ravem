const Discord = require('discord.js')
const os = require('os')
const fs = require('fs')
const package = JSON.parse(fs.readFileSync('./package.json', "utf8"))
function convMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d,
        h: h,
        m: m,
        s: s
    };
};

exports.run = (client, message, args) => {

    let cpu = os.loadavg();
    let u = convMS(client.uptime);
    let uptime = u.h + "h" + u.m + "m" + u.s + "s"

    var info_embed = new Discord.RichEmbed()
            .setColor('7EBCAD')
            .setTitle(`Informations sur ${client.user.username}`)
            .addField('Développeurs :', "Ravem Team", true)
            .addField('Library :', "Discord.js", true)
            .addField('Base de données :', "lowdb", true)
            .addField("Uptime :", uptime, true)
            .addField("Mémoire utilisée :", Math.round(process.memoryUsage().rss / 1024 / 1024) + " MB", true)
            .setTimestamp(new Date)
            .addField('Serveurs :', `${client.guilds.size}`, true)
            .addField('Utilisateurs', client.users.size, true)
            .addField('Version du bot :', package.version, true)
            .setThumbnail('https://cdn.discordapp.com/icons/447920023827251201/7087033799720809aaee2709cec6fdf6.jpg')
            .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(info_embed)
        console.log('info envoyé')
}

exports.help = {
    name: "info",
    description: "Affiche les infos bot"
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["botinfo", "stats", "statistiques"]
}