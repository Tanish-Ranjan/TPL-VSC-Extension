const vscode = require('vscode');
const { selectInterpreter } = require("./src/selectInterpreter")

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

		const terminal = vscode.window.createTerminal('The Professional\'s Language (TPL)');
		terminal.sendText(command);
		terminal.show();
	};

	let selectInterpreterCmd = () => {
		selectInterpreter();
	};

	context.subscriptions.push(vscode.commands.registerCommand('workbench.action.debug.run', runButton));
	context.subscriptions.push(vscode.commands.registerCommand('tpl.selectInterpreter', selectInterpreterCmd));
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
