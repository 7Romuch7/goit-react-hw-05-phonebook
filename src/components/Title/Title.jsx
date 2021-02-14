import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import logoAppear from './Title.module.css';
import styles from './Title.module.css';

const Title = ({ title }) => (
    <CSSTransition in={true} appear={true} timeout={500} classNames={styles}>
        <h1 className={styles.title}>{title}</h1>
    </CSSTransition>
);

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
