import React from 'react';
import Goat from '../Goat/Goat';

class GoatCoral extends React.Component {
  render() {
    const myGoats = this.props.butts;
    // we want this goat array to return some jsx for us
    // getting my goats from props and then mapping over them and returning jsx.
    // jsx is representative of the div. {goatCards} is an array (goat names) of jsx (html in javascript) divs.

    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat}/>);

    return (
        <div className="goatCoral">
            {goatCards}
        </div>
    );
  }
}

export default GoatCoral;

// props are whenever you take from a state component and bring it to a child component. A component has state and component is given props.
