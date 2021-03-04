import Router from 'next/router';

import { FiHome, FiLogOut, FiAward } from "react-icons/fi";

import styles from '../styles/components/SideBar.module.css';

interface SideBarProps {
  active: string;
}

export function SideBar(props: SideBarProps) {
  function handleLogout() {
    Router.push('/login');
  }

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.logo}>
        <img src="/logo-min.svg" alt=""/>
      </div>
      <div className={styles.menuItems}>
        <ul>
          <li className={ props.active === 'home' ? `${styles.activeMenu}` : ''} onClick={() => Router.push('/')} >
            <FiHome />
          </li>
          <li className={ props.active === 'leaderboard' ? `${styles.activeMenu}` : ''} onClick={() => Router.push('/leaderboard')} >
            <FiAward />
          </li>
        </ul>
      </div>

      <div>
        <button onClick={handleLogout}>
          <FiLogOut />
        </button>
      </div>
    </div>
  )
}