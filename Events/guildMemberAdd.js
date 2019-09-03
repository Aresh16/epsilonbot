module.exports = async (client, member, args) => {
  //On cherche le channel textuel nommé : entrée-sortie
  const sChannel = member.guild.channels.find(
    ch => ch.name === "débarcadère-🚁"
  );

  //si le channel n'éxiste pas... tant pis
  if (!sChannel) return;

  //on prépare les phrases random, à vous d'en ajouter, supprimer, etc...
  const sayArray = [
    `**${member.displayName}** a rejoint le serveur, cachez vous !`,
    `Qui veux des chips ? **${member.displayName}** a rejoint le serveur !`,
    `Hey, **${member.displayName}**, bienvenu(e) sur **${member.guild.name}**, amuse toi bien !`,
    `Attention ! **${member.displayName}** vient de débarquer !`,
    `**${member.displayName}** est entré(e) dans le monde obscur de se serveur ! Donnez lui beaucoup d'amour... il/elle en aura besoins.`,
    `**${member.displayName}** nous à enfin rejoint ! Epsilon est sauvée !`,
    `**${member.displayName}** est arrivé attend, pourquoi t'es là ?`,
    `Bienvenue **${member.displayName}**, nous t'attendions`,
    `Attention ! Un  **${member.displayName}** sauvage est apparut !`,
    `tim tadum tadum .. Oh tiens **${member.displayName}** tu es la ? je t'avais pas vu`,
    `Coucou **${member.displayName}** tu es bienvenue chez Epsilon`,
    `Bon ap' **${member.displayName}** `
  ];

  // random
  const math = Math.floor(Math.random() * sayArray.length);

  //Envoi de l'embed dans le channel défini au début
  sChannel.send({
    embed: {
      color: 0x4fce69,
      title: `**Bienvenue ${message.guild.name} |** 👋 `,
      description: `${sayArray[math]}`,
    }
  });
}; 