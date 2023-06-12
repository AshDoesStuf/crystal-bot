import { Command } from './Command.js'
import { Bot } from 'mineflayer'

export interface CrystalBot extends Bot {
    commands: Map<string, Command>
}