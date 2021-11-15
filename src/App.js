import React, { Component } from 'react';

import Timer from './Timer'

class App extends Component {
// Technically the constructor is the first function called upon instantiating any class in JS
// not just React Components. The constructor has an important role in teh life of a component, as it acts as a perfect
//place to set the initial state of the component.
  //no props being used here, so we can use the shorthand declaration of state
  state = {
    timerIDs: []
  }

  //Your code here:

  // write a componentDidMount method that invokes the EXISTING handleAddTimer class method
componentDidMount() {
  this.handleAddTimer() // here i am invoking the exsting handleAddTimer class method
}


  // No need to modify anything in render or the class methods below
  // Unless, of course, you're curious about how it all works
  render() {

    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>

      </div>
    );
  }

  // returns array of components written in JSX, mapped from this.state.timerIDs
  renderTimers = () => this.state.timerIDs.map(id => {
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />
  })

  // adds a random number for timer ID
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
    }))
  }

  // removeTimer updates state, removing any timer that matches the provided author
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }))
  }


}

export default App;
