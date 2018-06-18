const path = require('path')
const fs = require('fs')
// TODO: watcher

const postsPath = path.resolve(__dirname, '..', 'src', 'posts')
const getPostFilePaths = () => fs.readdirSync(postsPath)

/**
 *
 * @param {String} string
 */
const capitalize = string => {
  return `${string[0].toUpperCase()}${string.substr(1)}`
}

const template = `import * as React from 'react'
${posts
  .map(post => `import ${post.componentName} from './${post.path}'`)
  .join('\n')}

export const Posts = {
  ${posts
    .map(
      post => `['${post.title}']: {
    Component: ${post.componentName},
    title: '${post.title}',
    date: '${post.date}',
  }`,
    )
    .join(',\n  ')}
}
`

const generatePosts = () => {
  const files = getPostFilePaths()
  const posts = []

  files.filter(file => file.includes('.md')).forEach(file => {
    const filePath = path.resolve(postsPath, file)
    const fileContents = fs.readFileSync(filePath)
    const fileNameWithoutExtension = file.replace(/\.[^/.]+$/, '')
    const [date, title] = fileNameWithoutExtension.split('_')
    posts.push({
      path: file,
      title,
      date,
      componentName: capitalize(title).replace('-', ''),
    })
  })

  fs.writeFileSync(
    path.resolve(__dirname, '../', 'src', 'posts', 'posts.tsx'),
    template,
  )
}
