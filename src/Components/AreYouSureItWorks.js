import React, { Component } from 'react';

class AreYouSureItWorks extends Component {
    render() {
        return (
            <div>
                Yep, definitely works
                <br/>
                {this.props.something}
            </div>
        );
    }
}

export default AreYouSureItWorks;