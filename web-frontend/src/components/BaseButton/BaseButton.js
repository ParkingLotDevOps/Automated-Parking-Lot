import PropTypes from 'prop-types';
import styles from './BaseButton.module.css';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

export default function BaseButton({ color, icon, children }) {
  return (
    <button className={`${styles.btn} ${styles[color || 'red']}`}>
      {icon === 'google' && <FaGoogle />}
      {icon === 'facebook' && <FaFacebookF />}
      {children}
    </button>
  );
};

BaseButton.propTypes = {
  color: PropTypes.oneOf(['yellow', 'red', 'blue']).isRequired,
  icon: PropTypes.oneOf(['google', 'facebook']),
  children: PropTypes.string.isRequired
};
