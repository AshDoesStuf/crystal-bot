import { Command } from '../types/Command.js'
import { stop } from '../utils/stop.js'

export default class Ping extends Command {
    name = 'stop'
    ownerOnly = true

    async execute(username: string, args: string[]) {
        stop(this.bot)
        this.bot.chat('Stopping...')
    }
}
