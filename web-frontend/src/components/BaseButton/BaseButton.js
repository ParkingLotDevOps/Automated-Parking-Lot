import PropTypes from 'prop-types';
import '@fontsource/open-sans/700.css';
import styles from './BaseButton.module.css';

import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

export default function BaseButton({ color, content, icon }) {
  return (
    <button
      className={`${styles.btn} ${styles[color || 'red']}`}
      style={{ marginTop: color === 'blue' ? '-.45rem' : 0 }}
    >
      {icon === 'facebook' && <FaFacebookF />}
      {icon === 'google' && <FaGoogle style={{ marginRight: '.2em' }} />}
      {icon === 'plus' && <FaPlus />}
      {content}
    </button>
  );
}

BaseButton.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['red', 'blue', 'yellow', 'wheat']).isRequired,
  icon: PropTypes.oneOf(['facebook', 'google', 'plus'])
};

// How to use?

// content:
//   - required
//   - any string

// color:
//   - not required (default: red)
//   - blue/yellow/wheet

// icon:
//   - not required (default: none)
//   - facebook/google/plus

// Examples:

// <BaseButton
//   content="Some Text"
// />

// <BaseButton
//   content="Some Text"
//   icon="google"
// />

// <BaseButton
//   content="Some Text"
//   color="yellow"
// />

// <BaseButton
//   content="Some Text"
//   color="blue"
//   icon="facebook"
// />
