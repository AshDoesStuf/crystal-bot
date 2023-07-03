import { Event } from '../types/Event.js'

const prefix = process.env.PREFIX as string

export default class ChatEvent extends Event {
    name = 'chat'
    once = false

    async execute(username: string, message: string) {
        if (username === this.bot.username || !message.startsWith(prefix)) return

        const args = message.slice(prefix.length).trim().split(/ +/)
        const commandName = args.shift()?.toLowerCase()

        if (!commandName) return

        const command = this.bot.cb.commands.get(commandName)

        if (!command) return

        try {
            if (!command.ownerOnly) await command.execute(username, args)
            else if (username === process.env.OWNER) await command.execute(username, args)
        } catch (error) {
            console.error(error)
            this.bot.chat('There was an error trying to execute that command!')
        }
    }
}
