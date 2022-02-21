import React from 'react'
import Banner from '../components/banner'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'
import { uslugi, links } from '../constants'
import BottomBaner from '../components/bottom-banner'

const Products = () => {
    return (
        <div className={styles.frictionMeasurement}>
            {/* <AntpslzgBreadcrumb pathArr={[{title: uslugi, href: `/${links.services}`}, {title: 'Våre produkter'}]}/> */}
            <AntpslzgBreadcrumb pathArr={[{title: uslugi, href: `/${links.services}`}, {title: links.products}]}/>
            <Banner 
                backgroundImage='linear-gradient(180deg, #ffffff 0%,rgba(255,255,255,0) 100%), url(/images/products.png)' 
                withwaves={false}
                backgroundPosition="center bottom"
                isFadeInLeft10={true}
            >
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Våre produkter</h1>
                        <p>Vi tilbyr profesjonelle tjenester innen sklisikring, en grundig rengjøring, avkalking, impregnering.</p>
                        {/* <div className={styles.link}><Link href={`/${links.services}`}><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div> */}
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left}>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Våre produkter:</h2>
                    <p>&nbsp;</p>
                    <ul>
                        {/* <li><p>Har PZH-godkjenning.</p></li> */}
                        <li><p>De er trygge for mennesker og miljøvennlige.</p></li>
                        <li><p>De skader ikke underlaget.</p></li>
                        <li><p>De er lett å håndtere.</p></li>
                        <li><p>De kan brukes utvendig og innvendig.</p></li>
                        <li><p>De kan brukes på nye og gamle overflater.</p></li>
                        <li><p>De bidrar til desinfeksjon av overflater.</p></li>
                    </ul>
                    <img src="/images/spotless-clean.png" className={styles.decorImg}/>
                    <h2>Produkter innen sklisikring:</h2>
                    <p>&nbsp;</p>
                    <p>
                        Preparater basert på vann, beregnet for sklisikring ute og inne, på gamle og nye overflater.
                        <br/>
                        De bevarer underlagets utseende. Peraparatene er beregnet for sikring av keramiske, glaserte og polerte fliser, klinker, gres, terrakotta, samt granitt og genis.</p>
                    <img src="/images/anty-slip-treatment.png"/>
                    <h2>Produkter innen rengjøring:</h2>
                    <p>&nbsp;</p>
                    <p>Vannbaserte preparater beregnet for fjerning av veldig vanskelig, gammelt smuss, samt enkelte flekker. Profesjonalne, wysoko skoncentrowane produkty gwarantują 100% skuteczność działania bez ryzyka zmiany koloru powierzchni lub powstania przebarwień. Preparater er beregnet for fjerning av veldig sterkt mineralsk eller organisk smuss.</p>
                    <img src="/images/exellent-protection.png"/>
                    <h2>Produkter innen vannbasert impregnering:</h2>
                    <p>&nbsp;</p>
                    <p>Helt økologiske preparater utviklet med grunnlag i organiske silisiumforbindelser. De øker den impregnerte overflatens motstandsdyktighet mot smuss, forekomst og utvikling av biologisk forurensning. Odporne na alkalia i działanie promieni UV, bezrozpuszczalnikowe.</p>
                    <p>&nbsp;</p>
                    <h2>Produkter innen løsemiddelfri impregnering:</h2>
                    <p>&nbsp;</p>
                    <p>Impregnering beregnet for underlag av ikke-absorberende materialer. De beskytter effektivt mot smuss og ikke gjør overflaten glattere. De lar bevare den opprinnelige fargen på naturstein.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.link}><Link href={`/${links.contact}#form`} target="_blank">
                        <a>Bestill produkter &gt;&gt;</a>
                    </Link></div>
                </div>
                <div className={styles.right}>
                    <AuxForm/>
                </div>
            </div>
            <BottomBaner/>
            <Footer/>
            <div className={styles.footerBar}></div>
        </div>
    )
}

export default Products
