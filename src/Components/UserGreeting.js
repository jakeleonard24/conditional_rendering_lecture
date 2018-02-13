import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(){
        super()

        this.state = {
            messages:['Trevor sucks', 'Austin Smells Weird', 'Alex is faschist'],
            viewMessages: false,
            
        }
    }
    render() {
       
        var list = this.state.messages.map((message, i)=> {
            return(
                <li key={i}>{message}</li>
            )
        })
        return (
            <div>
                <p>Hi user</p>
               <p onClick={() => {this.setState({viewMessages: !this.state.viewMessages})}} className='messageText'>You have {this.state.messages.length} new messages.</p>

               {/* It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false. */}

               <ul>
                   {this.state.viewMessages && list}
               </ul>
               <button onClick={() => {this.props.changeView('RenderFunctions')}}>render functions</button>
                
            </div>
        );
    }
}

export default UserGreeting;