import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import { FiTwitter } from "react-icons/fi";

import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button className={styles.closeButton} type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar"/>
        </button>

        <button className={styles.twitterButton}>
          Compartilhar no Twitter <FiTwitter style={{ marginLeft: '0.5rem' }} />
        </button>
      </div>
    </div>
  );
}