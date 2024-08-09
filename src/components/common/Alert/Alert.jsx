import React from 'react';

import styles from './Alert.module.css';

export default function Alert({ message }) {
  return <p className={styles.alert}>{message}</p>;
}
