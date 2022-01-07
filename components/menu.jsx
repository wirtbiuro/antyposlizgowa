import React, { useState, useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import {useRouter} from 'next/router'
import {DownOutlined} from '@ant-design/icons'


const Menu = () => {

    const [show, setShow] = useState(false)
    const [showUslugi, setShowUslugi] = useState(false)

    const arrowRef = useRef()
    
    const router = useRouter()

    const isMainClass = (path)=> router.asPath === path

    const onMenuBtn = ()=>{
        setShow(!show)
    }

    const uslugiIn =()=>{
        const width = document.documentElement.clientWidth
        if(width <= 1170)
            return
        setShowUslugi(true)
    }

    const uslugiOut =()=>{
        const width = document.documentElement.clientWidth
        if(width <= 1170)
            return
        setShowUslugi(false)
    }

    const arrowClicked =(e)=>{
        // e.stopPropagation()
        setShowUslugi(!showUslugi)
    }

    const uslugiClicked =(e)=>{
        // e.preventDefault()
        console.log('uslugi clicked target value', e.target)
        console.log('uslugi clicked $arrow', arrowRef.current)
        const width = document.documentElement.clientWidth
        if(arrowRef.current.contains(e.target) && width <= 1170){
            console.log('contains')
            e.preventDefault()
        }
    }

    return (
        <div className={styles.menu}>
            <div className={styles.logo}><Link href='/'><a>
                <img src='https://antyposlizgowa.com/wp-content/uploads/2021/02/logo1.png'/>
            </a></Link></div>
            <div className={styles.menuBtn} onClick={onMenuBtn}>MENU</div>
            <nav className={show? styles.show: styles.hide}>
                <Link href='/'><a>
                    <div className={isMainClass('/') ? styles.main: null}>STRONA GŁÓWNA</div>
                </a></Link>
                <Link href='/uslugi'><a onClick={uslugiClicked} onMouseLeave={uslugiOut}
                    onMouseOver={uslugiIn}
                >
                    <div 
                        className={`${isMainClass('/uslugi') ? styles.main: null} ${styles.uslugiDiv}`} 
                    >
                        <div className={styles.titleWithArrow}>
                            <div className={styles.title}>
                                USŁUGI
                            </div>
                            <div className={styles.arrow} onClick={arrowClicked} ref={arrowRef}>
                                <DownOutlined />
                            </div>
                        </div>
                            
                        {showUslugi && <div className={styles.uslugi} onMouseLeave={uslugiOut} onMouseOver={uslugiIn}>
                            <Link href='/uslugi'><a>
                                <div className={styles.fake}></div>
                            </a></Link>
                            <Link href='/protection'><a>
                                <div className={`${isMainClass('/protection') ? styles.main: null} ${styles.usluga}`}>
                                    Zabezpieczenia antypoślizgowe
                                </div>
                            </a></Link>
                            <Link href='/friction-measurement'><a>
                                <div className={`${isMainClass('/friction-measurement') ? styles.main: null} ${styles.usluga}`}>
                                    Pomiar współczynnika tarcia i PTV
                                </div>
                            </a></Link>
                            <Link href='/cleaning'><a>
                                <div className={`${isMainClass('/cleaning') ? styles.main: null} ${styles.usluga}`}>
                                    Doczyszczanie powierzchni
                                </div>
                            </a></Link>
                            <Link href='/ff'><a>
                                <div className={`${isMainClass('/ff') ? styles.main: null} ${styles.usluga}`}>
                                    Odkamienianie
                                </div>
                            </a></Link>
                            <Link href='/ff'><a>
                                <div className={`${isMainClass('/ff') ? styles.main: null} ${styles.usluga}`}>
                                    Impregnacja
                                </div>
                            </a></Link>
                            <Link href='/ff'><a>
                                <div className={`${isMainClass('/ff') ? styles.main: null} ${styles.usluga}`}>
                                    Nasze produkty
                                </div>
                            </a></Link>
                        </div>}
                    </div>
                </a></Link>
            
                <Link href='/onas'><a>
                    <div className={isMainClass('/onas') ? styles.main: null}>O NAS</div>
                </a></Link>
                <Link href='/kontakt'><a>
                    <div className={isMainClass('/kontakt') ? styles.main: null}>KONTAKT</div>
                </a></Link>
            </nav>
        </div>
    )
}

export default Menu
