import React from 'react'
import Banner from '../components/banner'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'

const Products = () => {
    return (
        <div className={styles.frictionMeasurement}>
            <AntpslzgBreadcrumb pathArr={[{title: 'Usługi', href:'/services'}, {title: 'Nasze produkty'}]}/>
            <Banner backgroundImage='url(/images/products.png)' withwaves={false}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Nasze produkty</h1>
                        <p>Świadczymy specjalistyczne usługi z zakresu zabezpieczenia antypoślizgowego, gruntownego doczyszczania, odkamieniania, impregnacji.</p>
                        {/* <div className={styles.link}><Link href='/services'><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div> */}
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left}>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Nasze produkty:</h2>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>Posiadają atest PZH.</p></li>
                        <li><p>Są bezpieczne dla ludzi i środowiska.</p></li>
                        <li><p>Nie niszczą podłoża.</p></li>
                        <li><p>Można je stosować wewnątrz i na zewnątrz budynku</p></li>
                        <li><p>Można je stosować na starych i nowych powierzchniach</p></li>
                        <li><p>Wspomagają dezynfekcję powierzchni.</p></li>
                    </ul>
                    <img src="/images/products-2.png" className={styles.decorImg}/>
                    <h2>Produkty z kategorii antypoślizg:</h2>
                    <p>&nbsp;</p>
                    <p>
                        Preparaty na bazie wody, przeznaczone do wykonania zabezpieczenia antypoślizgowego zarówno na zewnątrz, jak i wewnątrz budynków, na starych i nowych powierzchniach.
                        <br/>
                        Zachowują estetykę podłoża. Preparaty przeznaczone są do zabezpieczenia płytek ceramicznych, szkliwionych i polerowanych, z klinkieru, gresu, terakoty oraz granitu i gnejsu.
                    </p>
                    <img src="/images/products-3.png"/>
                    <h2>Produkty z kategorii zmywacze:</h2>
                    <p>&nbsp;</p>
                    <p>Wodne preparaty do usuwania bardzo trudnych, starych zabrudzeń oraz punktowego odplamiania. Profesjonalne, wysoko skoncentrowane produkty gwarantują 100% skuteczność działania bez ryzyka zmiany koloru powierzchni lub powstania przebarwień. Preparaty przeznaczone są do usuwania bardzo silnych zabrudzeń pochodzenia mineralnego oraz organicznego.</p>
                    <img src="/images/products-4.png"/>
                    <h2>Produkty z kategorii impregnaty wodne:</h2>
                    <p>&nbsp;</p>
                    <p>Całkowicie ekologiczne preparaty wykonane na bazie związków krzemoorganicznych. Zwiększają odporność zaimpregnowanej powierzchni na zabrudzenia, wykwity i rozwój skażeń́ biologicznych. Odporne na alkalia i działanie promieni UV, bezrozpuszczalnikowe.</p>
                    <p>&nbsp;</p>
                    <h2>Produkty z kategorii impregnaty rozpuszczalnikowe:</h2>
                    <p>&nbsp;</p>
                    <p>Impregnaty przeznaczone do podłoży z materiałów nienasiąkliwych. Skutecznie zabezpieczają przed zabrudzeniami i nie zwiększają śliskości podłoża. Pozwalają zachować oryginalny kolor naturalnego kamienia.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.link}><Link href='/'><a>KUP PRODUKTY &gt;&gt;</a></Link></div>
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

export default Products
