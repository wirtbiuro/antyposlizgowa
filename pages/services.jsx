import React, { useRef } from 'react'
import Banner from '../components/banner'
import MainForm from '../components/main-form'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import serviceStyles from '../styles/Services.module.css'
import Cards from '../components/cards'
import DiffBlock from '../components/diff-block'
import TrustBlock from '../components/trust-block'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'
import Animate from '../components/animate'
import { uslugi } from '../constants'

const Services = () => {

    const ifRef1 = useRef()
    const ifRef2 = useRef()
    const ifRef3 = useRef()
    const ifRef4 = useRef()
    const ifRef5 = useRef()
    const cardRef1 = useRef()
    const cardRef2 = useRef()
    const cardRef3 = useRef()

    return (
        <div>
            <Animate elementRef={ifRef1} animationName="fadeInUp10"/>
            <Animate elementRef={ifRef2} animationName="fadeInUp10"/>
            <Animate elementRef={ifRef3} animationName="fadeInUp10"/>
            <Animate elementRef={ifRef4} animationName="fadeInUp10"/>
            <Animate elementRef={ifRef5} animationName="fadeInUp10"/>
            <Animate elementRef={cardRef1} animationName="fadeInLeft10"/>
            <Animate elementRef={cardRef2} animationName="fadeInLeft10"/>
            <Animate elementRef={cardRef3} animationName="fadeInLeft10"/>
            <AntpslzgBreadcrumb pathArr={[{title: uslugi}]}/>
            <Banner 
                backgroundImage='linear-gradient(180deg, #ffffff 0%,rgba(255,255,255,0) 100%),url(/images/stairs.png)' 
                withwaves={false}
                isFadeInLeft10={true}
            >
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Usługi</h1>
                        <p>Świadczymy specjalistyczne usługi z zakresu zabezpieczenia antypoślizgowego, gruntownego doczyszczania, odkamieniania, impregnacji.</p>
                        {/* <div className={styles.link}><Link href='/services'><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div> */}
                    </div>
                </div>
            </Banner>
            <div className={`${styles.pageBody} ${serviceStyles.pageBody}`}>
                <div className={styles.left}>
                    <div className={`${serviceStyles.row}`} ref={ifRef1}>
                        <div className={`${serviceStyles.arrow}`}></div>
                        <div className={`${serviceStyles.col} ${serviceStyles.if}`}>
                            <h2>Jeśli Twoja posadzka jest śliska...</h2>
                            <p>zastosujemy opatentowane zabezpieczenia antypoślizgowe. Odzyskasz równowagę i poczucie bezpieczeństwa. Bez zmiany estetyki nawierzchni.</p>
                        </div>
                    </div>
                    <div className={`${serviceStyles.row}`} ref={ifRef2}>
                        <div className={`${serviceStyles.arrow}`}></div>
                        <div className={`${serviceStyles.col} ${serviceStyles.if}`}>
                            <h2>Jeśli masz nową, piękną i śliską posadzkę...</h2>
                            <p>to warto ją zabezpieczyć antypoślizgowo, potem zaimpregnujemy ją dla Ciebie! Efekt świeżości zachowasz na dłużej i dużo łatwiej utrzymasz czystość.</p>
                        </div>
                    </div>
                    <div className={`${serviceStyles.row}`} ref={ifRef3}>
                        <div className={`${serviceStyles.arrow}`}></div>
                        <div className={`${serviceStyles.col} ${serviceStyles.if}`}>
                            <h2>Jeśli masz starą, zniszczoną posadzkę...</h2>
                            <p>doczyścimy ją, odplamimy i zabezpieczymy antypoślizgowo, aby była bezpieczna dla Ciebie, Twoich klientów, Twoich pracowników i Twoich bliskich i zaimpregnujemy ją dla Ciebie. Twoja podłoga odzyska dawny blask i świeżość.</p>
                        </div>
                    </div>
                    <div className={`${serviceStyles.row}`} ref={ifRef4}>
                        <div className={`${serviceStyles.arrow}`}></div>
                        <div className={`${serviceStyles.col} ${serviceStyles.if}`}>
                            <h2>Jeśli jesteś odpowiedzialny za posadzki w przestrzeni użyteczności publicznej...</h2>
                            <p>wykonamy profesjonalny pomiar antypoślizgowości i wystawimy Certyfikat Zgodności przeprowadzonego badania oraz dołączymy wydruk charakterystyki współczynnika tarcia dynamicznego zabezpieczonej powierzchni.</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={`${serviceStyles.row}`} ref={ifRef5}>
                        <div className={`${serviceStyles.col} ${serviceStyles.exp}`}>
                            <h2>Mamy wieloletnie doświadczenie w kraju i za granicą!</h2>
                            <p>Sprawdź co nas wyróżnia i kim są nasi klienci.</p>
                            <p>Zachęcamy też do zapoznania się z naszymi realizacjami i referencjami.</p>
                        </div>
                    </div>

                    <p>&nbsp;</p>

                    <div className={serviceStyles.row} ref={cardRef1}>
                        <div className={serviceStyles.card}>
                            <h2>Zabezpieczenie antypoślizgowe</h2>
                            <p>Zabezpieczamy każdy rodzaj starej lub nowej powierzchni: z kamienia, ceramiki, betonu, cegły, na zewnątrz i wewnątrz budynku. Jako jedyna polska firma świadczymy profesjonalne usługi w oparciu o własną, opatentowaną technologię ZAP.</p>
                            <div className={styles.link}><Link href='/protection'><a>Les mer</a></Link></div>
                        </div>
                        <div className={serviceStyles.card}>
                            <h2>Pomiar tarcia dynamicznego i PCV</h2>
                            <p>Wykonamy pomiar antypoślizgowości i wystawimy Certyfikat Zgodności oraz dostarczymy wydruk charakterystyki współczynnika tarcia dynamicznego zabezpieczonej powierzchni. Wszystko zgodnie z wytycznymi Instytutu Techniki Budowlanej i Ministerstwa Rozwoju.</p>
                            <div className={styles.link}><Link href='/friction-measurement'><a>Les mer</a></Link></div>
                        </div>
                    </div>

                    <div className={serviceStyles.row} ref={cardRef2}>
                        <div className={serviceStyles.card}>
                            <h2>Doczyszczanie powierzchni</h2>
                            <p>Usługa głębokiego doczyszczenia posadzek sprawia, że każda powierzchnia wygląda lepiej niż kiedykolwiek, łatwiej podlega codziennemu czyszczeniu, wolniej ulega eksploatacji i jest bezpieczniejsza dla użytkowników.</p>
                            <div className={styles.link}><Link href='/cleaning'><a>Les mer</a></Link></div>
                        </div>
                        <div className={serviceStyles.card}>
                            <h2>Odkamienianie</h2>
                            <p>Duże zanieczyszczenie kamieniem np. basenu tworzy konieczność zastosowania kwaśnych preparatów chemicznych. W miejscach, które narażone są na ciągły kontakt z wodą, należy pamiętać o okresowym czyszczeniu. Napisz do nas i zapytaj jak możemy pomóc.</p>
                            <div className={styles.link}><Link href='/descaling'><a>Les mer</a></Link></div>
                        </div>
                    </div>

                    <div className={serviceStyles.row} ref={cardRef3}>
                        <div className={serviceStyles.card}>
                            <h2>Impregnacja</h2>
                            <p>Powierzchnie będą wyglądać czysto i świeżo przez dłuższy czas, a ich codzienna pielęgnacja będzie łatwiejsza. Usługa może też wzmocnić kolor i przywrócić blask. Wykorzystamy ekologiczne, przyjazne dla ludzi i środowiska preparaty. Impregnacja zapobiega wchłanianiu substancji, w rezultacie brud można łatwo usuwać.</p>
                            <div className={styles.link}><Link href='/impregnation'><a>Les mer</a></Link></div>
                        </div>
                        <div className={serviceStyles.card}>
                            <h2>Nasze produkty</h2>
                            <p>Posiadamy własne produkty z kategorii: antypoślizg, zmywacze, impregnaty wodne, impregnaty rozpuszczalnikowe. Posiadają atest PZH, są bezpieczne dla ludzi i środowiska, a większość z nich jest ekologiczna. Dodatkowo nie niszczą podłoża, wspomagają dezynfekcję, są łatwe w aplikacji wewnątrz i na zewnątrz, dla starych i nowych powierzchni.</p>
                            <div className={styles.link}><Link href='/products'><a>Les mer</a></Link></div>
                        </div>
                    </div>

                </div>
                <div className={styles.right}>
                    <AuxForm/>
                </div>
            </div>
            <Banner backgroundImage="url('/images/feet2.jpg')" isFadeInUp={true}>
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

export default Services
