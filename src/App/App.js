import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import goatData from '../helpers/data/goatData';

// this replaces the function App() {
// render is a function
// object oriented languages depend a lot of languages. react leverages it
// function is something that yu call and it performs a singular operation
// a class is a little bit more robust than that. it can have multiple functions that it calls and has a lot of properities on it.
// react has all these built in features
class App extends React.Component {
  // state is the equivilant to the property on the car being the wheels or the make model of the car
  state = {
    goats: []
  }

  componentDidMount() {
    const goats = goatData.getGoats();

  }

  render() {
    return (
      <div className="App">
        <button className='btn btn-danger'>HELP ME</button>
      </div>
    );
  }
}
export default App;
