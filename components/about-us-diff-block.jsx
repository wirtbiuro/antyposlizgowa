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
                <div className={`${styles.mainHeader} header`}><h2>Hvorfor oss?</h2></div>
                <div className={styles.mainBlock}>
                    <div className={styles.left}>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <div className={`${styles.icon} ${styles.atom}`}></div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.header}><h3>Den patenterte teknologien ZAP</h3></div>
                                <div className={styles.text}><p>Vi bruker kjemiske preparater fra CTS Chemistry som bygger på egne og sertifiserte oppskrifter, samt vi arbeider i henhold til den patenterte teknologien ZAP®.</p></div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <div className={`${styles.icon} ${styles.check}`}></div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.header}><h3>ECO-FRENDLY</h3></div>
                                <div className={styles.text}><p>Dyktighandverker AS bruker preparater av høy kvalitet fra CTS Chemistry. De er moderne, og de bygger på en vannbasert teknologi, takket være dette er de trygge og miljøvennlige.</p></div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <div className={`${styles.icon} ${styles.thumbsup}`}></div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.header}><h3>Utførte oppdrag</h3></div>
                                <div className={styles.text}><p>Vi garanterer rettidig levering og effektivitet. Vi utfører både enkelte oppdrag, og oppdrag med grunnlag i langvarige avtaler.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsDiffBlock
