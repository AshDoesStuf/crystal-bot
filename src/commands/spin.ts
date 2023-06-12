import { Command } from '../types/Command.js'

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

let toggle = false
export default class Spin extends Command {
    name = 'spin'

    async execute() {
        toggle = !toggle
        const rotateAmount = 0.1 // adjust this to change the speed of rotation

        while (toggle) {
            const yaw = (this.bot.entity.yaw += rotateAmount)
            this.bot.look(yaw, 0) // set the bot's yaw angle
            await sleep(50) // wait for a short amount of time before updating the angle
        }
    }
}
