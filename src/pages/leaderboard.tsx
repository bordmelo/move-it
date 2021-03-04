import { SideBar } from '../components/SideBar';

import Head from 'next/head';

import styles from '../styles/pages/Leaderboard.module.css';

export default function Leaderboard() {
  return (
    <>
      <Head>
        <title>Leaderboard | Move.it</title>
      </Head>
      <SideBar active="leaderboard" />
      <div className={styles.leaderboardContainer}>
        <strong>Leaderboard</strong>

        <div className={styles.userList}>
          <header>
            <span>POSIÇÃO</span>
            <span>USUÁRIO</span>
            <span>DESAFIOS</span>
            <span>EXPERIÊNCIA</span>
          </header>

          <main>
            
          </main>
        </div>
      </div>
    </>
  );
}