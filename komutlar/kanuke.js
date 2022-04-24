const Discord = require("discord.js");

module.exports.run = async(client,message,args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("yeterli yetkiye sahip değilsin.");
message.channel.clone({position: message.channel.position});
message.channel.delete();

};
module.exports.conf = {
enabled: true,
guildOnly: false,
aliases:[],
permLevel: 3.
};
module.exports.help = {
name: 'temizle',
description: 'Kanalı Siler Aynı Özelliklere Sahip Kanal Açar.',
usage: '<prefix>nuke'
};