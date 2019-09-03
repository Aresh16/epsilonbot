module.exports = async (client, member, args) => {
    //On cherche le channel textuel nommé : entrée-sortie
    const sChannel = member.guild.channels.find(
      ch => ch.name === "débarcadère-🚁"
    );
  
    //si le channel n'éxiste pas... tant pis
    if (!sChannel) return;
  
    //on prépare les phrases random, à vous d'en ajouter, supprimer, etc...
    const sayArray = [
      `**${member.displayName}** est partit du serveur, bye bye`,
      `**${member.displayName}** est partit.. Epsibot est triste`,
      `Hey, **${member.displayName}** est enfin partit ! Vas-y DJ fait péter le son !`,
      `Attention ! **${member.displayName}** nous a quitté... quel dommage`,
      `Où tu vas **${member.displayName}** ?`,
      `**${member.displayName}** est enfin partie, on en avait pas besoin de toute façon !`,
      `Nous t'attendrons toujours .. **${member.displayName}** `,
      `Hey, **${member.displayName}** est enfin partit ! Vas-y DJ fait péter le son !`,
      `Attention ! **${member.displayName}** nous a quitté... quel dommage`,
      `Où tu vas **${member.displayName}** ?`,
      `Bon ap' **${member.displayName}** `
    ];
  
    // random
    const math = Math.floor(Math.random() * sayArray.length);
  
    //Envoi de l'embed dans le channel défini au début
    sChannel.send({
      embed: {
        color: 0xCD2400,
        title: `**Au-revoir ${message.guild.name} |** 👋`,
        description: `${sayArray[math]}`,
      }
    });
  }; 