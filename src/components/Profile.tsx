import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { IoIosClose } from "react-icons/io";
import Router from 'next/router';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  function handleLogout() {
    Router.push('/login');
  }

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
      <div>
        <button onClick={handleLogout}>
          <IoIosClose />
        </button>
      </div>
    </div>
  );
}