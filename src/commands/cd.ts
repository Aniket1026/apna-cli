import { Command } from "commander";
import path from "path";

export const cdCommand = (program: Command): void => {
  program
    .command("cd <path>")
    .description("Change current directory")
    .action((paths: string) => {
      try {
        const resolvedPath = paths.startsWith("/")
          ? paths
          : path.resolve(process.cwd(), paths);
        process.chdir(resolvedPath);
        console.log(`Current directory changed to: ${process.cwd()}`);
      } catch (error) {
        console.error(`Error changing directory: ${(error as Error).message}`);
      }
    });
};