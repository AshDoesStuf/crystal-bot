import type { CrystalBot } from './types/CrystalBot.js'
import { loadCommands } from './loaders/commands.js'
import { loadEvents } from './loaders/events.js'
import { createBot } from 'mineflayer'
import { config } from 'dotenv'

config({ path: '../.env' })

type AuthMethods = 'microsoft' | 'mojang' | 'offline'

const bot = createBot({
    username: process.env.USERNAME as string,
    host: process.env.HOST as string,
    port: process.env.PORT ? parseInt(process.env.PORT) : undefined,
    version: process.env.VERSION,
    auth: process.env.AUTH as AuthMethods | undefined,
    profilesFolder: '../profiles',
}) as CrystalBot

bot.commands = new Map()

async function load() {
    await loadEvents(bot)
    await loadCommands(bot)
}

void load()
