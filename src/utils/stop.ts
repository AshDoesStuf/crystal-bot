import { CrystalBot } from '../types/CrystalBot.js'

// Stops everything the bot is currently doing
export function stop(bot: CrystalBot) {
    bot.clearControlStates()
    bot.stopDigging()
    bot.deactivateItem()
}