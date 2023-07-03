import { Event } from '../types/Event.js'
import { Movements } from 'mineflayer-pathfinder'

export default class SpawnEvent extends Event {
    name = 'spawn'
    once = true

    async execute() {
        const defaultMovements = new Movements(this.bot)

        defaultMovements.allowFreeMotion = true

        this.bot.pathfinder.setMovements(defaultMovements)
    }
}
