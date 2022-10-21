import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Header() {
  return (<>
    <Head>
        <title>Projeto React - Trabalho em Grupo</title>
        <meta name="description" content="Objetivo é desmembrar este arquivo em vários componentes" />
        <link rel="icon" href="/favicon.ico" />
    </Head>   
            <h1 className={styles.title}>
            Bem vindo ao projeto em grupo!
          </h1>
          <p className={styles.description}>
            Agora analisem o arquivo index.tsx na pasta pages
          </p>
          </>
  )
}
