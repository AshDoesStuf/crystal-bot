// load all commands from the commands folder in the working directory
import type { CrystalBot } from '../types/CrystalBot.js'
import type { Command } from '../types/Command.js'
import { readdir } from 'fs/promises'

export async function loadCommands(bot: CrystalBot) {
    const files = await readdir('./commands')

    for (const file of files) {
        const CommandClass = (await import(`../commands/${file}`)).default
        const command: Command = new CommandClass(bot)

        bot.commands.set(command.name, command)
    }
}