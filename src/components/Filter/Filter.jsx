import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export default function Filter({ name, onChangeFilter }) {
  return (
    <div className={styles.containerFilter}>
      <label className={styles.titleFilter}>
        Find contact by name
        <input
          type="text"
          className={styles.inputFilter}
          value={name}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

Filter.defaultProps = {
  value: 'noName',
  number: '123 45 67',
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,

  onChangeFilter: PropTypes.func,
};