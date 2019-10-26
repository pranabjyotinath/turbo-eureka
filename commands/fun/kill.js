const { getMember } = require("../../function.js");
const { RichEmbed } = require("discord.js");

module.exports = {
    name: "kill",
    category: "fun",
    usage: "[mention | id | username]",

run: async (client, message, args) => {
    // Get a member from mention, id, or username
    let person = getMember(message, args[0]);

    const dialog = Array(`**${person.displayName}** died due to diarhea because of **${message.member.displayName}**`)

    const randomElement = dialog[Math.floor(Math.random()*dialog.length)]

    const embed = new RichEmbed()
            .setColor('#005500')
            .setDescription(`${randomElement}`)
            .setTitle(`Breaking News`)
   
    message.channel.send(embed);
}
}