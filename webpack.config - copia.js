const path = require('path');
 
module.exports = {
  entry: path.resolve(__dirname, './src/js/app.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      }      
    ],
  },
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    progress: true,  
    // esto para que todas las URLs que fallen (404) devuelvan nuestro index.html
    historyApiFallback: true,

    // para que los errores en consola aparescan en un overlay en el BROWSER
    overlay: false,
    // habilitar HMR
    hot: true, 
    port: 5000,        
    inline: true,   
    //contentBase: path.resolve(__dirname, './dist'),
  },
  devtool:'source-map'//para ver en que linea hay errores  
};