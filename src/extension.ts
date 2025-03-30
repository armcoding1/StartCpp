import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.workspace.onDidChangeTextDocument((event) => {
        const document = event.document;

        if (document.languageId === "cpp") {
            const text = document.getText().trim();

            if (text === "io") {
                insertBoilerplate(document, "#include <iostream>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "arr") {
                insertBoilerplate(document, "#include <iostream>\n#include <vector>\n#include <array>\n#include <valarray>\n#include <algorithm>\n#include <numeric>\n#include <cstring>\n#include <cstdlib>\n#include <cstddef>\n#include <new>\n#include <initializer_list>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "mem") {
                insertBoilerplate(document, "#include <iostream>\n#include <memory>\n#include <vector>\n#include <array>\n#include <cstring>\n#include <cstdlib>\n#include <cstddef>\n#include <new>\n\nint main() {\n    return 0;\n}\n");
            }
            else if (text === "str") {
                insertBoilerplate(document, "#include <iostream>\n#include <string>\n#include <cstring>\n\nint main() {\n    return 0;\n}\n");
            }
            else if (text === "algo") {
                insertBoilerplate(document, "#include <iostream>\n#include <algorithm>\n#include <numeric>\n\nint main() {\n    return 0;\n}\n");
            }
            else if (text === "math") {
                insertBoilerplate(document, "#include <iostream>\n#include <cmath>\n#include <numeric>\n\nint main() {\n    return 0;\n}\n");
            }
            else if (text === "file") {
                insertBoilerplate(document, "#include <iostream>\n#include <fstream>\n\nint main() {\n    return 0;\n}\n");
            }
            else if (text === "ptr") {
                insertBoilerplate(document, "#include <iostream>\n#include <memory>\n\nint main() {\n    return 0;\n}\n");
            }
            else if (text === "time") {
                insertBoilerplate(document, "#include <iostream>\n#include <chrono>\n#include <ctime>\n\nint main() {\n    return 0;\n}\n");
            }
            else if (text === "cont") {
                insertBoilerplate(document, "#include <iostream>\n#include <vector>\n#include <list>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\n\nint main() {\n    return 0;\n}\n");
            }
        }
    });

    context.subscriptions.push(disposable);
}

async function insertBoilerplate(document: vscode.TextDocument, boilerplate: string) {
    const edit = new vscode.WorkspaceEdit();
    const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(document.getText().length)
    );

    edit.replace(document.uri, fullRange, boilerplate);
    await vscode.workspace.applyEdit(edit);
}

export function deactivate() { }
