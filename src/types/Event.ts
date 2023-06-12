import type { CrystalBot } from './CrystalBot.js'
import type { BotEvents } from 'mineflayer'

export abstract class Event {
    bot: CrystalBot
    abstract name: keyof BotEvents | string
    abstract once: boolean

    constructor(bot: CrystalBot) {
        this.bot = bot
    }

    abstract execute(...args: unknown[]): Promise<void>
}
