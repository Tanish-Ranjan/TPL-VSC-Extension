const vscode = require('vscode');
const { selectInterpreter } = require("./src/selectInterpreter")

let activeTPLTerminal = null;

function activate(context) {

	context.subscriptions.push(
		vscode.commands.registerCommand('tpl.runEditorContents', async (resource) => {

			let targetResource = resource;
			if (!targetResource && vscode.window.activeTextEditor) {
				targetResource = vscode.window.activeTextEditor.document.uri;
			}

			if (targetResource) {
				
				const scriptPath = targetResource.fsPath;
				const interpreterPath = vscode.workspace.getConfiguration().get('tpl.interpreterPath');

				if (!interpreterPath) {
					vscode.window.showErrorMessage("Please select the TPL interpreter path first!");
					return
				}

				const command = 'java -jar ' + interpreterPath + ' ' + scriptPath;
	
				if (activeTPLTerminal) {
	
					if (!activeTPLTerminal.exitStatus) {
	
						try {
							await activeTPLTerminal.show();
							activeTPLTerminal.sendText(command);
							return;
						} catch (e) {
							console.error("Error focusing or sending command to existing TPL terminal: " + e);
						}
	
					}
	
				}
	
				activeTPLTerminal = createAndShowTPLTerminal(command);

			}

		}),
		vscode.commands.registerCommand('tpl.debugEditorContents', async (resource) => {

			vscode.window.showWarningMessage("TPL Debugging will be added soon!");

		}),
		vscode.commands.registerCommand('tpl.selectInterpreter', () => {
			selectInterpreter();
		})
	);

}

function createAndShowTPLTerminal(command) {
	const terminal = vscode.window.createTerminal('The Professional\'s Language (TPL)');
	terminal.sendText(command);
	terminal.show();
	return terminal;
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
