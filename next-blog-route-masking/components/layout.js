import React from 'react'
import Link from 'next/link'

const Layout = ({ children }) => (
  <div>
    <Link href='/'><a style={linkStyle}>Home</a></Link>
    <Link href='/about'><a style={linkStyle}>About</a></Link>
    {children}
  </div>
)

const linkStyle = { marginRight: 15 }

export default Layout
