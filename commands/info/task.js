const {RichEmbed} = require('discord.js')

module.exports = {
    name: "tasks",
    description: "Just a development Command",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
            .setTitle('Next Commands to Be made')
            .addField('1. Music Command')
            .addField('2. Clear Command')
            .addField('3. Joke Command')
            .addField('4. Prefix Command')
            
        message.channel.send(embed);
    }
    
}