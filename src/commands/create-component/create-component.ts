import * as path from 'path';
import * as fs from 'fs';
import * as vscode from "vscode";

import { toKebab, toPascal } from "../../shared/lib/convert-case/convert-case";
import { createFile, findDirectory } from "../../shared/lib/dir";

import { componentTemplate } from './templates/component';
import { indexTemplate } from './templates/index';
import { styledTemplate } from './templates/styled';
import { storiesTemplate } from './templates/stories';
import { testTemplate } from './templates/test';

export const createComponent = async (file: vscode.Uri) => {
  const inputName = await vscode.window.showInputBox({
    value: "",
    prompt: "Enter component name",
    ignoreFocusOut: true,
    valueSelection: [-1, -1],
  });

  console.log(inputName);

  if (!inputName?.trim()) {return;}

  const fileName = toKebab(inputName);
  const componentName = toPascal(inputName);

  const dir = findDirectory(file.fsPath);

  const targetPath = path.join(dir, fileName);

  const component = createFile(
    `${targetPath}/${fileName}.tsx`,
    componentTemplate
      .replace(/{component}/g, componentName)
      .replace(/{fileComponent}/g, fileName)
  );

  const index = createFile(
    `${targetPath}/index.ts`,
    indexTemplate.replace(/{fileComponent}/g, fileName),
  );

  const styled = createFile(
    `${targetPath}/${fileName}.styled.ts`,
    styledTemplate
      .replace(/{component}/g, componentName)
      .replace(/{fileComponent}/g, fileName),
    );

  const stories = createFile(
    `${targetPath}/stories/${fileName}.stories.tsx`,
    storiesTemplate
      .replace(/{component}/g, componentName)
      .replace(/{fileComponent}/g, fileName),
    );

  const test = createFile(
    `${targetPath}/tests/${fileName}.test.tsx`,
    testTemplate
      .replace(/{component}/g, componentName)
      .replace(/{fileComponent}/g, fileName),
    );

    try {
      await Promise.all([index, component, styled, stories, test]);
      
      vscode.window.showInformationMessage("Files created successfully");
    } catch (error) {
      vscode.window.showErrorMessage("Error creating a file");
    }
};