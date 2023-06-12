import type { CrystalBot } from './CrystalBot.js'

export abstract class Command {
    bot: CrystalBot
    abstract name: string

    constructor(bot: CrystalBot) {
        this.bot = bot
    }

    abstract execute(args: string[]): Promise<void>
}
