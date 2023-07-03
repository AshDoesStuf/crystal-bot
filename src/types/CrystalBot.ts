import { Command } from './Command.js'
import { Bot } from 'mineflayer'

interface CrystalBotConfig {
    commands: Map<string, Command>
}

export interface CrystalBot extends Bot {
    // CB stands for CrystalBot
    cb: CrystalBotConfig
}