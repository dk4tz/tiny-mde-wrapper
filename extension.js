const vscode = require('vscode');

function activate(context) {
	const disposable = vscode.window.onDidChangeActiveTextEditor(
		async (editor) => {
			if (editor?.document.languageId === 'markdown') {
				await vscode.commands.executeCommand(
					'markdown-editor.openEditor'
				);
				setTimeout(async () => {
					await vscode.commands.executeCommand(
						'workbench.action.focusNextGroup'
					);
				}, 150);
			}
		}
	);
	context.subscriptions.push(disposable);
}

module.exports = { activate, deactivate: () => {} };
