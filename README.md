# 📊 test_table_2_230819 - Dynamic Vue.js Grid Application

A lightweight, client-side web application demonstrating a dynamic, searchable, and sortable data grid implemented with HTML, CSS, and Vue.js 2.x. This project serves as a practical example for building interactive tabular data displays with a component-based JavaScript framework.

## 🚀 Features

This application showcases the following core functionalities:

*   **Dynamic Data Grid**: Renders tabular data efficiently using Vue.js reactivity.
*   **Search and Filter**: Allows users to filter table data in real-time by typing into a search input field. The application dynamically updates the displayed rows based on the search query.
*   **Column-based Display**: Automatically generates table headers based on provided data columns.
*   **Vue.js Component Architecture**: Implements the data grid as a reusable Vue component (`demo-grid`), demonstrating best practices for modular UI development.
*   **Client-Side Rendering**: All data processing and rendering happens directly in the user's browser, requiring no backend server for basic functionality.
*   **User Feedback**: Displays "Нет совпадений" (No matches found) when the search filter yields no results.

## 🛠 Technology Stack

This project leverages a modern client-side technology stack to deliver its features:

*   **Markup Language**: `HTML5` for structuring the web content.
*   **Styling**: `CSS3` for presentational styling and layout.
*   **JavaScript Framework**: `Vue.js 2.6.10` (via CDN) for reactive data binding, component-based UI, and efficient DOM manipulation.
*   **Core Logic**: `Vanilla JavaScript` for additional scripting and integration.

## 🏗 Architecture / Workflow

The `test_table_2_230819` application follows a classic client-side, single-page application (SPA) architecture, heavily reliant on the Vue.js framework for managing its interactive data grid.

```mermaid
graph TD
    A[👤 User] --> B{🌐 Web Browser};
    B --> C[📄 index.html];

    C -- Links --> D[🎨 style.css];
    C -- Loads --> E[🧩 Vue.js Library (CDN)];
    C -- Loads --> F[📜 grid-FINAL-111.js];
    C -- Loads (Auxiliary) --> G[💡 script.js];

    subgraph Vue.js Application Lifecycle
        F -- Initializes & Mounts --> H[📦 Vue Root Instance (#demo)];
        H -- Registers & Uses --> I[📊 demo-grid Component];
        H -- Manages Reactive State --> J[🔍 searchQuery, 🗃️ gridData, 🏷️ gridColumns];

        J -- Passes Data as Props --> I;
        I -- Computes Derived State --> K[🔄 filteredData (Based on searchQuery)];
        K -- Renders Dynamically --> L[HTML Table (Table Head & Body)];
    end

    A -- User Interaction (Search Input) --> K_input[Text Input (v-model)];
    K_input --> J;

    L -- Displayed In --> B;
    L -- Styled By --> D;

    classDef main fill:#f9d0c4,stroke:#333,stroke-width:2px;
    class A,B main;
    classDef vueApp fill:#e0f2f7,stroke:#333,stroke-width:2px;
    class H,I vueApp;
    classDef vueState fill:#fce8d7,stroke:#333,stroke-width:2px;
    class J,K vueState;
    classDef fileResource fill:#f0f0f0,stroke:#333,stroke-width:1px;
    class C,D,E,F,G fileResource;
    classDef output fill:#ccffcc,stroke:#333,stroke-width:2px;
    class L output;
    classDef interaction fill:#c1e8ff,stroke:#333,stroke-width:2px;
    class K_input interaction;
```

**Explanation:**

1.  **User Request**: The user accesses `index.html` via their web browser.
2.  **Resource Loading**: The browser loads `index.html`, which in turn fetches `style.css` for styling, the `Vue.js` library from a CDN, and the application's core JavaScript files: `grid-FINAL-111.js` and `script.js`.
3.  **Vue.js Initialization**: `grid-FINAL-111.js` (presumably) initializes the main Vue application instance, targeting the `<div id="demo">` element. It also registers the `demo-grid` component and defines the initial reactive data, such as `gridData` (the table's raw content), `gridColumns` (the headers), and `searchQuery`.
4.  **Component Rendering**: The `demo-grid` component receives the `gridData`, `gridColumns`, and `filter-key` (`searchQuery`) as props.
5.  **Reactivity and Filtering**: When the user types into the search input, `searchQuery` is updated via `v-model`. Vue.js detects this change, triggering a re-computation of `filteredData` within the `demo-grid` component.
6.  **Dynamic Display**: The `demo-grid` component's template dynamically renders an HTML `<table>` based on the `filteredData`, including headers and rows. If `filteredData` is empty, it displays "Нет совпадений".
7.  **Styling**: `style.css` provides the visual presentation for the table, search input, and overall page layout.
8.  **Auxiliary Script**: `script.js` may contain additional non-Vue related JavaScript or further enhancements, though its specific content is not detailed here.

## 📂 Project Structure

The repository maintains a flat and straightforward directory structure, typical for a small, client-side web application:

```
.
├── index.html        # Main HTML file, acts as the entry point for the web application.
├── style.css         # Contains all CSS rules for styling the application's UI.
├── script.js         # An auxiliary JavaScript file; may contain general purpose scripts or enhancements.
├── grid-FINAL-111.js # The primary JavaScript file containing the Vue.js application logic,
                      # including the definition of the demo-grid component, data, and methods.
└── README.md         # This comprehensive documentation file.
```

## ⚙️ Installation / Quick Start

To set up and run this project locally, follow these simple steps:

1.  **Clone the Repository**:
    Open your terminal or command prompt and execute the following command to download the project files:
    ```bash
    git clone https://github.com/iv150320/test_table_2_230819.git
    cd test_table_2_230819
    ```

2.  **Open the Project**:
    Navigate into the cloned directory. You can open the project in your preferred code editor (e.g., VS Code).

3.  **Launch in Browser**:
    Since this is a client-side application, you can simply open the `index.html` file directly in your web browser.
    *   **Drag-and-Drop**: Drag the `index.html` file from your file explorer onto your browser window.
    *   **File Path**: Right-click `index.html` and choose "Open with" -> your preferred browser.

    Alternatively, for a more robust development experience and to avoid potential browser security restrictions (especially if you plan to add AJAX requests later), you can serve the files using a local web server:

    *   **Using `npx serve`**:
        If you have Node.js installed, you can use `npx serve` (a simple static file server):
        ```bash
        npx serve .
        ```
        Then, open your browser and navigate to the address provided by `serve` (e.g., `http://localhost:5000`).

    *   **Using VS Code Live Server Extension**:
        If you are using VS Code, install the "Live Server" extension. Right-click `index.html` in the file explorer and select "Open with Live Server".

Once opened, you will see the data grid with a search input at the top. Experiment by typing into the search box to filter the table data dynamically.

---
**Author**: @iv150320