import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import { indexFile } from "./text/index";
import { componentFile } from "./text/component";
import { styledFile } from "./text/styled";
import { testFile } from "./text/test";
import { storiesFile } from "./text/stories";

export const findDir = (filePath: string) => {
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

export const makeFileSync = (filename: string, content: any) => {
  if (!fs.existsSync(filename)) {
    makeDirSync(path.dirname(filename));

    fs.createWriteStream(filename).write(content);
  }
};

export const generateComponent = (file: vscode.Uri) => {
  vscode.window
    .showInputBox({
      value: "",
      prompt: "Component name",
      ignoreFocusOut: true,
      valueSelection: [-1, -1],
    })
    .then((name) => {
      if (!name) {
        return;
      }

      const componentName = name.charAt(0).toUpperCase() + name.slice(1);

      const dir = findDir(file.fsPath);

      const targetPath = path.join(dir, componentName);

      makeFileSync(
        `${targetPath}/index.ts`,
        indexFile.replace(/{component}/g, componentName).trim(),
      );

      makeFileSync(
        `${targetPath}/${componentName}.tsx`,
        componentFile.replace(/{component}/g, componentName).trim(),
      );

      makeFileSync(
        `${targetPath}/styled.ts`,
        styledFile.replace(/{component}/g, componentName).trim(),
      );

      makeFileSync(
        `${targetPath}/stories/${componentName}.stories.tsx`,
        storiesFile.replace(/{component}/g, componentName).trim(),
      );

      makeFileSync(
        `${targetPath}/tests/${componentName}.test.tsx`,
        testFile.replace(/{component}/g, componentName).trim(),
      );
    });
};
