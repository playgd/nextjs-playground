import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Layout from '../components/layout'
import to from '../helpers/to'

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map((show) => (
        <li key={show.score}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
    const [err, shows] = await to(axios.get('https://api.tvmaze.com/search/shows?q=batman'))
    if (err) {
      console.log('error:', err)
      return { shows: [] }
    }

    return {
      shows: shows.data.map((show) => ({
        ...show.show,
        score: show.score
      }))
    }
}

export default Index
