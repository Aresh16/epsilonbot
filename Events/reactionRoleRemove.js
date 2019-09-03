module.exports = (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.get(user.id)
    const channel = message.guild.channels.find(c => c.name === 'commandes-epsibot');

    if (member.user.client) return;

    const rolestar = message.guild.roles.get('591685684008321054'); //Citoyen des étoiles
    const rolecorpo = message.guild.roles.get('592468464040411146'); //Citoyen d'une corpo

    if (["star", "star2"].includes(messageReaction.emoji.name) && 
    message.channel.id === channel.id
    )  {
switch (messageReaction.emoji.name) {
    case "star":
        member.removeRole(rolestar);
        message.channel
        .send(`Le rôle ${rolestar.name} a été ajouté avec succès !`)
        .then(msg => msg.delete(2500));
        break;
                  case "star2":
                            member.removeRole(rolecorpo);
                            message.channel.send(`Le rôle ${rolecorpo.name} à été ajouté avec succès !`)
                            .then(msg => msg.delete(2500));
                            break;
}
      }
}