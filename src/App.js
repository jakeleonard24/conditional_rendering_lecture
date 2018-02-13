import React, { Component } from 'react';
import Methods from './Components/Methods';
import RenderFunctions from './Components/RenderFunctions';
import ElementVariables from './Components/ElementVariables';
import ShortCircuting from './Components/ShortCircuting';
import Enums from './Components/Enums';
import BonusRound from './Components/BonusRound';


class App extends Component {
  constructor(){
    super()
    this.state = {
      view:'Methods'
    }

    this.changeView = this.changeView.bind(this)
  }

  changeView(view){
    this.setState({
      view,
    })
  }
  render() {
    return (
      <div>
       
        {this.state.view === 'Methods' ? <Methods changeView={this.changeView} /> 
        : this.state.view === 'RenderFunctions' ? <RenderFunctions changeView={this.changeView} />
        : this.state.view === 'ElementVariables' ? <ElementVariables changeView={this.changeView} />
        : this.state.view === 'ShortCircuting' ? <ShortCircuting changeView={this.changeView} />
        : this.state.view === 'enums' ? <Enums changeView={this.changeView} />
        : this.state.view === 'BonusRound' ? <BonusRound /> 
        : 'Component not found :('} 
      </div> 
    );
  }
}

export default App;
