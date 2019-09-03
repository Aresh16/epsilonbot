const search = require('yt-search');

exports.run = (client, message, args, ops) => {

    search(args.join(' '), function(err, res) {
        if (err) return message.channel.send('désolé, il y a eu une erreur');

        let videos = res.videos.slice(0, 15);

        let resp = '';
        for (var i in videos) {
            resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;

        }

            resp += `\n**Choisis un nombre entre \`1 et ${videos.length}**\``;

            message.channel.send(resp);
            const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

            const collector = message.channel.createMessageCollector(filter);

            collector.videos = videos;

            collector.once('collect', function(m) {
                
                let commandFile = require(`./joue.js`);
                commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);


            });
    });
}

module.exports.help = {
    name: 'cherche'
}