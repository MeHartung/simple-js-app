# Pokémon Repository

This project is a simple web application that displays a list of Pokémon fetched from the PokéAPI. Users can click on a Pokémon to see its details in a modal.

## Features

- Fetches a list of Pokémon from the PokéAPI
- Displays the Pokémon in a styled list
- Shows details of each Pokémon in a modal upon clicking

## Technologies Used

- HTML
- CSS (with Bootstrap)
- JavaScript
- Fetch API

## Getting Started

### Prerequisites

To run this project locally, you need a web browser and a local server. You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode or any other method to serve HTML files.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pokemon-repository.git
   ```

Navigate to the project directory:

cd pokemon-repository

Open index.html in your browser or use a local server to serve the file.

Usage
Once the project is running, you will see a list of Pokémon. Click on any Pokémon to see its details in a modal.

File Structure

pokemon-repository/
├── dist/
│ ├── scripts.dist.js
│ └── styles.dist.css
├── js/
│ ├── fetch-polyfill.js
│ └── promise-polyfill.js
├── index.html
├── README.md
└── src/
├── scripts.js
└── styles.css

Customization

CSS: Customize the styling in src/styles.css.
JavaScript: Add or modify functionality in src/scripts.js.
Minified Files

The project includes minified versions of CSS and JS files located in the dist directory. These files are referenced in index.html.

Dependencies

This project uses the following dependencies:

Bootstrap 4.3.1
jQuery 3.3.1
Popper.js 1.14.7
Acknowledgements

PokéAPI for providing the Pokémon data.

License

This project is licensed under the MIT License.
