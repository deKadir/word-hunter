import React from 'react';
import styles from './option.module.scss';
function Option({ correct, choiceIndex, answer, ...props }) {
  let status = 'idle';
  const statusStyles = {
    idle: {
      backgroundColor: '#f5f5f5',
      color: 'black',
    },
    correct: {
      backgroundColor: 'green',
      color: '#f5f5f5',
    },
    wrong: {
      backgroundColor: 'red',
      color: '#f5f5f5',
    },
  };

  if (answer !== -1) {
    if (correct === choiceIndex) status = 'correct';

    if (correct !== choiceIndex && answer === choiceIndex) status = 'wrong';
  }

  return (
    <div {...props} style={statusStyles[status]} className={styles.option} />
  );
}

export default Option;
