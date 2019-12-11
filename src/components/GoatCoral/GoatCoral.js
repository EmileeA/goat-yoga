// the library needs to be a capital P and the varibale needs to be lowercase
// prop-types is the name of the library, and it exports PropTypes which contains all the useful stuff
// so we are importing PropTypes from prop-types
// and then when you use them on a component, the component has a property, just like state or render or componentDidMount. it has one for prop types called propTypes
import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCoral extends React.Component {
  static propTypes = {
    butts: PropTypes.arrayOf(goatShape.goatShape),
    freeGoat: PropTypes.func,
    useGoat: PropTypes.func,
  }

  render() {
    const myGoats = this.props.butts;
    const { freeGoat, useGoat } = this.props;

    // we want this goat array to return some jsx for us
    // getting my goats from props and then mapping over them and returning jsx.
    // jsx is representative of the div. {goatCards} is an array (goat names) of jsx (html in javascript) divs.
    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat} freeGoat={freeGoat} useGoat={useGoat} />);

    return (
        <div className="GoatCoral d-flex flex-wrap">
            {goatCards}
        </div>
    );
  }
}

export default GoatCoral;

// props are whenever you take from a state component and bring it to a child component. A component has state and component is given props.

// changing a prop isn't going to change the state. Props are just a reference to state.
