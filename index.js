#!/usr/bin/env node
const { Client } = require('discord.js')
const hardOpts = require('rc')('rolebot', {
  token: '',
  prefix: '!'
})
const softOpts = require('minimist')(process.argv.slice(2))
const config = Object.assign(hardOpts, softOpts)
const zt = require('zt')
const lazy = require('lazy-template')
const minimist = require('minimist')

const bot = new Client()
const trigger = `${config.prefix}role`

const format = lazy`**Roles for ${'user'}:** _${'roles'}_`

bot.on('message', message => {
  if (!message.content.startsWith(trigger)) return

  const args = message.content.split(' ').slice(1)

  if (!args.length) {
    const user = message.author.username
    const roles = message.member.roles
    .map(role => role.name === '@everyone' ? null : role.name)
    .filter(role => role).join(', ')

    return message.channel.sendMessage(format({ user, roles }))
  }

  const messageReply = message.mentions.users.map((u) => {
    const user = u.username
    const roles = message.guild.member(u).roles
    .map(role => role.name === '@everyone' ? null : role.name)
    .filter(role => role).join(', ')

    return format({ user, roles })
  })

  message.channel.sendMessage(messageReply.join('\n'))
})

bot.login(config.token)
bot.on('ready', () => zt.log('role bot online'))
