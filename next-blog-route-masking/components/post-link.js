import React from 'react'
import Link from 'next/link'

const PostLink = ({ title, id }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

export default PostLink
