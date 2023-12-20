import { Command } from 'commander';
import { mkdirCommand } from './src/commands/mkdir.ts';
import { lsCommand } from './src/commands/ls.ts';

const program = new Command();
mkdirCommand(program);
lsCommand(program);

program.parse();

if (!process.argv[2]) {
  program.outputHelp();
}
