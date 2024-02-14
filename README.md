# Web tooling assignment - Jokes platform

This is the repository for the web tooling assignment at Harbour.Space.

This project is a simple jokes platform that fetches jokes from the [JokeAPI](https://sv443.net/jokeapi/v2/#filtering).

## Table of contents

-   [Web tooling assignment](#web-tooling-assignment)
    -   [Table of contents](#table-of-contents)
    -   [Introduction](#introduction)
    -   [Installation](#installation)
    -   [Usage](#usage)
    -   [Contributing](#contributing)
    -   [License](#license)

## Introduction

This is a simple web tooling assignment for the Web App From Scratch course at the HvA.

## Installation

1. Clone the repository

```bash
git clone
```

2. Copy and populate the environment variables

```bash
cp .env.example .env
```

3. Install the dependencies

```bash
npm install
```

## Usage

To start the project, run the following command:

```bash
npm start
```

Or if you want to start the project in development mode, run the following command:

```bash
npm run dev
```

To start the storybook, run the following command:

```bash
npm run storybook
```

## Build for production

To build the project for production, run the following command:

```bash
npm run build
```

Output folder is `dist`.

To build the storybook for production, run the following command:

```bash
npm run build-storybook
```

Output folder is `storybook-static`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
