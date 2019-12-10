import React from 'react';
import propTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

// render is printToDom
class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: propTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="card">
        <img className="card-img-top" src={goat.imgUrl} alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
          <div className="btn" onClick={this.freeGoatEvent} >Free Me</div>
        </div>
    </div>
    );
  }
}

export default Goat;
