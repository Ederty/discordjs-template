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

client.login('token')