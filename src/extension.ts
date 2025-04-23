import * as vscode from "vscode";

import messages from "./lib/messages";
import options from "./lib/options";
import * as utils from "./lib/utils";

export function activate(context: vscode.ExtensionContext): void {
	const createGitignoreDisposable = vscode.commands.registerCommand(
		"dot-ignore.createGitignore",
		async () => {
			const option = await vscode.window.showQuickPick(options, {
				placeHolder: messages.selectTemplate,
			});

			if (!option) {
				vscode.window.showInformationMessage(messages.noTemplateSelected);
				return;
			}

			const templateContent = await utils.loadContentFromTemplate(option, context.extensionUri);

			if (templateContent === undefined) {
				return;
			}

			const workspaceRoot = utils.getWorkspaceFolder();
			if (!workspaceRoot) {
				return;
			}

			const gitignorePath = vscode.Uri.joinPath(workspaceRoot, ".gitignore");

			try {
				const doesFileExist = await utils.doesFileExist(gitignorePath);
				if (doesFileExist) {
					await utils.createFile(gitignorePath, option, templateContent);
				} else {
					vscode.window.showInformationMessage(messages.cancel);
				}
			} catch {
				vscode.window.showErrorMessage(messages.errorCreatingFile);
			}
		},
	);

	context.subscriptions.push(createGitignoreDisposable);
}

export function deactivate(): void {}
