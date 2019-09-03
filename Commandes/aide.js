const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

module.exports.run = (client, message, args) => {
    

    
    message.delete()
    message.channel.send({
        embed: {

    color: 0xB31101,
    
    author: {
    
    name: client.user.username,
    
    icon_url: client.user.avatarURL
    
    },
    
    title: "Voici ce que tu peux faire avec Epsibot. Pour le moment !",
    
    
    description: '👇*Utilise le préfixe "epsi " avec un espace, puis marque la commande.*👇',
    
    fields: [

         {name: "roleaj [mention de la personne] [mention du rôle]",
                  value: "*Permet de t'ajouter un rôle*"},

    
         {name: "aide (en cours)",
                 value: "*Affiche les commandes, mais ça tu sais déjà le faire apparement !*"},

    
         {name: "ban [mention de la personne]",                     
                 value: "*Te permet de bannir quelqu'un du serveur*"}, 

         {name: "bienvenido",  
                value: "*¿ Hablas español ?*"},
                
        {name: "coucou",  
                value: "*epsibot te répond*"},

         {name: "dis [ta phrase]",          
                 value: "*Epsibot dit la phrase à ta place*"},

         {name: "rolesupp [mention de la personne] [mention du rôle]",          
                 value: "*Permet de t'enlever un rôle*"},

 
         {name: "event [titre de l'event]",              
                value: "*Pour créer une annonce d'évènements, réactions incluse*"}, 
             
         {name: "joue [url youtube]",              
                value: "*(Commande musique en construction)*"}, 
          

         {name: "kick [mention de la personne] (en cours)",       
                value: "*Permet de kick une personne du serveur*"},


        {name: "pf [pile/face]",
                        
                 value: "*joue à pile ou face*"}, 

         {name: "ping",       
                value: "*Donne le temps de réponse d'Epsibot*"},

         {name: "sondage [titre du sondage]",       
                value: "*Créer un sondage avec une réaction pour 'oui', et une réaction pour 'non'*"},


         {name: "stats (en cours)",         
                 value: "*Te permet de voir tes stats*"},

         {name: "stop",       
                value: "*(Commande musique en construction)*"},


         {name: "supp [nombre de messages de 1 à 100]",
                 value: "*Te permet d'effacer un nombre de messages définit*"},
                
         {name: "test",
                 value: "*Je te répond*"},
   


        
    
      
 
/*{name: " ",
                        
         value: " "}, 
 */         
      





    ],
    
    
    footer: {
    
    icon_url: client.user.avatarURL,
    
    text: "© Epsilon"
    
    }
    
    }
    
    });

};

module.exports.help = {
    name: 'aide'
};