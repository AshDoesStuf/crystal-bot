import type { CrystalBot } from './CrystalBot.js'

export abstract class Command {
    abstract name: string
    bot: CrystalBot
    aliases?: string[]
    ownerOnly = false

    constructor(bot: CrystalBot) {
        this.bot = bot
    }

    abstract execute(username: string, args: string[]): Promise<void>
}
