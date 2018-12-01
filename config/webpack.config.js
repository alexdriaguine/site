const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const fs = require('fs')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

// Paths
const baseEntry = path.resolve(__dirname, '..', 'src', 'main.tsx')
const hotEntry = `webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr`
const staticEntry = path.resolve(__dirname, '..', 'src', 'static.tsx')
const output = path.resolve(__dirname, '..', 'dist')
const entry = env => {
  if (env.production) {
    return env.static ? staticEntry : baseEntry
  }
  return [hotEntry, baseEntry]
}

/**
 * Reads all blog posts in the /posts folder.
 * Todo: move all this functionality to somewhere else
 *
 */
// const postsPath = path.resolve(__dirname, '../src/posts')
// const stats = fs.statSync(postsPath)

// const files = fs.readdirSync(postsPath)
// const posts = files
//   .filter(file => file.includes('.md'))
//   .map(file => file.replace('.md', '').split('_'))
//   .map(([date, file]) => `/blog/${file}`)

/**
 * Plugins.
 * TODO: // Move plugins to own fie/folder?
 */

/**
 * TODO: break up this into dev/prod configs? Maybe a config
 * factory for static/bundle?
 *
 * @param {{env: string, production: boolean}} env
 */
module.exports = env => {
  // Basic config
  const config = {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'cheap-module-inline-source-map',
    entry: entry(env),
    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
  }

  const filename = env.production
    ? '[name].bundle.[hash].js'
    : '[name].bundle.js'
  const chunkFilename = env.production
    ? '[name].chunk.[hash].js'
    : '[name].chunk.js'

  // Output config
  config.output = {
    path: output,
    filename: filename,
    chunkFilename: chunkFilename,
    publicPath: '/',
  }

  // HMR chunk names
  if (!env.production) {
    config.output.hotUpdateMainFilename = 'updates/[hash].hot-update.json'
    config.output.hotUpdateChunkFilename = 'updates/[id].[hash].hot-update.js'
  }

  // During build, we also build static .html versions of all pages, to do this
  // we cannot split vendor and other chunks, and the bundle needs to be an umd library
  // so the static site generator plugin can require our bundle in a node context
  // we dont use this js-bundle, just the generated .html files
  if (env.static) {
    config.output.globalObject = 'this'
    config.output.library = 'static'
    config.output.filename = 'static.js'
    config.output.libraryTarget = 'umd'
  }

  // Loaders
  config.module = {
    rules: [
      // Babel loader with a ts-preset takes care of loading and
      // transpiling .ts(x) and js-files
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // File loader takes care of loading images
      // TODO: add URL loader for inlining smaller images
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: !env.static,
            },
          },
        ],
      },
      // babel/@mdx-js takes care of loading the markdown
      // files so we can use them as React components
      {
        rules: [
          {
            test: /\.md$/,
            use: ['babel-loader', '@mdx-js/loader'],
          },
        ],
      },
    ],
  }

  const basePlugins = []
  const devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    }),
  ]
  const prodPlugins = []
  const staticPlugins = []

  // Plugins

  // Base plugins
  config.plugins = []

  if (env.production) {
    config.plugins.push(...prodPlugins)
    if (env.static) {
      config.plugins.push(
        new StaticSiteGeneratorPlugin({
          paths: ['/', '/blog/', ...posts],
        }),
      )
    } else {
      config.plugins.push(new ManifestPlugin())
    }
  } else {
    config.plugins.push(...devPlugins)
  }

  // Dont care to analyze the static bundle since it's
  // not used
  if (env.analyze && !env.static) {
    config.plugins.push(new BundleAnalyzerPlugin())
  }

  // Chunking, only doing this when building the
  // non static bundle, see comment above
  if (!env.static) {
    config.optimization = {
      namedModules: true,
      noEmitOnErrors: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
      runtimeChunk: {name: 'manifest'},
    }
  }

  return config
}
