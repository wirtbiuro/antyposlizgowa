import React, { useRef } from 'react'
import Banner from '../components/banner'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import otherStyles from '../styles/Other.module.css'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AboutUsDiffBlock from '../components/about-us-diff-block'
import UslugiBtns from '../components/uslugi-btns'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'
import Animate from '../components/animate'
import { zamowUslugeS } from '../constants'
import BottomBaner from '../components/bottom-banner'

const AboutUs = () => {

    const otherBannerRef = useRef()
    const imgRef = useRef()
    const textRef = useRef()
    const imgRef2 = useRef()
    const textRef2 = useRef()

    return (
        <div className={styles.all}>
            <Animate elementRef={otherBannerRef} animationName="fadeInUp10"/>
            <Animate elementRef={imgRef} animationName="fadeInLeft10"/>
            <Animate elementRef={textRef} animationName="fadeInRight10"/>
            <Animate elementRef={imgRef2} animationName="fadeInRight10"/>
            <Animate elementRef={textRef2} animationName="fadeInLeft10"/>
            <AntpslzgBreadcrumb pathArr={[{title: 'Om oss'}]}/>
            <Banner backgroundImage='url(/images/stairs.png)' withwaves={false} isFadeInLeft10={true}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Om oss</h1>
                        {/* <p>Świadczymy specjalistyczne usługi z zakresu zabezpieczenia antypoślizgowego, gruntownego doczyszczania, odkamieniania, impregnacji.</p> */}
                        {/* <div className={styles.link}><Link href={`/${links.services}`}><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div> */}
                    </div>
                </div>
            </Banner>
            <div className={otherStyles.pageBody}>
                <div className={otherStyles.banner} ref={otherBannerRef}>
                    <div className={otherStyles.left}>
                        <h2>{zamowUslugeS}</h2>
                    </div>
                    <div className={otherStyles.right}>
                        <Link href='tel:+4762815981'><a><span>Tlf.&nbsp;&nbsp;+47&nbsp;&nbsp;62&nbsp;&nbsp;81&nbsp;&nbsp;59&nbsp;&nbsp;81</span></a></Link>
                    </div>
                </div>
                <div className={`${styles.pageBody} ${otherStyles.innerPageBody}`}>
                    <div className={`${styles.left} ${otherStyles.left}`} ref={imgRef}>
                        <img src="/images/measurement-3.png" className={styles.decorImg}/>
                    </div>
                    <div className={`${styles.right} ${otherStyles.right}`} ref={textRef}>
                        <h2>Leder innen sklisikring</h2>
                        <p>&nbsp;</p>
                        <p>Dyktighandverker AS er forhandler av profesjonelle kjemiske preparater fra CTS Chemistry. Vi garanterer kvalitet og sklisikringens mangeårige holdbarhet. Vi bruker kjemiske preparater som bygger på egne og sertifiserte oppskrifter, samt vi arbeider i henhold til den patenterte teknologien ZAP®.</p>
                        <p>
                            Vi sikrer både våte og glatte overflater, både før og etter montering.
                            {/* <br/>
                            Wykonujemy <strong>pomiar antypoślizgowości według wytycznych Instytutu Techniki Budowlanej.</strong> */}
                        </p>
                        <p>Etter at vi er ferdig med arbeidene, måler vi sklisikkerhet og vi utsteder  et samsvarsertifikat for den gjennomførte undersøkelsen.</p>
                        <p>Våre tjenester er effektive og trygge, som de eneste på markedet endrer de ikke overflatens stil. </p>
                        <p>Uten oppussing eller bruk av stygge remser, tape eller   Uten oppussing eller bruk av stygge taper, klistremerker og antisklimatte, kan vi gjøre hvilken som helst overflate til en ren og trygg overflate. </p>
                    </div>
                </div>    
            </div>
            <AboutUsDiffBlock/>
            <div className={otherStyles.pageBody}>
                <div className={`${styles.pageBody} ${otherStyles.innerPageBody}`}>
                    <div className={`${styles.left} ${otherStyles.left}`} ref={textRef2}>
                        <h2>Våre tjenester</h2>
                        <p>&nbsp;</p>
                        <ul>
                            <li><p>Vi er det eneste firmaet i Norge som bruker produktene fra CTS Chemistry. De bidrar til den høye kvaliteten til våre tjenester.</p></li>
                            <li><p>Vi har en individuell tilnærming til hvert oppdrag, og vi setter kundenes behov og ønsker i fokus.</p></li>
                            <li><p>Vi gjennomfører både et enkelt oppdrag, samt faste oppdrag med grunnlag i et samarbeidsavtale.</p></li>
                        </ul>
                    </div>
                    <div className={`${styles.right} ${otherStyles.right}`} ref={imgRef2}>
                        <img src="/images/wash.png" className={styles.decorImg}/>
                    </div>
                </div>
                <UslugiBtns/>
            </div>
            <BottomBaner/>
            <Footer/>
            <div className={styles.footerBar}></div>
        </div>
    )
}

export default AboutUs
