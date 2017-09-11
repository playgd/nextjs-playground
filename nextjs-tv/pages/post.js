import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import to from '../components/to'

const Post = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <div dangerouslySetInnerHTML={{ __html: show.summary }} />
    <img src={show.image.medium} alt={show.name} />
  </Layout>
)

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const [err, show] = await to(axios.get(`https://api.tvmaze.com/shows/${id}`))
  if (err) {
    console.log('error:', err)
    return { show: [] }
  }

  console.log('Show loaded:', show.data.name)
  return { show: show.data }
}

export default Post
