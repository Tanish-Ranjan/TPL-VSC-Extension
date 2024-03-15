const vscode = require('vscode');
const { selectInterpreter } = require("./src/selectInterpreter")

let activeTPLTerminal = null;

function activate(context) {

	const runButton = async () => {
		const interpreterPath = vscode.workspace.getConfiguration().get('tpl.interpreterPath');
		if (!interpreterPath) {
			vscode.window.showErrorMessage("Please select the TPL interpreter path first!");
			return
		}

		const activeTextEditor = vscode.window.activeTextEditor;
		if (!activeTextEditor) {
			return;
		}

		const scriptPath = activeTextEditor.document.uri.fsPath;
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

	};

	let selectInterpreterCmd = () => {
		selectInterpreter();
	};

	context.subscriptions.push(vscode.commands.registerCommand('workbench.action.debug.run', runButton));
	context.subscriptions.push(vscode.commands.registerCommand('tpl.selectInterpreter', selectInterpreterCmd));
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
