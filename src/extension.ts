import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // Command to open terminal
  let openTerminalCommand = vscode.commands.registerCommand('extension.openTerminal', () => {
    vscode.commands.executeCommand('workbench.action.terminal.new');
  });

  // Add an icon to the status bar
  let terminalStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  terminalStatusBarItem.command = 'extension.openTerminal';  // Bind command to icon
  terminalStatusBarItem.text = `$(terminal)`; // VS Code icon for terminal
  terminalStatusBarItem.tooltip = "Open New Terminal";
  terminalStatusBarItem.show();

  // Add both command and status bar item to subscriptions
  context.subscriptions.push(openTerminalCommand, terminalStatusBarItem);
}

export function deactivate() {}
