import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

function Button({ className, ...props }) {
  return <button {...props} className={classNames(styles.button, className)} />;
}

export default Button;
