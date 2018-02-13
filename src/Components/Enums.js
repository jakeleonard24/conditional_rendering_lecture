import React, { Component } from 'react';


class Enums extends Component {
    constructor(){
        super()
        this.state = {
            view: 'loading'
        }
        this.changeView = this.changeView.bind(this)
    }

    changeView(){
        console.log('changed');
        var num = Math.floor(Math.random() * Math.floor(4))
        console.log(num);
        if(num === 0){
            this.setState({view: 'loading'})
        }
        if(num === 1){
            this.setState({view: 'error'})
        }
        if(num === 2){
            this.setState({view: 'warning'})
        }
        if(num === 3){
            this.setState({view: 'info'})
        }
    }
    render() {
        const views = {
            info: <div>Actual info: Countries With cars in space: USA 1, Others: 0</div>,
            warning: <div>Warning, not sure this worked right</div>,
            error: <div>Oops,<br/><img src='https://tr3.cbsistatic.com/hub/i/2016/05/26/1d82af32-867f-4b4b-872a-96bebd85a100/e57cfeb20774d4d970b3800baebf188c/windows-1-error.jpg'/></div>,
            loading: <div>Loading...</div>
      }
        return (
            <div>
                {views[this.state.view]}
                <button onClick={this.changeView}>change view</button>
                <button onClick={() => {this.props.changeView('BonusRound')}}>Bonus Round</button>
            </div>
        );
    }
}

export default Enums;