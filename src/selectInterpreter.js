const vscode = require("vscode");

function selectInterpreter() {

    const options = {
        filters: { 'Jar files': ["jar"] },
        canSelectFiles: true,
        canSelectFolders: false,
        canSelectMany: false,
        title: "Select TPL Interpreter"
    };

    vscode.window.showOpenDialog(options)
        .then(fileUri => {
            if (fileUri && fileUri[0]) {
                const path = fileUri[0].fsPath;
                storeInterpreterPath(path);
                vscode.window.showInformationMessage("TPL Interpreter path set to " + path)
            }
        }).catch((error) => {
            vscode.window.showErrorMessage(error.message)
        });

}

exports.selectInterpreter = selectInterpreter;

async function storeInterpreterPath(path) {
    await vscode.workspace.getConfiguration().update('tpl.interpreterPath', path, vscode.ConfigurationTarget.Global);
}