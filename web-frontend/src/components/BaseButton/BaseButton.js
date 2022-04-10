import PropTypes from 'prop-types';
import styles from './BaseButton.module.css';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

export default function BaseButton({ onClick, type, color, icon, children }) {
  return (
    <button
      onClick={onClick || (() => { })}
      type={type || 'button'}
      className={`${styles.btn} ${styles[color || 'red']}`}
    >
      {icon === 'google' && <FaGoogle />}
      {icon === 'facebook' && <FaFacebookF />}
      {children}
    </button>
  );
};

BaseButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  color: PropTypes.oneOf(['yellow', 'red', 'blue']).isRequired,
  icon: PropTypes.oneOf(['google', 'facebook']),
  children: PropTypes.string.isRequired
};
