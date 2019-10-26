// module.exports = {
//     name: 'play',
//     category: 'fun',
//     run: async (client, message, args) => {
//         let song = args[0]

//         if (message.member.voiceChannel) {            
//             message.member.voiceChannel.join()
//             .then(connection => console.log('Connected!'))
//             .catch(console.error);
//         } else {
//             message.channel.send('Join a voice channel first')
//         }
//     }
// }