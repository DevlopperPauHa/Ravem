const math = require('mathjs');

exports.run = (client, message, args) => {
    let calc;
    var args = args.join(" ");
    try {
      calc = math.eval(args);
    } catch (err) {
      calc = err
    }
  message.channel.send(`**Calcul**\n\`\`\`\n${args}\`\`\`\n**Résultat**\n\`\`\`\n${calc}\`\`\``)
  }
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [`m`],
  };
  
  exports.help = {
    name: `math`,
    description: `Faisons des maths.`,
    usage: `=maths <votre calcul`,
  };
