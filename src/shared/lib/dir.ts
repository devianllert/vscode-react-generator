import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export const findDirectory = (filePath: string) => {
  if (fs.statSync(filePath).isFile()) {
    return path.dirname(filePath);
  }

  return filePath;
};

export const makeDirSync = (dir: string) => {
  if (fs.existsSync(dir)) {
    return;
  }

  if (!fs.existsSync(path.dirname(dir))) {
    makeDirSync(path.dirname(dir));
  }

  fs.mkdirSync(dir);
};

export const createFile = async (filename: string, content: any) => {
  if (!fs.existsSync(filename)) {
    makeDirSync(path.dirname(filename));

    await fs.promises.writeFile(filename, content);
  }
};

export const copyFile = async (from: string, to: string) => {
  if (!fs.existsSync(to)) {
    makeDirSync(path.dirname(to));

    await fs.promises.copyFile(from, to);
  }
}; 