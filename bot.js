const format = lazy(`**Roles for ${'user'}:** _${'roles'}_`)


module.exports = function bot(config) {
  bot.on('message', message => {
    if (!message.content.startsWith(trigger)) return

    const parse = minimist(message.content.slice(trigger))
    const args = parse._

    if (!args.length) {
      const user = message.author.username
      const roles = message.member.roles.map(role => role.name).join(', ')

      return message.channel.sendMessage(format(user, roles))
    }

    const messageReply = args.reduce(user => {
      console.log(user)
    }, [])
  })

  bot.login(config.token)
}
