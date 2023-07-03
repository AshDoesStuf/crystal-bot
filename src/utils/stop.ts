import { CrystalBot } from '../types/CrystalBot.js'

// Stops everything the bot is currently doing
export function stop(bot: CrystalBot) {
    bot.pathfinder.stop()
    bot.clearControlStates()
    bot.stopDigging()
    bot.deactivateItem()
}