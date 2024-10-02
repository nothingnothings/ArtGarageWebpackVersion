![ArtGarage](/src/assets/images/ArtGarage.png)

# ArtGarage

Aplicativo Frontend construído com HTML, CSS e JavaScript puro. O design responsivo foi desenvolvido usando Flexbox e media queries, visando atender a diferentes tipos de dispositivos, tanto desktop quanto mobile.


Este webApp foi bundled com Webpack e foi realizado seu deploy com o `gh-pages`, assistido pela funcionalidade GitHub Actions. Ele Pode ser acessado [aqui](https://nothingnothings.github.io/ArtGarageWebpackVersion/).


![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/nothingnothings/ArtGarageWebpackVersion/master?style=flat-square)
[![en](https://img.shields.io/badge/lang-en-red.svg?style=flat-square)](https://github.com/nothingnothings/ArtGarageWebpackVersion)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg?style=flat-square)](https://github.com/nothingnothings/ArtGarageWebpackVersion/blob/master/README.pt-br.md)


## Tecnologias

Algumas das linguagens e bibliotecas utilizadas:

- HTML5
- CSS3 (animações, principalmente Flexbox e estilos comuns, com media queries para ajustes)
- JavaScript puro (sem frameworks; uso de `var`, funções normais e eventListeners comuns)


## Estrutura de Diretórios do Projeto

O ambiente de desenvolvimento (com o uso de um workflow Webpack):

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

O output de produção do workflow Webpack, conforme observado na branch gh-pages (responsável pelo deploy do site):


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

## Webpack e Arquivos de Configuração do Projeto

O arquivo webpack.config.js usado no projeto:

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

O arquivo package.json:

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

## Configuração

Para usar este projeto, clone-o usando o Git:

1. Execute `git clone` para clonar o projeto em seu repositório Git local
2. Execute `npm install` para instalar todas as dependências
3. Execute `npm run build:prod` para criar a versão de produção do aplicativo (output é realizado em `/dist`)
4. Sirva os arquivos de produção localmente (por exemplo, webpack-dev-server) ou na web, com a ajuda de um provedor de hospedagem

## Recursos

- WebApp inspirada em SPA (Single-Page Application)
- Design responsivo (mobile e desktop) criado com Flexbox e media queries
- Adição/remoção de classes CSS (animação "slide-in") implementada com JavaScript
- Uso de GitHub Actions e GitHub Pages com Webpack, para um fluxo de trabalho contínuo (transição da fase de desenvolvimento para a fase de produção/implantação). Ao usar o comando `git push`, o GitHub Actions transfere o conteúdo da branch master para a branch `gh-pages`, que então realiza o deploy do aplicativo em https://nothingnothings.github.io/ArtGarageWebpackVersion/.
- Favicon personalizado, compatível com vários dispositivos


## Inspiração

Este aplicativo foi inspirado no curso "CSS Flexbox" fornecido pela Origamid.


