import React from 'react'
import styles from '../styles/DiffBlock.module.css'
import { Carousel } from 'antd';

const DiffBlock = () => {
    return (
        <div className={styles.diffBlock}>
            <div className={`${styles.mainHeader} header`}><h2>Co nas wyróżnia?</h2></div>
            <div className={styles.mainBlock}>
                <div className={styles.left}>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <div className={`${styles.icon} ${styles.atom}`}></div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.header}><h3>Własna opatentowana technologia ZAP®</h3></div>
                            <div className={styles.text}><p>Stosujemy własne preparaty chemiczne oparte na autorskich recepturach oraz pracujemy zgodnie z własną opatentowaną technologię ZAP®. To dzięki unikatowym rozwiązaniom technologicznym nasze produkty i usługi stają się symbolem jakości, skuteczności i bezpieczeństwa.</p></div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <div className={`${styles.icon} ${styles.check}`}></div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.header}><h3>Doświadczenie i specjalizacja</h3></div>
                            <div className={styles.text}><p>Posiadamy wieloletnie doświadczenie w kraju i za granicą! Wszystkie usługi z naszego portfolio wykonują specjaliści z wieloletnim doświadczeniem w branży zgodnie z wytycznymi Instytutu Techniki Budowlanej i Ministerstwa Rozwoju. Każde zlecenie rozpatrujemy indywidualnie, uwzględniając potrzeby i życzenia Klientów. Realizujemy zarówno zlecenia jednorazowe jak i umowy stałe</p></div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <div className={`${styles.icon} ${styles.thumbsup}`}></div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.header}><h3>Zadowoleni klienci</h3></div>
                            <div className={styles.text}><p>Ponad 400 zadowolonych partnerów biznesowych i ponad 700 wykonanych realizacji, w kraju i zagranicą.</p></div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="/images/technika-antyposlizgowa.jpg"/>
                    <div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiffBlock
