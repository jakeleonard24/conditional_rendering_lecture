import React, { Component } from 'react';

class ShortCircuting extends Component {
    constructor(){
        super()
            this.state = {
                view: 'loading',
            }
        
        
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        setTimeout(() => {
            this.setState({view: 'content'})
        }, 2000)
    }
    render() {
        return (
            <div>
                {this.state.view === 'loading' && <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' />}
                {this.state.view === 'content' && <img src='https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/1000998_10200952898457364_1567266983_n.jpg?oh=9a5e2680a3b7bfa30472c5c76537a6fb&oe=5B086032' />}
                <button onClick={() => {this.props.changeView('enums')}}>Enums</button>
            </div>
        );
    }
}

export default ShortCircuting;