const { RichEmbed } = require('discord.js')
const joker = require('give-me-a-joke')

module.exports = {
    name: 'joke',
    category: 'fun',
    usage: "[mention | id | username]",

    run: async (client, message) => {
        joker.getRandomCNJoke (function(joke) {
            const embed = new RichEmbed()
                .setTitle('Epic Joke')
                .setDescription(joke)

            message.channel.send(embed)
        });
    }
}