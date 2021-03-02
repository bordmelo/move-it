import Head from 'next/head';
import Router from 'next/router';

import { IoLogoGithub } from "react-icons/io";
import styles from '../styles/pages/Login.module.css';

export default function Login() {
  function handleLogin() {
    Router.push('/');
  }

  return (
    <div className={styles.background}>
      <div className={styles.loginContainer}>
        <Head>
          <title>Login | Move.it</title>
        </Head>

        <section>
          <div>
            <img src="/background-logo.svg" alt="Logo"/>
          </div>
          <div>
            <img src="/logo.svg " alt=""/>

            <strong>Bem-vindo</strong>
            <div className={styles.githubLogin}>
              <img src="/github.svg" alt="GitHub" />
              <span>
                Faça login com seu Github  
                para começar
              </span>
            </div>

            <button 
              className={styles.loginButton}
              onClick={handleLogin}
            >Entrar</button>
          </div>
        </section>
      </div>
    </div>
  )
}