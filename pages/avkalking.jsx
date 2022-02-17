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
import { zamowUsluge, uslugi, checkAllServices, links } from '../constants'
import BottomBaner from '../components/bottom-banner'

const Descaling = () => {

    const imgRef = useRef()

    return (
        <div>
            <Animate elementRef={imgRef} animationName="fadeInUp10"/>
            <AntpslzgBreadcrumb pathArr={[{title: uslugi, href: `/${links.descaling}`}, {title: 'Avkalking'}]}/>
            <Banner backgroundImage='url(/images/plates-flowers.jpg)' withwaves={false} isFadeInLeft10={true}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Avkalking</h1>
                        <p>Kalsiumoppbygging på f.eks. bassengoverflater gjør det nødvendig å bruke sure kjemiske preparater.  Det er også viktig å rengjøre slike overflater periodisk. Send en melding til oss og sjekk hvordan vi kan hjelpe deg.</p>
                        <div className={styles.link}><Link href={`/${links.services}`}><a>{checkAllServices}</a></Link></div>
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left}>
                    <img src="/images/plates.png" className={styles.decorImg} ref={imgRef}/>
                    <h2>Avkalking</h2>
                    <p>&nbsp;</p>
                    <p>Kalsiumoppbygging på f.eks. bassengoverflater gjør det nødvendig å bruke sure kjemiske preparater.  Det er også viktig å rengjøre slike overflater periodisk. Send en melding til oss og hvordan vi kan hjelpe deg.
                    Det kjemiske innholdet av kalkbelegg som danner seg under drift av f.eks. svømmebasseng avhenger av vanntype og -kvalitet, filtersenger som brukes, kjemiske reagenser og deres doser benyttet til vannrensning, samt vannets pH.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Hvorfor oppstår det kalk?</h2>
                    <p>&nbsp;</p>
                    <p>Vann i ledninger og grunnvann bærer kjemiske forbindelser som er lettløselige i vann. Vann, som inneholder karbondioksid, reagerer med komponentene i bergartene som det strømmer gjennom. Når vannet strømmer gjennom jord og berg, blir det forurenset med sure karbonater, oksalater og sulfater, kalsium og magnesium og andre stoffer som forekommer i mindre mengder. Deres konsentrasjon i vannet bestemmer vannets hardhet. Jo større konsentrasjonen er, jo hardere er vannet.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Hvordan oppstår det kalk?</h2>
                    <p>&nbsp;</p>
                    <p>Mineraler som vannet bærer fester seg til overflaten av f.eks. fliser i en svømmebasseng, og fører til dannelse av kalk. Vannet som vanlig brukes i svømmebassenger kan gi avsetning av kalk på ca. 2-3 mm i løpet av året. Det er umulig å fjerne fullstendig mineraler fra vannet i ledninger og bassenger. Filter og vannbehandling kan bare redusere hastigheten på avsetning av kalk i liten grad, men de kan ikke eliminere det helt. Dette er en helt naturlig og uunngåelig prosess som vi må bare akseptere og motvirke.</p>
                    <p>&nbsp;</p>
                    <p>Avkalking har en utrolig porøs struktur som alle slags smuss fester seg til, og selve overflaten er svært absorberende.</p>
                    <p>Sedimentet trenger inn i overflaten og er praktisk talt umulig å fjerne ved tradisjonell rengjøring eller til og med skrubbing. Det løse sedimentet omdannes til en mer kompakt stein som resultat av en rekke prosesser, som kalles for sementering. I det naturlige miljøet fører sementering til dannelse av bergarter.</p>
                    <p>Hjemme eller innenfor industrien er det som regel mulig å fjerne kalk uten inngrep, bare ved hjelp av kjemiske midler.</p>
                    <p>Når problemet med forurensning av f.eks. basseng med kalk blir stort, skal man bruke sure kjemiske preparater. Selvfølgelig skal man være forsiktig ved bruk av disse. Imidlertid er kjemikalier med høy surhet nødvendige for å fjerne tykke steinlag.</p>
                    <p>Det er viktig å huske om at steder som er utsatt for fast kontakt med vann, spesielt med varmt vann, skal regelmessig rengjøres med vann tilsatt et surt kjemisk preparat.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.link}><Link href={`/${links.contact}`}><a>{zamowUsluge}</a></Link></div>
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

export default Descaling
