import { Command } from '../types/Command.js'
import { stop } from '../utils/stop.js'

// Doesnt actually stop the bot and just stops everything the bot is currently doing

export default class Stop extends Command {
    name = 'stop'
    aliases = ['reset']
    ownerOnly = true

    async execute() {
        stop(this.bot)
        this.bot.chat('State has been reset.')
    }
}
