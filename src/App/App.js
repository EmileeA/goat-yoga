import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/GoatCoral/GoatCoral';

// this replaces the function App() {
// render is a function
// object oriented languages depend a lot of languages. react leverages it
// function is something that you call and it performs a singular operation
// a class is a little bit more robust than that. it can have multiple
// functions that it calls and has a lot of properities on it.
// react has all these built in features
class App extends React.Component {
// state is the equivilant to the property on the car being the wheels or the make model of the car
  state = {
    goats: [],
  }

  // lifecycle method
  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  // render is called anytime you mounted or anytime you are updating what is in your props
  render() {
    return (
      <div className="App">
        <button className="btn btn-danger">Bootstrap Button</button>
        <GoatCoral butts={this.state.goats} freeGoat={this.freeGoat} />
      </div>
    );
  }
}

export default App;

// think of <GoatCoral /> as it's own self closing HTML element

// butts is a reference to goats

// redocs is state management. Instead of passing everything all the way down I would take my nested child component and....?

// callans best advice, diagram your application and mark all your child and parent components.
