![ArtGarage](/src/assets/images/ArtGarage.png)

# ArtGarage

Frontend App built with vanilla HTML, CSS and Javascript. Flexbox and media queries were used for the responsive design (attempting to cater to multiple device types, both desktop and mobile, with different resolutions). 

The webApp was bundled with Webpack and deployed with `gh-pages`, assisted by the GitHub Actions feature. It can be accessed [here](https://nothingnothings.github.io/ArtGarageWebpackVersion/).

## Technologies

Some of the Languages and Libraries employed:

- HTML5
- CSS3 (besides animations, mainly Flexbox and common styles, with media queries for adjustments)
- Vanilla JavaScript (no JavasScript frameworks; usage of `var`, normal functions and common eventListeners)

## Project Directory Structure 

The development environment (with the use of a Webpack workflow):

```
.\
│
├── src\
│   │
│   ├── assets\
│   │   │
│   │   ├── css\
│   │   │   └── style.css
│   │   │
│   │   └── images\
│   │       ├── ArtGarage.png
│   │       ├── about1.jpg
│   │       ├── about2.jpg
│   │       ├── favicon.ico
│   │       ├── products1.jpg
│   │       ├── products2.jpg
│   │       └── products3.jpg
│   │
│   │
│   ├── js\
│   │   └── index.js
│   │
│   └── index.html
│
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── webpack.config.js

```

The Webpack workflow's production output, as shown in the gh-pages branch (tasked with the deployment of the app):


```
.\
│
├── assets\
│   │
│   └── images\
│       ├── about1.jpg
│       ├── about2.jpg
│       ├── favicon.ico
│       ├── products1.jpg
│       ├── products2.jpg
│       └── products3.jpg
│
│
├── .nojekyll
├── bundle.js
└── index.html
```

## Webpack and Project Configuration Files

The webpack.config.js file used in the project:

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',

  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: (pathData) => {
      const filePath = path
        .dirname(pathData.filename)
        .split('/')
        .slice(1)
        .join('/');
      return `${filePath}/[name][ext]`;
    },
  },
  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: 'asset/resource',
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|xml|webmanifest)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],

  performance: {
    hints: false,
  },
};
```

The package.json file:

```
{
  "name": "projetoartgaragewebpack",
  "version": "1.0.0",
  "description": "![ArtGarage](/images/ArtGarage.png)",
  "main": "src/js/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:prod": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.7.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  }
}
```

## Setup

To use this project, clone it using Git:

1. Run `git clone` to clone the project into your local Git repository
2. Run `npm install` to install all dependencies
3. Run `npm run build:prod` to create the production version of the app (outputted in `/dist`)
4. Serve the production files locally (e.g. webpack-dev-server), or on the web, with the help of a hosting provider

## Features

- SPA (Single-Page Application)-inspired webApp
- Responsive design (mobile and desktop) created with Flexbox and media queries
- Addition/removal of CSS classes ("slide-in" animation) implemented with JavaScript
- Usage of GitHub Actions and GitHub Pages with Webpack, for a seamless workflow (transition from development stage to production/deployment stage). Upon the `git push command`, GitHub Actions transfers the contents of the master branch into the `gh-pages` branch, which then deploys the app at https://nothingnothings.github.io/ArtGarageWebpackVersion/.
- Custom favicon, compatible with multiple devices


## Inspiration

This app was based on the "CSS Flexbox" course provided by Origamid.
