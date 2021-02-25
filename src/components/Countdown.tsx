import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import { IoIosPlay, IoIosCheckmarkCircle, IoIosClose } from "react-icons/io";

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
          Ciclo encerrado <IoIosCheckmarkCircle style={{ marginLeft: '0.5rem', marginTop: '0.1rem', color: '#4cd62b' }} />
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar ciclo <IoIosClose style={{ fontSize: '1.8rem', marginLeft: '0.5rem', marginTop: '0.1rem' }} />
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo <IoIosPlay style={{ marginLeft: '0.5rem', marginTop: '0.1rem' }} />
            </button>
          )}
        </>
      )}
    </div>
  );
}