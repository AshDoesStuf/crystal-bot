import { Command } from '../types/Command.js'

export default class Follow extends Command {
    name = 'follow'

    async execute(username: string, args: string[]) {
        // I hate CommonJS
        // Why is it so common *badum tss*
        const { GoalFollow } = (await import('mineflayer-pathfinder')).goals

        const name = args[0] ?? username
        const player = this.bot.players[name]
        const target = this.bot.players[name]?.entity

        if (!player) return this.bot.chat(`Player with username ${name} not found.`)
        else if (!target) return this.bot.chat(`Player with username ${name} is not in range.`)

        this.bot.pathfinder.setGoal(new GoalFollow(target, 3), true)
    }
}
