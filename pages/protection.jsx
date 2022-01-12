import React from 'react'
import Banner from '../components/banner'
import MainForm from '../components/main-form'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import Cards from '../components/cards'
import DiffBlock from '../components/diff-block'
import TrustBlock from '../components/trust-block'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'

const Protection = () => {
    return (
        <div>
            <AntpslzgBreadcrumb pathArr={[{title: 'Usługi', href:'/services'}, {title: 'Zabezpieczenie antypoślizgowe'}]}/>
            <Banner backgroundImage='url(/images/floor.png)' withwaves={false}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Zabezpieczenia antypoślizgowe</h1>
                        <p>Jeśli jesteś odpowiedzialny za przestrzeń publiczną, to także ponosisz odpowiedzialność za bolesne upadki, poślizgnięcia, urazy powstałe jako ich skutek. Uniknij wysokich roszczeń odszkodowawczych i zadbaj o bezpieczeństwo użytkowników. Sprawdź jak wdrożyć zabezpieczenie antypoślizgowe.</p>
                        <div className={styles.link}><Link href='/services'><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div>
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left}>
                    <img src="/images/wet-floor.png" className={styles.decorImg}/>
                    <h2>Zabezpieczenie antypoślizgowe</h2>
                    <p>&nbsp;</p>
                    <p>Usługi zabezpieczenia antypoślizgowego wykonujemy <strong>zgodnie z wytycznymi Instytutu Techniki Budowlanej i Ministerstwa Rozwoju.</strong></p>
                    <p>Jako jedyna w Polsce firma pracujemy w oparciu o własnej produkcji preparaty chemiczne, które pozwalają nam uzyskać najwyższą jakość świadczonych usług.</p>
                    <img src="/images/gray.png"/>
                    <p>&nbsp;</p>
                    <h2>Kiedy należy stosować profesjonalne zabezpieczenia antypoślizgowe?</h2>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>Niezależnie od wieku, kondycji fizycznej czy wykonywanego zawodu. Każdy z nas jest narażony na poślizgnięcia i bolesne upadki.</p>
                    <p>Niedostateczna odporność posadzki na poślizg niesie za sobą ryzyko poważnych urazów, których konsekwencją staje się długotrwałe i kosztowne leczenie oraz wysokie roszczenia odszkodowawcze. Dlatego warto poznać i skorzystać z wszelkich dostępnych środków technicznych i prawnych, by zagwarantować bezpieczeństwo użytkowników danej powierzchni od etapu projektu inwestycji budowlanej, przez odbiór techniczny, po okres użytkowania.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Szukasz skutecznego rozwiązania?</h2>
                    <p>&nbsp;</p>
                    <p>CTS Chemistry jako jedyna polska firma świadczy profesjonalne usługi zabezpieczenia śliskich powierzchni w oparciu o <strong>własną, opatentowaną technologię ZAP</strong>. Wykonujemy profesjonalne pomiary antypoślizgowości i wystawiamy Certyfikat Zgodności przeprowadzonego badania oraz dołączamy wydruk charakterystyki współczynnika tarcia dynamicznego zabezpieczonej powierzchni.</p>
                    <div className={styles.link}><Link href='/contact'><a>ZAMÓW USŁUGĘ &gt;&gt;</a></Link></div>
                </div>
                <div className={styles.right}>
                    <AuxForm/>
                </div>
            </div>
            <Banner backgroundImage="url('/images/feet2.jpg')">
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

export default Protection
