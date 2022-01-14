import React, { useRef } from 'react'
import styles from '../styles/DiffBlock.module.css'
import { Carousel } from 'antd';
import Animate from './animate';

const AboutUsDiffBlock = () => {

    const diffBlockRef = useRef()

    return (
        <div className={styles.background}>
            <Animate elementRef={diffBlockRef} animationName="fadeInUp10"/>
            <div className={`${styles.diffBlock} ${styles.aboutUs}`} ref={diffBlockRef}>
                <div className={`${styles.mainHeader} header`}><h2>Dlaczego my?</h2></div>
                <div className={styles.mainBlock}>
                    <div className={styles.left}>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <div className={`${styles.icon} ${styles.atom}`}></div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.header}><h3>Opatentowana technologia ZAP®</h3></div>
                                <div className={styles.text}><p>Stosujemy własne preparaty chemiczne oparte na autorskich i certyfikowanych recepturach oraz pracujemy zgodnie z własną opatentowaną technologią ZAP®.</p></div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <div className={`${styles.icon} ${styles.check}`}></div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.header}><h3>17 lat doświadczenia</h3></div>
                                <div className={styles.text}><p>Nasza firma to lata doświadczeń, polski kapitał i myśl technologiczna. Posiadamy zespół wysoko wykwalifikowanych chemików, który odpowiada za nasze autorskie receptury.</p></div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <div className={`${styles.icon} ${styles.thumbsup}`}></div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.header}><h3>Ponad 700 realizacji</h3></div>
                                <div className={styles.text}><p>Posiadamy ponad 400 zadowolonych partnerów biznesowych. Wykonaliśmy ponad 700 realizacji zarówno w kraju, jak i za granicą. Podejmiemy się zarówno jednorazowych zleceń, jak długoterminowych umów.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsDiffBlock
