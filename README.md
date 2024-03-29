# Web tooling assignment - Jokes platform

<div style="display: flex; justify-content: center; padding: 32px; width: 100%;" align="center">
    <img
        src="./media/troll-face.png"
        alt="Troll face"
        width="100"
        height="100"
    />
</div>

This is the repository for the web tooling assignment at Harbour.Space.

This project is a simple jokes platform that fetches jokes from the [JokeAPI](https://sv443.net/jokeapi/v2/#filtering).

[Vercel deploy](https://web-tooling-homeworks.vercel.app/)

[Chromatic](https://main--65cb2fb2416e0358fb454ba1.chromatic.com/)

## Table of contents

- [Web tooling assignment](#web-tooling-assignment)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

A jokes website that fetches jokes from the [JokeAPI](https://sv443.net/jokeapi/v2/#filtering). You can get jokes by category.

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

### Development

If you want to start the project in development mode, run the following command:

```bash
npm run dev
```

To start the storybook, run the following command:

```bash
npm run storybook
```

### Build for production

To build the project for production, run the following command:

```bash
npm run build
```

Output folder is `dist`.

Then you can start the project with the following command:

```bash
npm start
```

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
