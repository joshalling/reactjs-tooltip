var path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // USE THE babel-loader FOR THESE FILE EXTENSIONS
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader'],
      },
    ],
  },
  externals: {
    react: 'commonjs react',
  },
};
