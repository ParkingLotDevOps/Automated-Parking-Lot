import './BaseButton.css';
import PropTypes from 'prop-types';

import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const BaseIcon = (props) => {
  if (props.type === 'facebook') return <FaFacebookF />;
  if (props.type === 'google') return <FaGoogle />;
  if (props.type === 'plus') return <FaPlus />;
  return '';
};

export const BaseButton = (props) => {
  const color = props.color === undefined ? 'red' : props.color;
  const content = props.content;
  const icon = props.icon;

  return (
    <button className={`btn ${color}`}>
      <BaseIcon type={icon}></BaseIcon> {content}
    </button>
  );
};

BaseButton.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['blue', 'yellow', 'wheet']),
  icon: PropTypes.oneOf(['facebook', 'google', 'plus'])
};

// how to use ?

// content:
//    - required
//    - any string

// color:
//   - not required (default: red)
//   - blue/yellow/wheet

// icon:
//   - not required (default: none)
//   - facebook/google/plus

// Examples:

// <BaseButton
//  content="Some Text"
// ></BaseButton>

// <BaseButton
//  content="Some Text"
//  icon="google"
// ></BaseButton>

// <BaseButton
//  content="Some Text"
//  color="yellow"
// ></BaseButton>

// <BaseButton
//  content="Some Text"
//  color="blue"
//  icon="facebook"
// ></BaseButton>
