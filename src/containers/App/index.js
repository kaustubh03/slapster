import React from 'react';
import styles from './index.module.scss';
import AppContent from '../../components/AppContent';

function App() {
  return (
    <div className={styles.parentContainer}>
      <AppContent />
    </div>
  );
}

export default App;
