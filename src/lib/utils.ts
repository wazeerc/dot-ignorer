export { createFile, doesFileExist, getWorkspaceFolder, loadContentFromTemplate };

import * as vscode from "vscode";
import messages from "./messages";

/**
 * Formats a message by replacing placeholders {0}, {1}, etc. with actual values
 * @param message The message with placeholders
 * @param args The values to replace placeholders with
 * @returns The formatted message
 */
function formatMessage(message: string, ...args: unknown[]): string {
	return message.replace(/{(\d+)}/g, (match: string, index: string) => {
		const argIndex = Number.parseInt(index, 10);
		return typeof args[argIndex] !== "undefined" ? String(args[argIndex]) : match;
	});
}

/**
 * Checks if a .gitignore file exists at the given path.
 * If it exists, prompts the user whether to overwrite it.
 * @param path The URI of the potential .gitignore file.
 * @returns True if the operation should proceed (file doesn't exist or user chose Overwrite), false otherwise.
 */
async function doesFileExist(path: vscode.Uri): Promise<boolean> {
	try {
		await vscode.workspace.fs.stat(path);
		const overwrite = await vscode.window.showWarningMessage(
			messages.gitignoreExistsInRoot,
			{ modal: true },
			messages.overwrite,
		);
		return overwrite === messages.overwrite;
	} catch (error) {
		if (error instanceof vscode.FileSystemError && error.code === "FileNotFound") {
			return true;
		}
		vscode.window.showErrorMessage(`${messages.errorCheckingFile}`);
		return false;
	}
}

/**
 * Creates a file at the specified path with the given content.
 * Shows an information message upon success and opens the created file.
 * @param path The URI where the file should be created.
 * @param option The name of the template used.
 * @param template The content to write to the file.
 */
async function createFile(path: vscode.Uri, option: string, template: string): Promise<void> {
	await vscode.workspace.fs.writeFile(path, Buffer.from(template, "utf8"));
	vscode.window.showInformationMessage(
		formatMessage(messages.gitignoreCreatedWithTemplate, option),
	);

	const document = await vscode.workspace.openTextDocument(path);
	await vscode.window.showTextDocument(document);
}

/**
 * Gets the first workspace folder URI. Shows an error message if no folder is open.
 * @returns The URI of the first workspace folder, or undefined if none exists.
 */
function getWorkspaceFolder(): vscode.Uri | undefined {
	const workspaceFolders = vscode.workspace.workspaceFolders;
	if (!workspaceFolders || workspaceFolders.length === 0) {
		vscode.window.showErrorMessage(messages.noWorkspaceFolderOpen);
		return undefined;
	}
	return workspaceFolders[0].uri;
}

/**
 * Loads the content of a template file based on the selected option.
 * @param option The name of the template (e.g., "Node").
 * @param extensionUri The URI of the extension's root directory.
 * @returns The content of the template file as a string, or undefined if an error occurs.
 */
async function loadContentFromTemplate(
	option: string,
	extensionUri: vscode.Uri,
): Promise<string | undefined> {
	const templateFileName = `${option}.gitignore`;
	const templatePath = vscode.Uri.joinPath(extensionUri, "src", "templates", templateFileName);

	try {
		const fileContent = await vscode.workspace.fs.readFile(templatePath);
		return Buffer.from(fileContent).toString("utf8");
	} catch {
		vscode.window.showErrorMessage(
			`${formatMessage(messages.errorLoadingTemplate, templateFileName)}`,
		);
		return undefined;
	}
}
