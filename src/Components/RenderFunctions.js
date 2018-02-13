import React, { Component } from 'react';

class RenderFunctions extends Component {
    constructor(){
        super()
        this.state = {
            pic: false
        }
    }
    render() {

        var pic = this.state.pic
        function renderPics(){
            if(pic){
                return(
                 <div>
                    <img src={pic}/>
                 </div>
                  )
                } else {
                return(
                <div>
                    <p>No pic</p>
                </div>
                )
        }
        }
        return (
            <div>
                {renderPics()}
                <button onClick={() => {!this.state.pic ? this.setState({pic:'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/180173_10150092554203191_4894431_n.jpg?oh=0f3abe3e5b3878af8fb983f1fa337961&oe=5B08EE68'}) : this.setState({pic: false})}}>{this.state.pic ? 'Remove Photo' : 'Add photo'}</button>
                <button onClick={() => {this.props.changeView('ElementVariables')}}>Element Variables</button>
            </div>
        );
    }
}

export default RenderFunctions;