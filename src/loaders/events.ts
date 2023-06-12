// load all events from the events folder in the working directory
import type { CrystalBot } from '../types/CrystalBot.js'
import type { Event } from '../types/Event.js'
import type { BotEvents } from 'mineflayer'
import { readdir } from 'fs/promises'

export async function loadEvents(bot: CrystalBot) {
    const files = await readdir('./events')

    for (const file of files) {
        const EventClass = (await import(`../events/${file}`)).default
        const event: Event = new EventClass(bot)
        const eventName = event.name as keyof BotEvents

        if (event.once) bot.once(eventName, (...args: unknown[]) => event.execute(...args))
        else bot.on(eventName, (...args: unknown[]) => event.execute(...args))
    }
}
