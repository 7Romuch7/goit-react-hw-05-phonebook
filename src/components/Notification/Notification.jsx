import PropTypes from 'prop-types';
import style from './Notification.module.css';

export default function Notification({ name = ' ' }) {
      return (<p className={style.message}> {name} already exist!</p>)
}
  
Notification.propTypes = {
    name: PropTypes.string.isRequired,
}