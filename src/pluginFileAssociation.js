const vscode = require('vscode');

async function addFileAssociation() {
    const config = vscode.workspace.getConfiguration();
    const associations = config.get('files.associations') || {};
    if (!associations['tpl.plugins']) {
        associations['tpl.plugins'] = 'json';
        await config.update('files.associations', associations, vscode.ConfigurationTarget.Global);
    }
}

async function removeFileAssociation() {
    const config = vscode.workspace.getConfiguration();
    const associations = config.get('files.associations') || {};
    if (associations['tpl.plugins']) {
        delete associations['tpl.plugins'];
        await config.update('files.associations', associations, vscode.ConfigurationTarget.Global);
    }
}

exports.addFileAssociation = addFileAssociation;
exports.removeFileAssociation = removeFileAssociation;