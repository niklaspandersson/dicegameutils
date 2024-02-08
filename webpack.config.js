import path from 'path';

module.exports = {
  mode: 'production',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'lib/umd'),
    filename: 'index.js',
    library: 'dicegameutils',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: [".js"]
  },
};