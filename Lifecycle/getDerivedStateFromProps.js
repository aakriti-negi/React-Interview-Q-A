import React, { Component } from 'react';
import Constructor from './Constructor';

export default class getDerivedStateFromProps extends Component {
    constructor(props){
        super(props)
            this.state ={favColor:'red'}
            console.log('constructor')
    }
    static getDerivedStateFromProps(props,state){
        return{favColor:props.favColor}
    }
    render() {
    return (
      <div>My fav color is {this.state.favColor}</div>
    )
  }
}
