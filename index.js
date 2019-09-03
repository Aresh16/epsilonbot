const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const {token, prefix} = require('./config');
const fs = require('fs');
var servers = {};
const Command  = require('discord.js-commando');

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`------------------------------------------------------\n ${f.length} events chargés\n------------------------------------------------------`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

fs.readdir('./Musique/', (error, f) => {
    if (error) { return console.error(error); }
        let musique = f.filter(f => f.split('.').pop() === 'js');
        if (musique.length <= 0) { return console.log('Aucune commande trouvée !'); }
        musique.forEach((f) => {
            let musique = require(`./Musique/${f}`);
            console.log(` ${f} commande musiques chargée !`);
            client.commands.set(musique.help.name, musique);
        });
});

client.on("ready", () => {
    console.log("Je suis prêt");
  client.channels.find (x => x.name === "epsibot").send("Hey déso pour l'absence :scream: je suis de nouveau en ligne !");
});
   

client.login('');
