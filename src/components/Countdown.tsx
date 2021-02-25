import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import { BsFillPlayFill, BsX } from "react-icons/bs";

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountDown 
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar ciclo <BsX style={{ fontSize: '1rem', marginLeft: '0.2rem', marginTop: '0.15rem' }} />
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo <BsFillPlayFill style={{ fontSize: '1rem', marginLeft: '0.2rem', marginTop: '0.15rem' }} />
            </button>
          )}
        </>
      )}
    </div>
  );
}