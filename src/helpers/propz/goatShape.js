import PropTypes from 'prop-types';

// we want propTypes to go into the library so .shape is a react method??
const goatShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isBusy: PropTypes.bool.isRequired,
});

export default { goatShape };
