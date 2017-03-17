'use strict'

import React, { Component } from 'react'

export default class HelloWorld extends Component {
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
    return <h1>{this.props.title}</h1>
  }
}
