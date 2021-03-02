import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Router from 'next/router';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/bordmelo.png" alt="Lucas Melo" />
      <div>
        <strong>Lucas Melo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}