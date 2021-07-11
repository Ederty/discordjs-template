const Discord = require('discord.js');
const client = new Discord.Client({
    disableEveryone: true,
    ws: {
        intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES", "DIRECT_MESSAGES"]
    }
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', (member) => {
    let memberCount = client.guilds.cache.get('815573505663565824').members.cache.filter(member => !member.user.bot).size;
    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.user.tag}`)
    .setDescription(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
    .setImage(`https://media.giphy.com/media/TfY3cjjH0aYopkybqc/giphy.gif`)
    .setColor(`#18104a`)
    .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
    .setFooter(`Member Count: ${memberCount}`)

    let channel = member.guild.channels.cache.get('848135157935767552')
    channel.send(embed)
})

client.login('ODM4MzA1NDE1ODU0MTYxOTIx.YI5Kwg.P6tm_5-_3RTjVyyk4J0V3ddU0O4')