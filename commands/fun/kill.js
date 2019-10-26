const { getMember } = require("../../function.js");
const { RichEmbed } = require("discord.js");

module.exports = {
    name: "kill",
    category: "fun",
    usage: "[mention | id | username]",

run: async (client, message, args) => {
    // Get a member from mention, id, or username
    let dead = getMember(message, args[0]);

    const dialog = Array(
        // `**${message.member.displayName}** killed **${dead.displayName}** by singing a song`,
        // `**${dead.displayName}** died due to Diarrhea because of **${message.member.displayName}**`,
        // `**${dead.displayName}** died due to **${message.member.displayName}**'s Kung Fu Moves`,
        // `**${dead.displayName}** was killed by **${message.member.displayName}** the zombie`,
        // `**${dead.displayName}** died by hearing **${message.member.displayName}**'s Joke`,
        // `**${dead.displayName}** was killed by **${message.member.displayName}** for no reason`,
        // `**${dead.displayName}** died of a bomb placed by **${message.member.displayName}**`,
        // `**${dead.displayName}** died because of **${message.member.displayName}**'s food`,
        // `**${dead.displayName}** died by dabbing hard`,
        `**${dead.displayName}** spammed L too much that he got burnt`
    )

    const randomElement = dialog[Math.floor(Math.random()*dialog.length)]

    const embed = new RichEmbed()
            .setColor('RANDOM')
            .setDescription(`${randomElement}`)
            .setTitle(`Breaking News`)
   
    message.channel.send(embed);
}
}