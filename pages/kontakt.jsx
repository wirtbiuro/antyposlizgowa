import React, { useRef, useEffect } from 'react'
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
import Animate from '../components/animate'
import BottomBaner from '../components/bottom-banner'
import { useRouter } from 'next/router'

const Contact = () => {

    const router = useRouter()

    const otherBannerRef = useRef()
    const rightRef = useRef()
    const anchorRef = useRef()

    useEffect(()=>{
        // console.log('router', router)
        if(router.asPath.includes('#form'))
        anchorRef.current.scrollIntoView()
      }, [router.query])
    
    return (
        <div className={styles.all}>
            <Animate elementRef={otherBannerRef} animationName="fadeInUp"/>
            <Animate elementRef={rightRef} animationName="fadeInRight10"/>
            <AntpslzgBreadcrumb pathArr={[{title: 'Kontakt'}]}/>
            <Banner backgroundImage='url(/images/stairs.png)' withwaves={false} isFadeInLeft10={true}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Kontakt</h1>
                        {/* <p>Świadczymy specjalistyczne usługi z zakresu zabezpieczenia antypoślizgowego, gruntownego doczyszczania, odkamieniania, impregnacji.</p> */}
                        {/* <div className={styles.link}><Link href={`/${links.services}`}><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div> */}
                    </div>
                </div>
            </Banner>
            
            <div className={otherStyles.pageBody}>
                <div className={otherStyles.banner} ref={otherBannerRef}>
                    <div className={otherStyles.left}>
                        <h2>Bestill en gratis måling av sklisikkerhet</h2>
                    </div>
                    <div className={otherStyles.right}>
                        <Link href='tel:+4762815981'>
                            <a><span>Tlf.&nbsp;&nbsp;+47&nbsp;&nbsp;62&nbsp;&nbsp;81&nbsp;&nbsp;59&nbsp;&nbsp;81</span></a>
                        </Link>
                    </div>
                </div>
                <div className={`${styles.pageBody} ${otherStyles.innerPageBody}`}>
                    <div className={`${styles.left} ${otherStyles.noMargin}`}>
                        <div className={`${contactStyles.mainFormWrapper}`} ref={anchorRef}>
                            <h2>Send oss en melding:</h2>
                            <MainForm 
                                style={{width: '100%', border: '1px solid rgb(220, 220, 220)', padding: '40px', display: 'block'}} 
                                title={''}
                                isFadeInLeftt10={true}
                            />
                        </div>
                    </div>
                    <div className={`${styles.right} ${otherStyles.noMargin}`} ref={rightRef}>
                        <div className={`${contactStyles.row}`}>
                            <i className={`${contactStyles.adress}`}/>
                            <div className={`${contactStyles.col}`}>
                                <h2>Dyktighandverker&nbsp;AS</h2>
                                <p>Org.nr.&nbsp;916&nbsp;258&nbsp;801</p>
                                <p>Industriveien 13</p>
                                <p>1481 Hagan</p>
                                {/* <p>NIP: 9512513546</p> */}
                                <p>&nbsp;</p>
                                {/* <p>Adres do korespondencji</p>
                                <p>ul. Okulickiego 19</p>
                                <p>05-500 Piaseczno</p> */}
                            </div>
                        </div>
                        <div className={`${contactStyles.row}`}>
                            <i className={`${contactStyles.phone}`}/>
                            <div className={`${contactStyles.col}`}>
                                <Link href='tel:+4762815981'><a>
                                    <h3>+47 62 81 59 81</h3>
                                </a></Link>
                            </div>
                        </div>
                        <div className={`${contactStyles.row}`}>
                            <i className={`${contactStyles.adress}`}/>
                            <div className={`${contactStyles.col}`}>
                                <Link href='mailto:post@sklibeskyttelse.no'><a>
                                    <h3>post@sklibeskyttelse.no</h3>
                                </a></Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            
            <BottomBaner/>
            <Footer/>
            <div className={styles.footerBar}></div>
        </div>
    )
}

export default Contact
