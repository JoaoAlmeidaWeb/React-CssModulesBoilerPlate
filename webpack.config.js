var combineLoaders = require('webpack-combine-loaders');
var config = {
   entry: './main.js',
   output: {
         filename: 'index.js',
      },
   devServer: {
         inline: true,
         port: 8080
      },
   module: {
         loaders: [
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                           presets: ['es2015', 'react'] 
                        }
            },{
              test: /\.css$/,
              loader : combineLoaders([
                {
                  loader:'style-loader'
                }, {
                  loader: 'css-loader',
                  query:{
                    modules: true,
                    localIdentName : '[name]__[local]___[hash:base64:5]'
                  }
                }
              ])
            }
      ]
   }
}
module.exports = config;
