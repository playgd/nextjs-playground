import React from 'react'
import Layout from '../components/layout'
import PostLink from '../components/post-link'

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title='Hello Next.js' />
      <PostLink title='Learn Next.js is awesome' />
      <PostLink title='Deploy apps with Zeit' />
    </ul>
  </Layout>
)

export default Index
