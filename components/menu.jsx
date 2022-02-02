import React, { useState, useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import {useRouter} from 'next/router'
import {DownOutlined, MenuOutlined} from '@ant-design/icons'


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
            e.stopPropagation()
            setShow(true)
        } else{
            setShowUslugi(false)
        }
    }

    const navClicked = ()=>{
        setShow(false)
    }

    return (
        <div className={styles.menu}>
            <div className={styles.logo}><Link href='/'><a>
                <img src='/images/logo-antyposlizgowa.svg'/>
            </a></Link></div>
            <div className={styles.menuBtn} onClick={onMenuBtn}>
                <span className={styles.title}>MENU</span>
                <MenuOutlined />
            </div>
            <nav className={show? styles.show: styles.hide} onClick={navClicked}>
                <Link href='/'><a>
                    <div className={isMainClass('/') ? styles.main: null}>HJEM</div>
                </a></Link>
                <Link href='/services'><a onClick={uslugiClicked} onMouseLeave={uslugiOut}
                    onMouseOver={uslugiIn}
                >
                    <div 
                        className={`${isMainClass('/services') ? styles.main: null} ${styles.uslugiDiv}`} 
                    >
                        <div className={styles.titleWithArrow}>
                            <div className={styles.title}>
                                TJENESTER
                            </div>
                            <div className={styles.arrow} onClick={arrowClicked} ref={arrowRef}>
                                <DownOutlined />
                            </div>
                        </div>
                            
                        {showUslugi && <div className={styles.uslugi} onMouseLeave={uslugiOut} onMouseOver={uslugiIn}>
                            <Link href='/services'><a>
                                <div className={styles.fake}></div>
                            </a></Link>
                            <Link href='/protection'><a>
                                <div className={`${isMainClass('/protection') ? styles.main: null} ${styles.usluga}`}>
                                    Sklisikring
                                </div>
                            </a></Link>
                            <Link href='/friction-measurement'><a>
                                <div className={`${isMainClass('/friction-measurement') ? styles.main: null} ${styles.usluga}`}>
                                    Måling av friksjonskoeffisient og PTV
                                </div>
                            </a></Link>
                            <Link href='/cleaning'><a>
                                <div className={`${isMainClass('/cleaning') ? styles.main: null} ${styles.usluga}`}>
                                    Rengjøring av overflate
                                </div>
                            </a></Link>
                            <Link href='/descaling'><a>
                                <div className={`${isMainClass('/descaling') ? styles.main: null} ${styles.usluga}`}>
                                    Avkalking
                                </div>
                            </a></Link>
                            <Link href='/impregnation'><a>
                                <div className={`${isMainClass('/impregnation') ? styles.main: null} ${styles.usluga}`}>
                                    Impregnering
                                </div>
                            </a></Link>
                            <Link href='/products'><a>
                                <div className={`${isMainClass('/products') ? styles.main: null} ${styles.usluga}`}>
                                    Våre produkter
                                </div>
                            </a></Link>
                        </div>}
                    </div>
                </a></Link>
            
                <Link href='/about-us'><a>
                    <div className={isMainClass('/about-us') ? styles.main: null}>OM OSS</div>
                </a></Link>
                <Link href='/contact'><a>
                    <div className={isMainClass('/contact') ? styles.main: null}>KONTAKT</div>
                </a></Link>
            </nav>
        </div>
    )
}

export default Menu
