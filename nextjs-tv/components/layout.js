import React from 'react'
import Link from 'next/link'

const style = { marginRight: 15 }

const Layout = ({ children }) => (
  <div>
    <Link href='/'>
      <a style={style}>Back to home</a>
    </Link>
    {children}
  </div>
)

export default Layout
