import styles from './caption.module.scss';

function Caption(props) {
  return <section className={styles.container} {...props} />;
}

export default Caption;
