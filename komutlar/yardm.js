const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("yeterli yetkiye sahip değilsin.");
    
  const embed = new Discord.MessageEmbed()
    .setColor(`BLUE`)
    .setTimestamp()
    .setFooter(`Atalantis Development`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/960274633058312263/967711304766869555/Adsz_tasarm.png`)
    .setDescription(`
Atalantis Network Version 1 Survival Plugin Paketi:
Paket Tamamıyla twєєtч ✩#1399 Tarafından Yapılmıştır

https://dosya.co/k1g0kv541iut/Atalantis_Survival_V1_Paket.zip.html
(Önemli: Paketi Alıp Sunucudan Ayrılan Arkadaşlar Sunucudan Sınırsız
Uzaklaştırılacaktır BirSonraki Paketlere Erişim Sağlayamayacaktır.)
`);
    return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım', 'yardim', 'help', 'YARDİM'],
  permLevel: 3
};

exports.help = {
  name: "YARDIM",
  description: "Yardım Menüsü",
  usage: "yardım"
};
