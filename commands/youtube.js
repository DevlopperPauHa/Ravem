const Youtube = require("youtube-node")
const youtube = new Youtube();
const config = require("../config.json")

youtube.setKey(config.youtube_api_key)

exports.run = (client, message, args) => {

youtube.search(args, function(error, result) {
    if(error) {
        consooe.log(error)
    }
    else {
        console.log(JSON.stringify(result, null));
    }
})

}

exports.help = {
    name: "youtube"
}

exports.conf = {
    enabled: true,
    dm: true,
    aliases: ["yt"]
}