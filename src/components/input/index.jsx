import styles from './input.module.scss';
import classnames from 'classnames';

function Input({ className, handleSubmit, ...props }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        {...props}
        className={classnames(className, styles.input)}
      />
      <button className={styles.submit} onClick={handleSubmit}>
        ▶
      </button>
    </div>
  );
}

export default Input;
