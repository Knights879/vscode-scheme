import * as vscode from "vscode";

export const configuration: vscode.LanguageConfiguration = {
   wordPattern: /[^\s()\[\]{}"';]+/,
   indentationRules: {
      decreaseIndentPattern: /^\s*\)/,
      increaseIndentPattern: /^\s*\(.*[^)]\s*$/
   },
};
