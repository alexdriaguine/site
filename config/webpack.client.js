const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const fs = require('fs')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const {
  publicPath,
  extensions,
  babelLoader,
  fileLoader,
  rawLoader,
  mdLoader,
} = require('./utils')

/**
 * Entries
 */
const baseEntry = path.resolve(__dirname, '../src/main.tsx')
const hotEntry = `webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr`

const entry = env => {
  if (env.production) {
    return env.static ? path.resolve(__dirname, '../src/static.tsx') : baseEntry
  }
  return [hotEntry, baseEntry]
}

/**
 * Reads all blog posts in the /posts folder.
 * Todo: move all this functionality to somewhere else
 *
 */
const postsPath = path.resolve(__dirname, '../src/posts')
const files = fs.readdirSync(postsPath)
const posts = files
  .filter(file => file.includes('.md'))
  .map(file => file.replace('.md', '').split('_'))
  .map(([date, file]) => `/blog/${file}`)

/**
 * Plugins.
 * TODO: // Move plugins to own fie/folder?
 */

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: 'index.html',
    inject: true,
  }),
]
const plugins = env => [
  ...(env.production ? [] : devPlugins),
  ...(env.analyze ? [new BundleAnalyzerPlugin()] : []),
  ...(env.static
    ? [
        new StaticSiteGeneratorPlugin({
          paths: ['/', '/blog/', ...posts],
        }),
      ]
    : [new ManifestPlugin()]),
]

/**
 * TODO: break up this into dev/prod configs? Maybe a config
 * factory for static/bundle?
 *
 * @param {{env: string, production: boolean}} env
 */
module.exports = env => {
  return {
    name: env.static ? 'static' : 'client',
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'cheap-module-inline-source-map',
    entry: entry(env),
    output: {
      path: path.resolve(__dirname, '../dist'),
      chunkFilename: '[name].chunk.js',
      publicPath: '/',
      hotUpdateMainFilename: 'updates/[hash].hot-update.json',
      hotUpdateChunkFilename: 'updates/[id].[hash].hot-update.js',
      ...(env.static && {
        globalObject: 'this',
        library: 'static',
        libraryTarget: 'umd',
      }),
    },
    resolve: {
      extensions,
    },
    module: {
      rules: [babelLoader, fileLoader(false), mdLoader],
    },
    optimization: {
      namedModules: true,
      noEmitOnErrors: true,
      splitChunks: env.static
        ? {}
        : {
            cacheGroups: {
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all',
              },
            },
          },
      runtimeChunk: env.static ? false : {name: 'manifest'},
    },
    plugins: plugins(env),
  }
}
