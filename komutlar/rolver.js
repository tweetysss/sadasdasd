const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("yeterli yetkiye sahip değilsin.");


    if (!message.guild) {
        const ozelmesajuyari = new Discord.MessageEmbed()
            .setColor("BLUE")
            .addField('komut özel mesajlardan kullanılmaz!')
        return message.author.send(ozelmesajuyari);
    }
    let guild = message.guild
    let rol = message.mentions.roles.first()
    let user = message.mentions.members.first()

    if (!user) return message.reply('kime rol verileceğini yazmadın!').catch(console.error);
    if (rol.length < 1) return message.reply('kullanıcıya verilecek rolü belirtmedin!');
    user.roles.add(rol);

    const embed = new Discord.MessageEmbed()
        .setColor(`BLUE`)
        .setTimestamp()
        .setFooter(`Atalantis Development`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/960274633058312263/967711304766869555/Adsz_tasarm.png`)
        .setDescription(`
**${user}** isimli kullanıcıya **${rol}** rolü verildi!
kullanıcı artık <#967438920512061520> isimli odayı görebilir!

Sunucudan çıkış yaparsanız sunucudan kalıcı olarak uzaklaştırılırsınız.
Ve Birdaha Atalantis Network Plugin Paketlerine Erişim Sağlayamazsınız.

https://www.youtube.com/channel/UCVJZFWF9Ii8gXjQ4O3lXliw
`)

    message.channel.send({ embed })
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['paketerisim'],
    permLevel: 3
};

exports.help = {
    name: 'paketerisim',
    description: 'İstediğiniz kişiden istediğiniz rolü alır.',
    usage: 'paketerisim [kullanıcı] [@rol]'
};