import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import {useRouter} from 'next/router'

const Menu = () => {

    const [show, setShow] = useState(false)
    const router = useRouter()

    const isMainClass = (path)=> router.asPath === path

    const onMenuBtn = ()=>{
        setShow(!show)
    }

    return (
        <div className={styles.menu}>
            <div className={styles.logo}><Link href='/'><a>
                <img src='https://antyposlizgowa.com/wp-content/uploads/2021/02/logo1.png'/>
            </a></Link></div>
            <div className={styles.menuBtn} onClick={onMenuBtn}>MENU</div>
            <nav className={show? styles.show: styles.hide}>
                <div className={isMainClass('/') ? styles.main: null}><Link href='/'><a>STRONA GŁÓWNA</a></Link></div>
                <div className={isMainClass('/uslugi') ? styles.main: null}><Link href='/uslugi'><a>USŁUGI</a></Link></div>
                <div className={isMainClass('/realizacje') ? styles.main: null}><Link href='/realizacje'><a>REALIZACJE</a></Link></div>
                <div className={isMainClass('/akty') ? styles.main: null}><Link href='/akty'><a>AKTY PRAWNE</a></Link></div>
                <div className={isMainClass('/cennik') ? styles.main: null}><Link href='/cennik'><a>CENNIK</a></Link></div>
                <div className={isMainClass('/onas') ? styles.main: null}><Link href='/onas'><a>O NAS</a></Link></div>
                <div className={isMainClass('/wiedza') ? styles.main: null}><Link href='/wiedza'><a>WIEDZA </a></Link></div>
                <div className={isMainClass('/kontakt') ? styles.main: null}><Link href='/kontakt'><a>KONTAKT </a></Link></div>
            </nav>
        </div>
    )
}

export default Menu
