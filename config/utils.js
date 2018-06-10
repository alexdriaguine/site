const publicPath = '/public/'

const extensions = ['.ts', '.tsx', '.js', '.json']

const babelLoader = {
  test: /\.(tsx?)|(js)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
}

const fileLoader = server => ({
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        emitFile: !server,
      },
    },
  ],
})

const rawLoader = {
  test: /\.md$/,
  use: 'raw-loader',
}

const mdLoader = {
  rules: [
    {
      test: /\.md$/,
      use: ['babel-loader', '@mdx-js/loader'],
    },
  ],
}

module.exports = {
  publicPath,
  extensions,
  babelLoader,
  fileLoader,
  rawLoader,
  mdLoader
}
