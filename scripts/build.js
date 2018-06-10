const rimraf = require('rimraf')
const webpack = require('webpack')

const args = process.argv.slice(2)

const config = {
  production: true,
  analyze: args.includes('--analyze'),
}

async function build() {
  rimraf.sync('dist')

  const createConfig = require('../config/webpack.client.js')
  const jsConfig = createConfig({...config, static: false})
  const staticConfig = createConfig({...config, static: true})

  const jsCompiler = webpack(jsConfig)
  const staticCompiler = webpack(staticConfig)

  await compile(jsCompiler).catch(err => console.log('JS compiler: ', err))
  await compile(staticCompiler).catch(err => console.log('Static compiler', err))
}

/**
 *
 * @param {webpack.Compiler} compiler
 * @returns {Promise<any>}
 */
const compile = compiler =>
  new Promise((resolve, reject) =>
    compiler.run((err, stats) => {
      if (err) return reject(err)
      if (stats.hasErrors()) {
        console.log(stats.compilation.errors)
        return reject('Error when compiling')
      }

      return resolve(stats)
    }),
  )

build()
