import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // Register the command that opens a new terminal
  let disposable = vscode.commands.registerCommand('extension.openTerminal', () => {
    vscode.commands.executeCommand('workbench.action.terminal.new');
  });

  // Add status bar item
  let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = 'extension.openTerminal';
  statusBarItem.text = `$(terminal)`;
  statusBarItem.tooltip = 'Open Terminal';
  statusBarItem.show();

  context.subscriptions.push(disposable, statusBarItem);
}

export function deactivate() {}
