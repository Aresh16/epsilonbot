const pf = ["pile", "face"];

module.exports.run = (client, message, args) => {

    if(!pf.includes(args[0].toLowerCase())) { return message.channel.send("**Merci d'indiquer pile ou face !**"); };

    if(pf[Math.floor(Math.random() * pf.length)] === args[0]) { 
        return message.channel.send("Tu as gagné ! 💰 ")
    } else {
        return message.channel.send("Tu as perdu ! 💸 ")
    }
}

module.exports.help = {
    name: "pf"
}
