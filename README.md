# StartCpp

**StartCpp** is a Visual Studio Code extension that automatically adds standard boilerplate code when certain keywords are typed in a `.cpp` file. It simplifies the process of starting with new C++ files by eliminating the need to manually insert standard lines and the `main` function.

## Features

- **Auto-insert Boilerplate Code for `.cpp` Files**:
  - The extension inserts boilerplate code based on the following trigger keywords:
    - **`io`**: Adds basic `iostream` boilerplate.
    - **`arr`**: Adds boilerplate for working with arrays, vectors, and other standard C++ containers.
    - **`mem`**: Adds boilerplate for working with memory management and related libraries.
    - **`str`**: Adds boilerplate for string handling in C++.
    - **`algo`**: Adds boilerplate for algorithms and numeric operations.
    - **`math`**: Adds boilerplate for mathematical operations.
    - **`file`**: Adds boilerplate for file input/output operations.
    - **`ptr`**: Adds boilerplate for working with smart pointers.
    - **`time`**: Adds boilerplate for working with time and chrono.
    - **`cont`**: Adds boilerplate for using containers like vectors, lists, sets, and maps.

    Each keyword triggers the insertion of appropriate header files and a basic `main` function template.

## Requirements

- **Visual Studio Code**: You need to have Visual Studio Code installed to use this extension.
- **C++ Development Setup**: It's recommended to have a C++ compiler and debugger set up for full functionality.

## Installation

1. Open Visual Studio Code.
2. Go to the **Extensions** section by clicking on the Extensions icon in the sidebar.
3. Search for **StartCpp** in the search box.
4. Click **Install**.

Alternatively, you can install it from the command line using the following command:

```bash
code --install-extension zyntrax.start-cpp
```