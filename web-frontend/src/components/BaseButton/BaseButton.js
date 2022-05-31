import PropTypes from 'prop-types';
import styles from './BaseButton.module.css';
import { FaGoogle, FaFacebookF, FaPlus } from 'react-icons/fa';

export default function BaseButton({ onClick, title, type, color, icon, children }) {
  return (
    <button
      onClick={onClick || (() => { })}
      type={type || 'button'}
      {...(title == null ? { } : { title })}
      className={`${styles.btn} ${styles[color || 'red']}`}
      style={{ cursor: title == null ? 'pointer' : 'default' }}
    >
      {icon === 'google' && <FaGoogle />}
      {icon === 'facebook' && <FaFacebookF />}
      {icon === 'plus' && <FaPlus />}
      {children}
    </button>
  );
};

BaseButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  color: PropTypes.oneOf(['yellow', 'red', 'blue']),
  icon: PropTypes.oneOf(['google', 'facebook', 'plus']),
  children: PropTypes.string.isRequired
};
