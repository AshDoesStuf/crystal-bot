import type { CrystalBot } from './CrystalBot.js'

export abstract class Command {
    bot: CrystalBot
    abstract name: string
    ownerOnly = false

    constructor(bot: CrystalBot) {
        this.bot = bot
    }

    abstract execute(username: string, args: string[]): Promise<void>
}
