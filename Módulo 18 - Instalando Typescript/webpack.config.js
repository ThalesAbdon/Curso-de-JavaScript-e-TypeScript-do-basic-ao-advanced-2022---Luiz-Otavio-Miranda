const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/Módulo 19 - Tipos Básicos/Aula 19 - Exercicioatividade.ts',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfigFrontend.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map',
};
