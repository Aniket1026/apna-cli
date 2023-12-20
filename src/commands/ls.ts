import { Command } from "commander";
import fs from "fs";
import path from "path";

export const lsCommand = (program: Command): void => {
  program
    .command("ls")
    .description("List files and directories in the current directory")
    .action(() => {
      try {
          const currentDir = process.cwd();
          const files = fs.readdirSync(currentDir);
          console.log(`Contents of ${currentDir}:`);
          files.forEach((file) => {
            const fullPath = path.join(currentDir, file);
            const type = fs.statSync(fullPath).isDirectory()
              ? "directory"
              : "file";
            console.log(`${file} (${type})`);
          });
      } catch (error) {
        console.log(`Error listing contents of directory: ${(error as Error).message}`);
        
      }
    });
};