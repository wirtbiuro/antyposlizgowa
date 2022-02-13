import React, { useRef } from 'react'
import Banner from '../components/banner'
import MainForm from '../components/main-form'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import Cards from '../components/cards'
import DiffBlock from '../components/diff-block'
import TrustBlock from '../components/trust-block'
import Footer from '../components/footer'
import Animate from '../components/animate'
import { phone, phoneLink } from '../constants'
import BottomBaner from '../components/bottom-banner'

const Home = () => {

    const bannerLeftRef = useRef()

    return (
        <div className={`${styles.home}`}>
            <Banner>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left}`} ref={bannerLeftRef}>
                        <Animate elementRef={bannerLeftRef} animationName='fadeInLeft10'/>
                        <h1>Sklisikring</h1>
                        <h2>måling av friksjonskoeffisient og PTV, rengjøring, avkalking, impregnering</h2>
                        <div><Link href='/services'><a>Se våre tjenester</a></Link></div>
                    </div>
                    <MainForm/>
                </div>
            </Banner>
            <Cards/>
            <DiffBlock/>
            {/* <TrustBlock/> */}
            <BottomBaner/>
            <Footer/>
            <div className={styles.footerBar}></div>
        </div>
    )
}

export default Home
