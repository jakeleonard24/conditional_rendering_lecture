import React, { Component } from 'react';
import IsThisAllowed from './IsThisAllowed'
import AreYouSureItWorks from './AreYouSureItWorks'

class BonusRound extends Component {
    constructor(){
        super()
        this.state = {
            view: <IsThisAllowed />
        }
    }
    render() {
        var something = 'You can pass props too'
        return (
            <div>
               {this.state.view}
               <button onClick={() => {this.setState({view: <AreYouSureItWorks something={something}/>})}}>Change view</button>
            </div>
        );
    }
}

export default BonusRound;