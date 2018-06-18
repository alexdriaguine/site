import * as React from 'react'
import Markdown from 'markdown-to-jsx'
import {Posts} from '../posts/posts';

interface OwnProps {
  match: {
    params: {
      [key: string]: string
    }
  }
}

const NoPost = () => <p>Not found</p>

export const BlogPost = (props: OwnProps) => {
  const {title} = props.match.params
  const Post = (Posts as any)[title].Component || NoPost
  return <Post />
}
