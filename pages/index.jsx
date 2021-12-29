import React from 'react'
import Banner from '../components/banner'
import MainForm from '../components/main-form'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Cards from '../components/cards'
import DiffBlock from '../components/diff-block'
import TrustBlock from '../components/trust-block'
import Footer from '../components/footer'

const Home = () => {
    return (
        <div>
            <Banner>
                <div className={styles.bannerInner}>
                    <div className={styles.left}>
                        <h1>Zabezpieczenia antypoślizgowe</h1>
                        <h2>pomiar współczynnika tarcia i PTV, doczyszczanie, odkamienianie, impregnacja</h2>
                        <div><Link href='/'><a>SPRAWDŹ NASZE USŁUGI</a></Link></div>
                    </div>
                    <MainForm/>
                </div>
            </Banner>
            <Cards/>
            <DiffBlock/>
            <TrustBlock/>
            <Banner>
                <div className={styles.bannerInner}>
                    <div className={styles.center}>
                        <h1>Zamów bezpłatną próbę zabezpieczenia antypoślizgowego!</h1>
                        <h2>Skontaktuj się z nami:</h2>
                        <div><Link href='/'><a>TEL. 22 750 20 66</a></Link></div>
                    </div>
                </div>
            </Banner>
            <Footer/>
            <div className={styles.footerBar}></div>
        </div>
    )
}

export default Home
