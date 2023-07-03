import { Command } from '../types/Command.js'

export default class Ping extends Command {
    name = 'ping'
    aliases = ['latency']

    async execute(username: string, args: string[]) {
        const name = args[0] ?? username
        const player = this.bot.players[name]

        if (!player) return this.bot.chat(`Player with username ${name} not found.`)

        if (player.username === name) this.bot.chat(`Your ping is: ${player.ping}ms`)
        else this.bot.chat(`Ping of ${name}: ${player.ping}ms`)
    }
}
