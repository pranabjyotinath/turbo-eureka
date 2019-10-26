const { getMember } = require("../../function.js");

module.exports = {
    name: "kill",
    category: "fun",
    usage: "[mention | id | username]",

run: async (client, message, args) => {
    // Get a member from mention, id, or username
    let person = getMember(message, args[0]);
    console.log(person + message)
}
}