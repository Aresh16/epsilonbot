const Discord = require('discord.js');
const client = new Discord.Client();
const active = new Map();

module.exports = (client) => {
    client.user.setActivity("les Epsiloniens", {type: "WATCHING"})
        };
   
