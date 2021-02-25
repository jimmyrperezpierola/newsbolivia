const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
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
      },
      {
        test: /vr\.jpg$/, 
        use: 'file-loader?name=[name].[ext]',        
      },
      {
        test: /favicon\.ico$/,
        use: 'file-loader?name=[name].[ext]',
      }            
    ],
  },
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
  devServer: {
    progress: true,  
    // esto para que todas las URLs que fallen (404) devuelvan nuestro index.html
    historyApiFallback: true,

    contentBase:  path.resolve(__dirname, 'dist'),
    open: true,
    // compress: true,
    // para que los errores en consola aparescan en un overlay en el BROWSER
    overlay: false,
    hot: true, 
    port: 5000,        
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "src/index.html", //source html
        favicon: './src/favicon.ico',
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }      
    })
  ], 
  devtool:'source-map'//para ver en que linea hay errores  
};