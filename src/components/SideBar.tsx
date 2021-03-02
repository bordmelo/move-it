import Router from 'next/router';

import { FiHome, FiLogOut, FiAward } from "react-icons/fi";

import styles from '../styles/components/SideBar.module.css';

export function SideBar() {
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
          <li className={styles.activeMenu}>
            <FiHome />
          </li>
          <li>
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