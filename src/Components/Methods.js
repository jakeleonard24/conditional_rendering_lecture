import React, { Component } from 'react';

import './../App.css';
import GuestGreeting from './GuestGreeting'
import UserGreeting from './UserGreeting'
import LogButton from './LogButton'

class Methods extends Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn: false,
      stage: 1
    }
    this.handleLoginClick = this.handleLoginClick.bind(this)
  }

  greeting(){
    console.log('ran')
    if(this.state.isLoggedIn){
      return <UserGreeting changeView={this.props.changeView} />
    }
    return <GuestGreeting />
  }

  handleLoginClick() {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }
  render() {

    return (
      <div className="App">
       {this.greeting()} 
       <LogButton loginClick={this.handleLoginClick} isLoggedIn={this.state.isLoggedIn}/>
      </div>
    );
  }
}

export default Methods;