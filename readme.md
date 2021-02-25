# newsbolivia

Tutorial : https://dev.to/theenadayalan/how-to-set-up-react-js-from-scratch-without-using-create-react-app-37mk

Ejecutar  npm install webpack -g   para instalar de manera global
npm init --yes
npm install webpack --save-dev      para instalar en modo dev

Para usar webpack
npm install -D webpack-cli

Setup webpack
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin

Comandos:
empacar: webpack app.js bundle.js //ya no sirve en webpack5, usar el path del archivo
webpack --mode=production c:\Projects\newsbolivia\client\app.js -o bundle
webpack --mode=production c:\Projects\newsbolivia\client\app.js -o bundle --watch

install loader CSS:
npm install style-loader css-loader -D

Ejecutar Webpack desde terminal. Leera webpack.config:
webpack --mode=production -w

Instalar webpack server
npm install webpack-dev-server -g

Para ejecutar webpack server con npm
npm install --save-dev webpack-dev-server

Instalar Babel
npm install babel-core babel-loader babel-preset-es2015 --save-dev

Instalar @babel/core . Este si funciona Webpack 5
npm install @babel/core --save

Commando largo para instalar modulos
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin

Commando largo para instalar modulos FAZT
npm i --save-dev webpack webpack-cli @babel/core @babel/cli @babel/preset-env babel-loader 
npm install --save @babel/polyfill //polifill = async Calls into Browsers


--React
yarn add react react-dom react-hot-loader
npm install --save react-router-dom

Añadir Babel .babelrc o babel.config.json segun sea el caso
Añadir a babelrc:
{
    "presets": ["@babel/preset-env","@babel/preset-react"]
}


GitHub
git init
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin https://github.com/jimmyrperezpierola/newsbolivia.git
git push -u origin main

CI with Git:
git add .
git commit -m 'updating file'
git push

Adding ico on html
npm install file-loader --save-dev

Firebase:
npm i firebase

Styled-components
npm i styled-components

Material UI Icons
npm install @material-ui/core

React Icons
npm install react-icons --save

Adding Url-Loader to get images on prod:
npm install url-loader --save-dev
