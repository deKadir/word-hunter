import classnames from 'classnames';
import styles from './box.module.scss';

function Box({ className, ...props }) {
  return <span {...props} className={classnames(className, styles.box)} />;
}

export default Box;
