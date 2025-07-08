# Contributing to Dot Ignorer

Thank you for considering contributing to Dot Ignorer! We welcome contributions that help improve the extension, especially adding new `.gitignore` templates.

> [!IMPORTANT]  
> We expect Contributors to be pro-active and reply to conversations in the PR thread. Failure do to so might result in PRs being closed.

## How to Contribute

### Reporting Issues

If you encounter a bug or have a suggestion for improvement, please check the [issues page](https://github.com/wazeerc/dot-ignorer/issues) to see if a similar issue already exists. If not, feel free to open a new issue.

### Adding New `.gitignore` Templates

We rely on the community to keep our template list comprehensive and up-to-date. If you want to add a new template:

1. **Find or Create the Template:** Obtain the `.gitignore` content for the technology you want to add. Good sources include official project documentation or the [GitHub gitignore repository](https://github.com/github/gitignore).
2. **Add the Template File:**
    * Create a new file in the `src/templates/` directory.
    * The filename should be descriptive and follow the pattern `<TechnologyName>.gitignore` (e.g., `MyFramework.gitignore`).
3. **Update the Options List:**
    * Open the `src/lib/options.ts` file.
    * Add the name of your template (without the `.gitignore` extension, e.g., `"MyFramework"`) to the exported array. Keep the list alphabetically sorted if possible.
4. **Test Your Changes:**
    * Build the extension locally (`pnpm run compile`).
    * Run the extension in a development host (`F5` in VS Code).
    * Use the `Dot Ignorer: Create git ignore` command and verify your new template appears in the list and generates the correct `.gitignore` file.
5. **Submit a Pull Request:**
    * Commit your changes.
    * Push your changes to your fork.
    * Open a pull request against the `main` branch of the [wazeerc/dot-ignorer](https://github.com/wazeerc/dot-ignorer) repository.
    * Clearly describe the template you added in the pull request description.

### Development Setup

1. **Prerequisites:**
    * [Node.js](https://nodejs.org/) (LTS version recommended)
    * [pnpm](https://pnpm.io/installation)
    * [Git](https://git-scm.com/)
    * [VS Code](https://code.visualstudio.com/)
2. **Fork & Clone:** Fork the repository and clone it locally.
3. **Install Dependencies:** Run `pnpm install` in the project root.
4. **Build:** Run `pnpm run compile`.
5. **Run in Development:** Open the project in VS Code and press `F5` to launch the Extension Development Host.

### Code Style

We use Biome for formatting and linting. Please run `pnpm run biome` before committing your changes to ensure they adhere to the project's style guidelines.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
