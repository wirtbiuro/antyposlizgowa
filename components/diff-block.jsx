import React, { useRef } from 'react'
import styles from '../styles/DiffBlock.module.css'
import { Carousel } from 'antd';
import Animate from './animate';

const DiffBlock = () => {

    const h2Ref = useRef()
    const leftRef = useRef()
    const rightRef = useRef()

    return (
        <div className={styles.diffBlock}>
            <Animate animationName="fadeInUp" elementRef={h2Ref}/>
            <Animate animationName="fadeInLeft10" elementRef={leftRef}/>
            <Animate animationName="fadeInRight10" elementRef={rightRef}/>
            <div className={`${styles.mainHeader} header`}><h2 ref={h2Ref}>Hva kjennetegner oss?</h2></div>
            <div className={styles.mainBlock}>
                <div className={styles.left} ref={leftRef}>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <div className={`${styles.icon} ${styles.atom}`}></div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.header}><h3>Den patenterte teknologien ZAP®</h3></div>
                            <div className={styles.text}><p>
                                Vi bruker kjemiske preparater som bygger på CTS Chemistry sine originale oppskrifter, samt vi arbeider i henhold til den patenterte teknologien ZAP®. Det er de unike teknologiske løsninger som gjør at produkter og tjenester blir kvalitetens, effektivitetens og sikkerhetens forbilde.
                            </p></div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <div className={`${styles.icon} ${styles.check}`}></div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.header}><h3>Erfaring og spesialisering</h3></div>
                            <div className={styles.text}><p>
                                Alle tjenester i vår portefølje utføres av spesialister med erfaring i bransjen. Vi har en individuell tilnærming til hvert oppdrag, og vi setter kundenes behov og ønsker i fokus. Vi gjennomfører både et enkelt oppdrag, samt faste oppdrag med grunnlag i et samarbeidsavtale.
                            </p></div>
                        </div>
                    </div>
                    {/* <div className={styles.row}>
                        <div className={styles.left}>
                            <div className={`${styles.icon} ${styles.thumbsup}`}></div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.header}><h3>Zadowoleni klienci</h3></div>
                            <div className={styles.text}><p>Ponad 400 zadowolonych partnerów biznesowych i ponad 700 wykonanych realizacji, w kraju i zagranicą.</p></div>
                        </div>
                    </div> */}
                </div>
                <div className={styles.right} ref={rightRef}>
                    <img src="/images/technika-antyposlizgowa.jpg"/>
                    {/* <div>
                        <Carousel  effect="fade" autoplay autoplaySpeed={8000}>
                            <div>
                                <p className={styles.carouselText}>Firma jest profesjonalnym wykonawcą, zna i stosuje nowoczesne, profesjonalne i bezpieczne technologie. Przedstawiciele firmy wykazywali się ogromnym zaangażowaniem i dokładnością. Z pełnym zaufaniem polecam firmę. </p>
                                <p className={styles.author}><strong>Kazimierz Wolski</strong>, Przedsiębiorstwo Kamieniarskie Wolski</p>
                            </div>
                            <div>
                                <p className={styles.carouselText}>Firma CT Service jest wiarygodnym partnerem, posiadającym duże doświadczenie związane z usługą antypoślizgową.</p>
                                <p className={styles.author}><strong>Edmund Dulemba</strong>, Zakład Kamieniarski Marmur Dulemba</p>
                            </div>  
                            <div>
                                <p className={styles.carouselText}>Firma jest bardzo profesjonalnym wykonawcą, znającym i stosującym nowoczesne technologie podczas realizacji inwestycji. Wszystkie prace wykonywane były sprawnie, zgodnie z wszelkimi zasadami budowlanymi.  Z pełnym zaufaniem rekomenduję firmę. </p>
                                <p className={styles.author}><strong>Grzegorz Adamus</strong>, Euro-Granit Adamus</p>
                            </div>                  
                        </Carousel>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DiffBlock
