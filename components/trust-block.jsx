import React from 'react'
import styles from '../styles/TrustBlock.module.css'
import { Carousel } from 'antd';

const TrustBlock = () => {
    return (
        <div className={styles.trustBlock}>
            <div className={styles.header}><h2>Zaufali nam:</h2></div>
            <div className={styles.main}>
                <div className={styles.imgDiv}>
                    <img src="/images/amazon-logo.png"/>
                </div>
                <div className={styles.imgDiv}>
                    <img src="/images/deutsche-bank-logo.jpg"/>
                </div>
                <div className={styles.imgDiv}>
                    <img src="/images/leroy-merlin-logo.png"/>
                </div>
                <div className={styles.imgDiv}>
                    <img src="/images/obi-logo.jpg"/>
                </div>
                <div className={styles.imgDiv}>
                    <img src="/images/skanska-logo.jpg"/>
                </div>
            </div>
            <div className={styles.carousel}>
                <Carousel style={{height: '100%'}} autoplay={true} arrows={true} dots={false} accessibility={true}>
                    <img src="/images/amazon-logo.png"/>
                    <img src="/images/deutsche-bank-logo.jpg"/>
                    <img src="/images/leroy-merlin-logo.png"/>
                    <img src="/images/obi-logo.jpg"/>
                    <img src="/images/skanska-logo.jpg"/>
                </Carousel>
            </div>
        </div>
    )
}

export default TrustBlock
