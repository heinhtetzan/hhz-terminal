import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // Command to open terminal
  let openTerminalCommand = vscode.commands.registerCommand(
    "extension.openTerminal",
    () => {
      vscode.commands.executeCommand("workbench.action.terminal.new");
    }
  );

  // Create a status bar item
  let terminalStatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  terminalStatusBarItem.command = "extension.openTerminal"; // Attach command to the status bar item
  terminalStatusBarItem.text = `$(terminal)`; // Set the icon
  terminalStatusBarItem.tooltip = "Open New Terminal";
  terminalStatusBarItem.show(); // Ensure it's visible

  // Add the command and status bar item to subscriptions
  context.subscriptions.push(openTerminalCommand, terminalStatusBarItem);
}

export function deactivate() {}
