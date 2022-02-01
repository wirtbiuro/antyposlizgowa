import React, { useRef } from 'react'
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
import Animate from '../components/animate'
import { phoneLink, phone } from '../constants'

const Protection = () => {

    const imgRef = useRef()

    return (
        <div>
            <Animate elementRef={imgRef} animationName="fadeInUp10"/>
            <AntpslzgBreadcrumb pathArr={[{title: 'Usługi', href:'/services'}, {title: 'Rengjøring av overflate'}]}/>
            <Banner backgroundImage='url(/images/plates-flowers.jpg)' withwaves={false} isFadeInLeft10={true}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Rengjøring av overflate</h1>
                        <p>Vi fjerner de fleste forurensninger som har oppstått ved langvarig bruk av følgende overflater: keramiske fliser, bassengfliser, naturlig stein, betong og klinker.</p>
                        <div className={styles.link}><Link href='/services'><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div>
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left}>
                    <img src="/images/vacuum-cleaner.png" className={styles.decorImg} ref={imgRef}/>
                    <h2>Når skal man velge en profesjonell rengjøring?</h2>
                    <p>&nbsp;</p>
                    <p>Gulv og fortau ved næringsbygg, helsesentre, idrettssentre, kontorer og til og med private boliger er spesielt utsatt for ulike typer søl. Over tid blir vedvarende smuss mer synlig og vanskelig å fjerne. Vi tilbringer mesteparten av dagene våre inne. Dermed er det viktig å sørge for våre nærmeste omgivelsene ikke bare for å ha det rent, men også trygt for helsen vår.</p>
                    <p>Vi fjerner de fleste forurensninger som har oppstått ved langvarig bruk av følgende overflater: keramiske fliser, bassengfliser, naturlig stein, betong og klinker. Uten risiko for skader eller fargeflekker på den rensende overflaten.</p>
                    <p>Dyprengjøring av gulv gjør at alle overflater ser bedre ut enn noen gang før, det er lettere å rengjøre dem daglig, de slites langsommere og er tryggere for brukerne.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Bestill en profesjonell tjeneste, dersom du vil fjerne følgende fra gulv eller fortau:</h2>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>kalk som har samlet seg med årene</p></li>
                        <li><p>saltavleiring</p></li>
                        <li><p>langvarig fettete smuss</p></li>
                        <li><p>vedlikeholdsbelegg av polymer</p></li>
                        <li><p>gamle såperester</p></li>
                        <li><p>mugg og alger</p></li>
                        <li><p>nye og gamle oljeflekker</p></li>
                    </ul>
                    <p>Vi tar en gratis prøve før gjennomføring av et oppdrag. Du blir sikker på at den planlagte rengjøringen gir ønsket effekt og er trygg for overflaten.</p>
                    <p>&nbsp;</p>
                    <div className={styles.link}><Link href='/contact'><a>ZAMÓW USŁUGĘ &gt;&gt;</a></Link></div>
                </div>
                <div className={styles.right}>
                    <AuxForm/>
                </div>
            </div>
            <Banner backgroundImage="url('/images/feet2.jpg')" isFadeInUp={true}>
                <div className={styles.bannerInner}>
                    <div className={styles.center}>
                        <h1>Bestill et gratis prøve med sklisikring!</h1>
                        <h2>Ta kontakt med oss:</h2>
                        <div><Link href={phoneLink}><a>{phone}</a></Link></div>
                    </div>
                </div>
            </Banner>
            <Footer/>
            <div className={styles.footerBar}></div>
        </div>
    )
}

export default Protection
