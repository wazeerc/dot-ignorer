# Dot Ignorer

![Marketplace](https://vsmarketplacebadges.dev/version-short/wazeerc.dot-ignorer.svg)
![Ratings](https://vsmarketplacebadges.dev/rating-star/wazeerc.dot-ignorer.svg)

**Dot Ignorer** is here to help you manage `.gitignore` files directly within Visual Studio Code.

Generate `.gitignore` files effortlessly using a wide range of curated templates and customize them as needed.

## Features

- **Generate `.gitignore`:** Quickly create `.gitignore` files using a comprehensive list of templates for various languages, frameworks, and environments (e.g., Node, Python, React, Vite, Java, Ruby, Go, and many more).
- **Curated Templates:** Access templates sourced from the official GitHub gitignore repository and other project-specific sources.
- **Simple & Fast:** Lightweight extension with zero configuration required.

## Getting Started

1. Install the "Dot Ignorer" extension from the VS Code Marketplace [here](https://marketplace.visualstudio.com/items/?itemName=wazeerc.dot-ignorer).
2. Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
3. Run the command: `Dot Ignorer: Create git ignore`.

## Usage

1. Open your project workspace in VS Code.
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
3. Type `Create git ignore` and select the `Dot Ignorer: Create git ignore` command.
4. Choose the desired template from the quick pick list that appears.
5. If a `.gitignore` file already exists in your workspace root, you'll be asked to confirm if you want to overwrite it.
6. The selected template content will be added to the `.gitignore` file in your workspace root.

<img src="https://github.com/user-attachments/assets/50f55599-3113-408b-afaa-6e1c9aa6141c" alt="dot-ignore-demo" width="800">

## Available Templates

💡 The extension includes templates for many popular technologies, including:

- Node.js
- Python
- React
- Vite
- Java
- Ruby
- Go
- C++ / C
- Rust
- VisualStudio
- Unity
- UnrealEngine
- ...and many more!

(See the full list within the extension's quick pick menu)

## Requirements

⚡ Visual Studio Code version 1.99.0 or higher.
⚡ [Node.js](https://nodejs.org/) (LTS version recommended)
⚡ [pnpm](https://pnpm.io/installation)

## Extension Settings

🔌 This extension does not contribute any settings at this time.

## Contributing

Contributions are welcome! If you'd like to add a new `.gitignore` template or improve the extension, please see the [Contributing Guidelines](./CONTRIBUTING.md).

Adding a template is easy:

1. Add your `<YourTemplateName>.gitignore` file to the `src/templates/` directory.
2. Add the template name (`"YourTemplateName"`) to the list in `src/lib/options.ts`.
3. Submit a Pull Request!

## Known Issues

🐞 Please report any issues or suggestions on the [issues page](https://github.com/wazeerc/dot-ignorer/issues).

## Release Notes

### 0.0.1

- Initial version of Dot Ignorer.
- Feature: Generate `.gitignore` files from a list of templates.
- Command: `dot-ignorer.createGitignore`.

### 0.0.2

- Rename project to dot-ignorer

### 0.0.3

- Fixed a bug where template files weren't being found when the extension was installed from the marketplace.

---

🙌 **Enjoy and keep your API keys safe!**
