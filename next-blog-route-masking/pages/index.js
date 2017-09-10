import React from 'react'
import Layout from '../components/layout'
import PostLink from '../components/post-link'

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id='hello-next-js' title='Hello Next.js' />
      <PostLink id='learn-next-js' title='Learn Next.js is awesome' />
      <PostLink id='deploy-apps-with-zeit' title='Deploy apps with Zeit' />
    </ul>
  </Layout>
)

export default Index
