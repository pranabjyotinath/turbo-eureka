const {RichEmbed} = require("discord.js")
const randomPuppy = require("random-puppy")

module.exports = {
    name: "meme",
    category: "fun",
    description: "Sends an epic meme!",
    run: async (client, message, args) => {
        const subReddits = ["dankmeme", "meme"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)
        const embed = new RichEmbed()
            .setColor('RANDOM')
            .setImage(img)
            .setTitle("Epic Meme")
            .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
    }
}