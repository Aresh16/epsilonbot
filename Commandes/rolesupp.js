const Discord = require ("discord.js")
module.exports.run = async(client, message, args) =>{

    message.delete()
// Permission de gerer les rôles
  if(!message.guild.member (message.author).hasPermission("MANAGE_ROLES")) return message.channel.send("Vous n'avez pas la permission d'exécuter cette commande !")
  if(!message.guild.member (client.user).hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas la permission d'exécuter cette commande.")
// Permission de gerer les rôles

  let membre = message.mentions.members.first()
  let roles = message.mentions.roles.first()
  if(!roles) return message.channel.send ("Vous n'avez pas mentionné de rôle !")
  if(!membre) return message.channel.send ("Vous n'avez pas mentionné de membre !")  
  let role = message.guild.roles.find(x => x.name === roles)
  membre.removeRole(roles).catch(console.error)
  message.channel.send(membre + "  a perdu le role de " + roles + ":thumbsdown:")
  
}

module.exports.help = {
    name: "rolesupp"
};