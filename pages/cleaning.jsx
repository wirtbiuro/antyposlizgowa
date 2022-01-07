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

const Protection = () => {
    return (
        <div>
            <Banner backgroundImage='url(/images/plates-flowers.jpg)' withwaves={false}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Doczyszczanie powierzchni</h1>
                        <p>Usuwamy większość zanieczyszczeń powstałych z długoletniego użytkowania powierzchni takich jak: płytki ceramiczne, ceramika basenowa, kamień naturalny, beton i klinkier.</p>
                        <div className={styles.link}><Link href='/'><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div>
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left}>
                    <img src="/images/vacuum-cleaner.png" className={styles.decorImg}/>
                    <h2>Kiedy zdecydować się na specjalistyczną usługę doczyszczania?</h2>
                    <p>&nbsp;</p>
                    <p>W budynkach użyteczności publicznej, centrach medycznych, ośrodkach sportowych, w biurach a nawet prywatnych domach posadzki i chodniki są szczególnie narażone na różnego rodzaju zabrudzenia. Z czasem trwałe zabrudzenia stają się bardziej widoczne i trudne do usunięcia. W pomieszczeniach spędzamy znaczną część naszego dnia. Warto, więc odpowiednio zadbać o najbliższe otoczenie, aby nie tylko długo wyglądało czysto, ale również było bezpieczne dla naszego zdrowia.</p>
                    <p>Usuwamy większość zanieczyszczeń powstałych z długoletniego użytkowania powierzchni takich jak: płytki ceramiczne, ceramika basenowa, kamień naturalny, beton i klinkier. Bez ryzyka uszkodzenia lub przebarwień czyszczonej powierzchni.</p>
                    <p>Usługa głębokiego doczyszczenia posadzek sprawiają, że każda powierzchnia wygląda lepiej niż kiedykolwiek, łatwiej podlega codziennemu czyszczeniu, wolniej ulega eksploatacji i jest bezpieczniejsza dla użytkowników.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Zamów specjalistyczną usługę, jeśli chcesz usunąć z posadzki lub chodnika:</h2>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>wieloletnie osady kamienne</p></li>
                        <li><p>złogi i wykwity solne</p></li>
                        <li><p>wieloletnie tłuste zabrudzenia</p></li>
                        <li><p>polimerowe powłoki konserwacyjne</p></li>
                        <li><p>stare osady z mydła</p></li>
                        <li><p>wykwity pleśni i glonów</p></li>
                        <li><p>świeże i stare plamy olejowe</p></li>
                    </ul>
                    <p>Przed realizacją zlecenia zawsze wykonujemy bezpłatną próbę. Będziesz mieć pewność, że planowane czyszczenie będzie skuteczne i bezpieczne dla materiału.</p>
                    <p>&nbsp;</p>
                    <div className={styles.link}><Link href='/'><a>ZAMÓW USŁUGĘ &gt;&gt;</a></Link></div>
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
