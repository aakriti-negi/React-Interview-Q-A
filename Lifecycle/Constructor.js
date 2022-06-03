import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(props){
        super(props)
            this.state ={favColor:'red'}
            console.log('constructor')
    }
  render() {
    return (
      <div>My fav color is {this.state.favColor}</div>
    )
  }
}
