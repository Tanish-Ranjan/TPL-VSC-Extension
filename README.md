# TPL Extension
The TPL extension is a powerful tool for developers who work with [TPL](https://github.com/Tanish-Ranjan/TPL) scripting. It provides a comprehensive set of features to streamline your TPL development workflow within Visual Studio Code.

> [!NOTE]
> TPL allows kotlin code injection, to enable syntax highlighting for it make sure to have an extension installed which contains syntax highlighting for kotlin. We recommend using [Kotlin Language](https://marketplace.visualstudio.com/items?itemName=mathiasfrohlich.Kotlin) extension by mathiasfrohlich.

## Features

### 1. Syntax Highlighting
Enjoy syntax highlighting and code completion for `.tpl` files. The extension defines a language configuration specifically for TPL, providing a more intuitive editing experience.

### 2. Code Snippets
Boost your TPL development speed with pre-written code snippets. The extension offers a collection of commonly used TPL constructs to help you write code faster and more efficiently.

### 3. Integrated Debugger
Run/Debug your TPL scripts with ease. Set breakpoints, step through your code line-by-line, and inspect variables to identify and resolve issues efficiently.

## Installation
There are two ways to install the TPL extension:

### 1. VS Code Marketplace:

* Open the Extensions view in VS Code (Ctrl+Shift+X or Cmd+Shift+X).
* Search for "TPL Extension".
* Click on the extension by "Tanish Ranjan" and select "Install".

### 2. VSIX Package (Optional):

* Download the latest VSIX package from [Releases Section](https://github.com/Tanish-Ranjan/TPL-VSC-Extension/releases).
* Open the Extensions view in VS Code.
* Click the three dots (...) in the top right corner and select "Install from VSIX...".
* Navigate to the downloaded VSIX file and select it.
* Click "Install" to proceed.

## Usage

### Running TPL Scripts:

1. Open a `.tpl` file in VS Code.
2. Configure the TPL interpreter path in your VS Code settings (search for "tpl.interpreterPath"). You can also use the "Select TPL Interpreter" command (Ctrl+Shift+P and type "tpl.selectInterpreter") from the command palette.
3. Click "Run TPL File" from title menu in the top right side of VS Code. The extension will execute the script using the configured interpreter.

### Using Code Snippets

1. Open a `.tpl` file in VS Code.
2. Start typing a common TPL construct (e.g., "var", "fun").
3. As you type, VS Code will suggest relevant code snippets from the TPL extension.
4. Select the appropriate snippet to insert it into your code.

### Customization
You can customize some aspects of the TPL extension through your VS Code settings:

* `tpl.interpreterPath`: Set the path to your TPL interpreter JAR file.
* You can also configure keyboard shortcuts for running and debugging TPL scripts (refer to VS Code documentation for custom keybindings).

## Contributing
We welcome contributions from the community! If you have any bug fixes, improvements, or new features you'd like to see in the TPL extension, feel free to create a pull request on the GitHub repository https://github.com/Tanish-Ranjan/TPL-VSC-Extension.

## License
This extension is licensed under the GNU General Public License v3.0 (GPL-3.0). See the LICENSE file for more information.

**Enjoy using the TPL extension!**
