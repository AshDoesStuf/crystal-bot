import type { CrystalBot } from './types/CrystalBot.js'
import { loadCommands } from './loaders/commands.js'
import { loadEvents } from './loaders/events.js'
import { createBot } from 'mineflayer'
import { config } from 'dotenv'

// Mineflayer plugins
import { plugin as autoeat } from 'mineflayer-auto-eat'


// Just there incase you run this without docker
// Docker will set the env variables
config({ path: '../.env' })

type AuthMethods = 'microsoft' | 'mojang' | 'offline'

const bot = createBot({
    username: process.env.USERNAME as string,
    host: process.env.HOST as string,
    port: process.env.PORT ? parseInt(process.env.PORT) : undefined,
    version: process.env.VERSION,
    auth: process.env.AUTH as AuthMethods | undefined,
    profilesFolder: '../profiles'
}) as CrystalBot

bot.cb.commands = new Map()
bot.loadPlugin(autoeat)

async function load() {
    await loadEvents(bot)
    await loadCommands(bot)
}

void load()
