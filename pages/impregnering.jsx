import React, { useRef } from 'react'
import Banner from '../components/banner'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'
import Animate from '../components/animate'
import { uslugi, checkAllServices, zamowUsluge, links } from '../constants'
import BottomBaner from '../components/bottom-banner'

const Impregnation = () => {

    const imgRef = useRef()
    const selectionRef = useRef()

    return (
        <div className={styles.frictionMeasurement}>
            <Animate elementRef={imgRef} animationName="fadeInUp10"/>
            <Animate elementRef={selectionRef} animationName="fadeInUp10"/>
            <AntpslzgBreadcrumb pathArr={[{title: uslugi, href:`/${links.services}`}, {title: 'Impregnering'}]}/>
            <Banner backgroundImage='url(/images/gray-plates.jpg)' withwaves={false} isFadeInLeft10={true}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Impregnering</h1>
                        <p>Impregnering beskytter overflaten effektivt mot vannabsorpsjon, fete flekker eller andre stoffer. Takket være denne kan smuss enkelt fjernes og materialet forblir uskadet.</p>
                        <div className={styles.link}><Link href={`/${links.services}`}><a>{checkAllServices}</a></Link></div>
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left}>
                    <img src="/images/drops.png" className={styles.decorImg} ref={imgRef}/>
                    <p>&nbsp;</p>
                    <h2>Hvilke overflater lønner det seg å impregnere og hvorfor?</h2>
                    <p>&nbsp;</p>
                    <p>Terrasser og balkonger, fasader, trapper, oppkjørsler, murer eller elementer utført av naturstein, murstein, gres, klinker, marmor eller granitt - alle disse overflatene hjemme eller i offentlige bygninger brukes stadig og de er utsatt for or skadelig påvirkning av ytre faktorer. Med tiden blir overflater som ikke er beskyttet fast tilsølt og de elder raskere.</p>
                    <p>En godt tilpasset impregnering utgjør en effektiv beskyttelse som forhindrer absorpsjon av vann og fete flekker (olje, fett, smog, mat, kosmetika, såpe o.l.). Resultatet er at smuss forblir på steinens overflate, og det ikke trenger inn, derfor er det lett å fjerne det.</p>
                    <img src="/images/drops-2.png"/>
                    <p>&nbsp;</p>
                    <h2>Preparat av høy kvalitet som er godt tilpasset underlaget:</h2>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>styrker dets struktur,</p></li>
                        <li><p>sikrer mot opptak av fukt,</p></li>
                        <li><p>eliminerer støv,</p></li>
                        <li><p>øker motstanden mot slitasje,</p></li>
                        <li><p>forebygger opptak av forurensninger,</p></li>
                        <li><p>forebygger mosevekst,</p></li>
                        <li><p>forebygger misfarging,</p></li>
                        <li><p>gjør rengjøring lettere,</p></li>
                        <li><p>forbedrer utseende,</p></li>
                        <li><p>kan styrke fargen eller gi glans.</p></li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
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
                        <source src="https://antyposlizgowa.com/wp-content/uploads/2021/04/IMG_3058.mov" type="video/mp4" />
                        Sorry, your browser does not support embedded videos.
                    </video>
                    <p>&nbsp;</p>
                    <h2>Ved valg av et riktig kjemisk middel til impregnering skal det tas hensyn til at impregneringen:</h2>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>ikke forårsaker gulning av den beskyttede overflaten,</p></li>
                        <li><p>ikke gjør overflaten glattere,</p></li>
                        <li><p>er permanent,</p></li>
                        <li><p>er lett å påføre,</p></li>
                        <li><p>er miljøvennlig,</p></li>
                        <li><p>er  motstandsdyktig mot alkalier,</p></li>
                        <li><p>er  motstandsdyktig mot UV-stråling.</p></li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.selection} ref={selectionRef}>
                        <ul>
                            <li><p>Vi anbefaler bruk av impregnering på nye og gamle overflater, både innvendig og utvendig.</p></li>
                            <li><p>Beskyttelse av nye, rene overflater vil betydelig forlenge tiden de ser rent og fint ut, og vil lette deres daglige vedlikehold.</p></li>
                            <li><p>Det er spesielt gamle overflater etter en dyp rengjøring som skal impregneres, denne behandlingen vil styrke fargen eller gjenopprette glansen til den beskyttede overflaten.</p></li>
                            <li><p>Firmaet Dyktighandverker AS bruker økologiske preparater som er trygge for mennesker og miljøvennlige, derfor kan vi også tilby tjenester som utføres inne.</p></li>
                        </ul>
                    </div>                    
                    <p>&nbsp;</p>
                    <div className={styles.link}><Link href={`/${links.contact}#form`}><a>{zamowUsluge}</a></Link></div>
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

export default Impregnation
