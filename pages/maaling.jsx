import React, { useRef } from 'react'
import Banner from '../components/banner'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'
import Animate from '../components/animate'
import { phoneLink, phone, checkAllServices, zamowUsluge, uslugi, links } from '../constants'

const FrictionMeasurement = () => {

    const leftRef = useRef()
    const imgRef = useRef()

    return (
        <div className={styles.frictionMeasurement}>
            <Animate elementRef={imgRef} animationName="fadeInUp10"/>
            {/* <AntpslzgBreadcrumb pathArr={[{title: uslugi, href:`/${links.services}`}, {title: 'Måling av friksjonskoeffisient og PTV'}]}/> */}
            <AntpslzgBreadcrumb pathArr={[{title: uslugi, href:`/${links.services}`}, {title: links.frictionMeasurement}]}/>
            <Banner backgroundImage='url(/images/stairs.png)' withwaves={false} isFadeInLeft10={true}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Måling av friksjonskoeffisient og PTV</h1>
                        <p>Vi utfører PTV-måling av gulvets sklisikkerhet og vi utsteder et sertifikat som bekrefter målingens resultater.</p>
                        {/* <p>Wykonamy pomiar antypoślizgowości Twojej powierzchni według wytycznych Instytutu Techniki Budowlanej. Następnie otrzymasz Certyfikat Zgodności przeprowadzonego badania.</p> */}
                        <div className={styles.link}><Link href={`/${links.services}`}><a>{checkAllServices}</a></Link></div>
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left} ref={leftRef}>
                    <img src="/images/measurement.png" className={styles.decorImg} ref={imgRef}/>
                    <h2>Hvorfor er det viktig å teste gulvet for sklisikkerhet?</h2>
                    <p>&nbsp;</p>
                    <p>Alle keramiske fliser mister sin opprinnelige sklisikkerhet med tiden og på grunn av bruksintensitet. Derfor skal man teste gulvet for sklisikkerhet med jevne mellomrom (ikke sjeldnere enn en gang i en periode på 3 år), i forbindelse med bygningens tekniske kontroll.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Hva er gjeldende krav vedrørende sklisikring? Hvem pålegger oss måling av gulvenes sklisikkerhet?</h2>
                    <p>&nbsp;</p>
                    <p>Arkitekter, tilsynsmyndigheter, byggherrer, eiendomsforvaltere ved næringsbygg eller boligbygg vil være sikre på at gulv i byggene de har ansvar for er trygge og i samsvar med gjeldende lovbestemmelser, retningslinjer og veiledning, de undersøker regelmessig sklisikkerheten til eksisterende og nye gulv.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Hvordan måles det gulvets sklisikkerhet?</h2>
                    <p>&nbsp;</p>
                    <p>Av praktiske grunner benyttes det en mobil verifikasjonsmetode får måling av sklisikkerhet, dette er <strong>måling av friksjon.</strong> Målingen gjennomføres ved hjelp av et pendelapparat. Metoden er utviklet i England, og derfor heter det PTV (Pendulum Test Value). PTV-måleverdier danner grunnlag for klassifisering av gulv med hensyn til sklirisiko. </p>
                    {/* <p>Ze względów praktycznych, najczęściej takich pomiarów dokonuje się przy użyciu dwóch mobilnych metod :</p>
                    <p>1. Metodą weryfikacji odporności posadzki na poślizg jest <strong>badanie oporu poślizgu</strong>. Badanie to wykonujemy przy użyciu przyrządu zwanego wahadłem angielskim, stąd badanie w skrócie określane jest jako PTV (Pendulum Test Value). Metodę badania opisano szczegółowo w normie PN-EN 13036-4:2011.</p> */}
                    <video 
                        playsInline={true} 
                        width="100%" 
                        style={{"objectFit": "cover"}} 
                        autoPlay={true} 
                        muted={true} 
                        loop={true} 
                        preload="auto" 
                        controls="1"
                    >
                        <source src="https://antyposlizgowa.com/wp-content/uploads/2021/03/Pomiar_wahadlem-angielskim.mov" type="video/mp4" />
                        Sorry, your browser does not support embedded videos.
                    </video>
                    <p>Klassifiseringen er oppgitt i tabellen nedenfor.</p>
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td ><strong>Sklisikkerhet, PTV</strong></td>
                                <td ><strong>Klassifisering</strong></td>
                            </tr>
                            <tr>
                                <td >0 – 24</td>
                                <td >Stor sklirisiko</td>
                            </tr>
                            <tr>
                                <td >25 – 35</td>
                                <td >Modsrat sklirisiko</td>
                            </tr>
                            <tr>
                                <td >≥ 36</td>
                                <td >Lav sklirisiko</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>&nbsp;</p>
                    {/* <p>2. Drugą metodą badania odporności posadzki na poślizg jest <strong>pomiar dynamicznego współczynnika tarcia µ według normy DIN 51131.</strong></p>
                    <p>Test wykonywany jest przez nas <strong>za pomocą urządzenia FSC 2011 lub GMG 200</strong>. Metoda ta została wykorzystana już w roku 1995, do porównania otrzymanych wyników pomiarów dynamicznego współczynnika tarcia µ, do parametrów antypoślizgowości R otrzymanych przy badaniu wg normy DIN 51130 oraz parametrów A/B/C otrzymanych przy badaniu wg normy DIN 51097.</p> */}
                    <video 
                        playsInline={true} 
                        width="100%" 
                        style={{"objectFit": "cover"}} 
                        autoPlay={true} 
                        muted={true} 
                        loop={true} 
                        preload="auto" 
                        controls="1"
                    >
                        <source src="https://antyposlizgowa.com/wp-content/uploads/2021/04/FSC_2011.mp4" type="video/mp4"/>
                        Sorry, your browser does not support embedded videos.
                    </video>
                    <p>&nbsp;</p>
                    <h2>Hvordan fungerer vi?</h2>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>Vi utfører målinger alltid i henhold til retningslinjer som er oppgitt i standarden, samt vi benytter føtter som er tilpasset målingene, både på en tørr og en våt overflate.</p></li>
                        <li><p>Vi utarbeider en rapport vedrørende sklisikkerhet etter hver enkel undersøkelse.</p></li>
                        <li><p>En grundig undersøkelse er grunnlaget for å kunne bekrefte parametrene til overflaten som testes.</p></li>
                    </ul>
                    <img src="/images/measurement-2.png"/>
                    <p>&nbsp;</p>
                    <h2>Hva skal du vite før du bestemmer deg for en profesjonell måling av sklisikkerhet?</h2>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>Alle fliser mister sin opprinnelige sklisikkerhet med tiden og på grunn av bruksintensitet.</p></li>
                        <li><p>Gulvets sklisikkerhet under reelle forhold avhenger bl. a. av:
                            – type gulvbelegg, f.eks. glaserte fliser, polert granitt, harpiks, PVC,
                            – type såle,
                            – type smøremiddel, f.eks. vann, søle, juice, olje, ketchup, sennep, suppe, sauser,
                            – trykkkraft, det vil se vekten vår.
                        </p></li>
                        <li><p>Avhengig av gulvets plassering, måten det brukes på, yrket eller alderen til personer som bruker det, er det nødvendig med en profesjonell, individuell tilnærming før målingen gjennomføres.</p></li>
                        <li><p>Et tørt og et vått gulvbelegg har forskjellig sklisikkerhet.</p></li>
                        <li><p>PTV-verdien eller den dynamiske friksjonskoeffisienten til keramiske fliser kan vesentlig variere i sklirisikogrupper R eller A/B/C.</p></li>
                        <li><p>Når de bestiller en måling av sklisikkerheten til gulvet ditt, velg alltid en bedrift med erfaring og som er godt etablert på markedet.</p></li>
                        <li><p>Bestill målingen i en bedrift som bruker nødvendige måleapparater som garanterer en pålitelig måling i henhold til gjeldende standarder.</p></li>
                        <li><p>Sørg for at målingen utføres av en person som har erfaring med bruk av måleapparatet.</p></li>
                    </ul>
                    <p>&nbsp;</p>

                    <div className={styles.link}><Link href={`/${links.contact}`}><a>{zamowUsluge}</a></Link></div>
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

export default FrictionMeasurement
