import React from 'react'
import Banner from '../components/banner'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import otherStyles from '../styles/Other.module.css'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AboutUsDiffBlock from '../components/about-us-diff-block'
import UslugiBtns from '../components/uslugi-btns'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'

const AboutUs = () => {
    return (
        <div className={styles.all}>
            <AntpslzgBreadcrumb pathArr={[{title: 'O nas'}]}/>
            <Banner backgroundImage='url(/images/stairs.png)' withwaves={false}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>O nas</h1>
                        <p>Świadczymy specjalistyczne usługi z zakresu zabezpieczenia antypoślizgowego, gruntownego doczyszczania, odkamieniania, impregnacji.</p>
                        {/* <div className={styles.link}><Link href='/services'><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div> */}
                    </div>
                </div>
            </Banner>
            <div className={otherStyles.pageBody}>
                <div className={otherStyles.banner}>
                    <div className={otherStyles.left}>
                        <h2>Zamów profesjonalną usługę</h2>
                    </div>
                    <div className={otherStyles.right}>
                        <Link href='/'><a><span>TEL.&nbsp;&nbsp;22&nbsp;&nbsp;750&nbsp;&nbsp;20&nbsp;&nbsp;66</span></a></Link>
                    </div>
                </div>
                <div className={`${styles.pageBody} ${otherStyles.innerPageBody}`}>
                    <div className={`${styles.left} ${otherStyles.left}`}>
                        <img src="/images/measurement-3.png" className={styles.decorImg}/>
                    </div>
                    <div className={`${styles.right} ${otherStyles.right}`}>
                        <h2>Lider Branży Antypoślizgowej</h2>
                        <p>&nbsp;</p>
                        <p>Posiadamy 17-letnie doświadczenie w branży. Pracujemy na własnych, profesjonalnych preparatach chemicznych marki CTS Chemistry. Gwarantujemy jakość i wieloletnią trwałość stosowanych zabezpieczeń. Stosujemy własne preparaty chemiczne oparte na autorskich i certyfikowanych recepturach oraz pracujemy zgodnie z własną opatentowaną technologią ZAP®. Posiadamy wieloletnie doświadczenie w kraju i za granicą.</p>
                        <p>
                            Zabezpieczamy mokre i śliskie powierzchnie, zarówno przed, jak i po montażu.
                            <br/>
                            Wykonujemy <strong>pomiar antypoślizgowości według wytycznych Instytutu Techniki Budowlanej.</strong>
                        </p>
                        <p>Po przeprowadzonej usłudze dokonamy pomiaru antypoślizgowości i wystawiamy <strong>Certyfikat Zgodności</strong> przeprowadzonego badania.</p>
                        <p>Nasze usługi są skuteczne i bezpieczne, jako jedyne na rynku nie <strong>zmieniają stylistyki powierzchni.</strong> Bez potrzeby remontu lub stosowania nieestetycznych taśm, naklejek oraz mat antypoślizgowych, możemy zmienić każdą powierzchnię w czystą i bezpieczną.</p>
                    </div>
                </div>    
            </div>
            <AboutUsDiffBlock/>
            <div className={otherStyles.pageBody}>
                <div className={`${styles.pageBody} ${otherStyles.innerPageBody}`}>
                    <div className={`${styles.left} ${otherStyles.left}`}>
                        <h2>Nasze usługi</h2>
                        <p>&nbsp;</p>
                        <ul>
                            <li><p>Wszystkie usługi z naszego portfolio wykonują specjaliści z wieloletnim doświadczeniem w branży.</p></li>
                            <li><p>Usługi zabezpieczenia antypoślizgowego wykonujemy zgodnie z wytycznymi Instytutu Techniki Budowlanej i Ministerstwa Rozwoju.</p></li>
                            <li><p>Jako jedyna w Polsce firma pracujemy w oparciu o własnej produkcji preparaty chemiczne, które pozwalają nam uzyskać najwyższą jakość świadczonych usług.</p></li>
                            <li><p>Każde zlecenie rozpatrujemy indywidualnie, uwzględniając potrzeby i życzenia Klientów.</p></li>
                            <li><p>Gwarantujemy terminowość i skuteczność wykonywanych prac.</p></li>
                            <li><p>Realizujemy zarówno zlecenia jednorazowe jak i umowy stałe.</p></li>
                            <li><p>Działamy w kraju i zagranicą.</p></li>
                        </ul>
                    </div>
                    <div className={`${styles.right} ${otherStyles.right}`}>
                        <img src="/images/wash.png" className={styles.decorImg}/>
                    </div>
                </div>
                <UslugiBtns/>
            </div>
            <Banner backgroundImage="url('/images/feet2.jpg')">
                <div className={styles.bannerInner}>
                    <div className={styles.center}>
                        <h1>Zamów bezpłatną próbę zabezpieczenia antypoślizgowego!</h1>
                        <h2>Skontaktuj się z nami:</h2>
                        <div><Link href='/'><a>TEL. 22 750 20 66</a></Link></div>
                    </div>
                </div>
            </Banner>
            <Footer/>
            <div className={styles.footerBar}></div>
        </div>
    )
}

export default AboutUs
