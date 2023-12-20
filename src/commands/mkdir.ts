import { Command } from "commander";
import fs from "fs";

export const mkdirCommand = (program: Command): void => {
  program
    .command("mkdir <dir>")
    .description("Create a directory")
    .action((dir: string) => {
      try {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Directory "${dir}" created successfully!`);
      } catch (error) {
        console.error(`Error creating directory "${dir}": ${error}`);
      }
    });
};