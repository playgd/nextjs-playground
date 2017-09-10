'use strict'

import React, { PureComponent } from 'react'
import Header from '../components/header'

export default class HelloWorld extends PureComponent {
  static getInitialProps = ({ req }) => {
    console.log('getInitialProps')
    return { title: 'Title came from backend!' }
  }

  constructor () {
    super()
    console.log('constructor')
  }

  componentWillMount () {
    console.log('cWM')
  }

  componentDidMount () {
    console.log('cDM')
  }

  render () {
    console.log('render')
    return (
      <div>
        <Header />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
