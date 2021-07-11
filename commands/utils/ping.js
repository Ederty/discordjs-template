module.exports = {
    name: 'ping',
    aliases: ['peng', 'pong'],
    async execute (message) {
    message.channel.send('teka lang bobo').then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        m.edit(`ang ping mo ay **${ping}ms**`)
        })
    }
}