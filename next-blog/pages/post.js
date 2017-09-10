import React from 'react'
import Layout from '../components/layout'

const Index = ({ url }) => (
  <Layout>
    <Content url={url} />
  </Layout>
)

const Content = ({ url }) => (
  <article>
    <h1>{url.query.title}</h1>
    <p>This is the blog post</p>
  </article>
)

export default Index
