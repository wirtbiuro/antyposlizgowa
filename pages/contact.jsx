import React from 'react'
import Banner from '../components/banner'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import otherStyles from '../styles/Other.module.css'
import contactStyles from '../styles/Contact.module.css'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AboutUsDiffBlock from '../components/about-us-diff-block'
import UslugiBtns from '../components/uslugi-btns'
import MainForm from '../components/main-form'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'

const Contact = () => {
    return (
        <div className={styles.all}>
            <AntpslzgBreadcrumb pathArr={[{title: 'Kontakt'}]}/>
            <Banner backgroundImage='url(/images/stairs.png)' withwaves={false}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Kontakt</h1>
                        <p>Świadczymy specjalistyczne usługi z zakresu zabezpieczenia antypoślizgowego, gruntownego doczyszczania, odkamieniania, impregnacji.</p>
                        {/* <div className={styles.link}><Link href='/services'><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div> */}
                    </div>
                </div>
            </Banner>
            
            <div className={otherStyles.pageBody}>
                <div className={otherStyles.banner}>
                    <div className={otherStyles.left}>
                        <h2>Zamów bezpłatną próbę zabezpieczenia antypoślizgowego</h2>
                    </div>
                    <div className={otherStyles.right}>
                        <Link href='/'><a><span>TEL.&nbsp;&nbsp;22&nbsp;&nbsp;750&nbsp;&nbsp;20&nbsp;&nbsp;66</span></a></Link>
                    </div>
                </div>
                <div className={`${styles.pageBody} ${otherStyles.innerPageBody}`}>
                    <div className={`${styles.left} ${otherStyles.noMargin}`}>
                        <div className={`${contactStyles.mainFormWrapper}`}>
                            <h2>Napisz do nas:</h2>
                            <MainForm 
                                style={{width: '100%', border: '1px solid rgb(220, 220, 220)', padding: '40px', display: 'block'}} 
                                title={''}
                            />
                        </div>
                    </div>
                    <div className={`${styles.right} ${otherStyles.noMargin}`}>
                        <div className={`${contactStyles.row}`}>
                            <i className={`${contactStyles.adress}`}/>
                            <div className={`${contactStyles.col}`}>
                                <h2>CTS&nbsp;Chemistry Sp.&nbsp;z&nbsp;o.o.</h2>
                                <p>ul. Frezerów 3</p>
                                <p>20-209 Lublin</p>
                                <p>NIP: 9512513546</p>
                                <p>&nbsp;</p>
                                <p>Adres do korespondencji</p>
                                <p>ul. Okulickiego 19</p>
                                <p>05-500 Piaseczno</p>
                            </div>
                        </div>
                        <div className={`${contactStyles.row}`}>
                            <i className={`${contactStyles.phone}`}/>
                            <div className={`${contactStyles.col}`}>
                                <h3>+48 22 750 20 66</h3>
                            </div>
                        </div>
                        <div className={`${contactStyles.row}`}>
                            <i className={`${contactStyles.adress}`}/>
                            <div className={`${contactStyles.col}`}>
                                <h3>office@ctservice.com.pl</h3>
                            </div>
                        </div>
                    </div>
                </div>    
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

export default Contact
