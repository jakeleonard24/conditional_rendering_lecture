import React, { Component } from 'react';

class NextDay extends Component {
    render() {
     var content;
     console.log(this.props.day)
         switch(this.props.day){
            case 'monday': 
              return  content = <button onClick={() => {this.props.changeDay('tuesday')}}>Tuesday</button>;
            case 'tuesday':
              return  content = <button onClick={() => {this.props.changeDay('wednesday')}}>Wednesday</button>;
            case 'wednesday':
              return  content = <button onClick={() => {this.props.changeDay('thursday')}}>Thursday</button>
            case 'thursday' :
              return  content = <button onClick={() => {this.props.changeDay('friday')}}>Friday</button>
            case 'friday':
            return content = <button onClick={() => {this.props.changeView('ShortCircuting')}}>More short circuiting</button>
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default NextDay;