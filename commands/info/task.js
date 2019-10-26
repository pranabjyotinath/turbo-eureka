const {RichEmbed} = require('discord.js')

module.exports = {
    name: "tasks",
    category: "info",
    description: "Just a development Command",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
            .setTitle('Next Commands to Be made')
            .addField('1. Music Command', false)
            .addField('2. Clear Command', false)
            .addField('3. Joke Command', false)
            .addField('4. Prefix Command', false)
            
        message.channel.send(embed);
    }
    
}