const Discord = require('discord.js');
const client = new Discord.Client();



module.exports.run = (client, message, args) => {
  if (message.content == CLEAR_MESSAGES) {

    // Check the following permissions before deleting messages:
    //    1. Check if the user has enough permissions
    //    2. Check if I have the permission to execute the command

    if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
      message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
      console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
      return;
    } else if (!message.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
      message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
      console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
      return;
    }

    // Only delete messages if the channel type is TextChannel
    // DO NOT delete messages in DM Channel or Group DM Channel
    if (message.channel.type == 'pinned')
    return
    if (message.channel.type == 'text') {
      message.channel.fetchMessages()
        .then(messages => {
          message.channel.bulkDelete(messages);
          messagesDeleted = messages.array().length; // number of messages deleted

          // Logging the number of messages deleted on both the channel and console.
          message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
          console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted);
          message.channel.bulkDelete(1)
        })
        .catch(err => {
          console.log('Error while doing Bulk Delete');
          console.log(err);
        });
    }
  }
};

module.exports.help = {
    name: 'supptt'
};
