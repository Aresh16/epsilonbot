const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

module.exports.run = (client, message, args) => {
    

    
message.channel.send({embed: {
    color: 3447003,
    author: {
      icon_url: "https://images-ext-2.discordapp.net/external/AMZrQY40pVyKT7_yMkfnQGFvl4WN2OpMqCQZiLjTAtA/https/images-ext-1.discordapp.net/external/HHP0sQ4_4g7p4mUUtD9WeGNj8aGeqr5ADCWRcc3CHec/https/i.imgur.com/ziDP0nS.png"
    },
    title: " \n ```diff \n - Le CEO : \n```",

    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});

};

module.exports.help = {
    name: 'embed'
};
