import { Command } from 'commander';
import { mkdirCommand } from './src/commands/mkdir.ts';

const program = new Command();
mkdirCommand(program);

program.parse();

if (!process.argv[2]) {
  program.outputHelp();
}
