import {Flex, Link} from 'rebass'
import React from 'react'
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  StackoverflowIcon,
} from '../../components/icons'

export const SocialLinks = () => (
  <Flex justifyContent="space-around">
    <Link
      target="_blank"
      rel="noopener"
      href="https://github.com/alexdriaguine"
      aria-label="github"
    >
      <GithubIcon />
    </Link>
    <Link
      target="_blank"
      rel="noopener"
      href="https://twitter.com/alexdriagin_"
      aria-label="twitter"
    >
      <TwitterIcon />
    </Link>
    <Link
      target="_blank"
      rel="noopener"
      href="https://www.linkedin.com/in/alexandre-driaguine-852913125/"
      aria-label="linkedin"
    >
      <LinkedInIcon />
    </Link>
    <Link
      target="_blank"
      rel="noopener"
      href="https://stackoverflow.com/users/6601566/alex-driaguine"
      aria-label="stackoverflow"
    >
      <StackoverflowIcon />
    </Link>
  </Flex>
)
