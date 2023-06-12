import { Command } from '../types/Command.js'

export default class Ping extends Command {
    name = 'ping'

    async execute() {
        this.bot.chat(`My ping is ${this.bot.player.ping}ms`)
    }
}