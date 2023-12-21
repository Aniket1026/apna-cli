import { Command } from 'commander';
import { mkdirCommand } from './src/commands/mkdir.ts';
import { lsCommand } from './src/commands/ls.ts';
import { cdCommand } from './src/commands/cd.ts';

const program = new Command();
mkdirCommand(program);
lsCommand(program);
cdCommand(program);

program.parse();

if (!process.argv[2]) {
  program.outputHelp();
}
