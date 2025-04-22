/**
 * @file A set of messages used throughout the application.
 * These messages are used for user feedback, error reporting, and confirmations.
 */
export default {
  selectTemplate: 'Select a .gitignore template',
  gitignoreCreated: '.gitignore file created successfully.',
  gitignoreExists: '.gitignore already exists. Overwrite?',
  overwrite: 'Overwrite',
  cancel: 'Cancel',
  errorCreatingFile: 'Error creating .gitignore file.',
  noWorkspace: 'Please open a workspace folder to create a .gitignore file.',
  templateNotFound: 'Selected template not found.',
  gitignoreExistsInRoot: '.gitignore already exists in the workspace root. Overwrite?',
  errorCheckingFile: 'Error checking if .gitignore exists:',
  gitignoreCreatedWithTemplate: '.gitignore file created successfully using the {0} template.',
  noWorkspaceFolderOpen: 'No workspace folder open. Cannot perform operation.',
  errorLoadingTemplate: 'Error loading template file {0}:',
  noTemplateSelected: 'No template selected. Operation cancelled.'
} as const satisfies Record<string, string>;