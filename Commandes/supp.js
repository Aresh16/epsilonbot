const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("déso pas déso, t'as pas les autorisations pour ca")
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("J'ai pas la permission de modifier ou supprimer les messages");

    if (!args[0]) return message.channel.send('tu doit préciser un nombre de message');
    if (args[0] < 1 && args[0] > 100) return message.channel.send('choisis un nombre entre 1 et 100');
        if (isNaN(args[0])) return message.channel.send("C'est pas un nombre ton truc 🤔 ");

    message.channel.bulkDelete(1)
    message.channel.bulkDelete(1)

    message.channel.bulkDelete(args[0])
        .then(messages => message.channel.send(`🗑 j'ai supprimé **${args[0]}** messages. 😁`).then(msg => msg.delete({
          timeout: 300000
        }))).catch().catch((e) => message.channel.send('Il y a eu une erreur 😡'));
}
    

module.exports.help = {
    name: 'supp'
};
