import React from 'react';
import styles from '../page.module.css';
import '../globals.css';

const ProfilePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.headerText}>Perceptron Desktop</h1>
        <h4 className={styles.headerSubText}>
          profile page
        </h4>
      </div>
      <footer className={styles.footer}>
        {'<'}3 with ♥
      </footer>
    </main>
  );
}

export default ProfilePage;