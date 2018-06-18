import * as React from 'react'
import {Link} from 'react-router-dom'
import {BlogPost} from './blog-post'
import {Route} from 'react-router'
import {Posts} from '../posts/posts'

export const Blog = (props: any) => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {Object.keys(Posts).map(k => (
          <li key={k}>
            <Link to={`/blog/${k}`}>{k}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
