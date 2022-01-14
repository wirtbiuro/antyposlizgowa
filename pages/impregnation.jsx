import React, { useRef } from 'react'
import Banner from '../components/banner'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'
import Animate from '../components/animate'

const Impregnation = () => {

    const imgRef = useRef()
    const selectionRef = useRef()

    return (
        <div className={styles.frictionMeasurement}>
            <Animate elementRef={imgRef} animationName="fadeInUp10"/>
            <Animate elementRef={selectionRef} animationName="fadeInUp10"/>
            <AntpslzgBreadcrumb pathArr={[{title: 'Usługi', href:'/services'}, {title: 'Impregnacja'}]}/>
            <Banner backgroundImage='url(/images/gray-plates.jpg)' withwaves={false} isFadeInLeft10={true}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Impregnacja</h1>
                        <p>Impregnacja skutecznie chroni przed wchłanianiem wody, tłustych plam, czy innych substancji w powierzchnię. Dzięki niej brud można łatwo usunąć, a materiał pozostaje niezniszczony.</p>
                        <div className={styles.link}><Link href='/services'><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div>
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left}>
                    <img src="/images/drops.png" className={styles.decorImg} ref={imgRef}/>
                    <p>&nbsp;</p>
                    <h2>Jakie powierzchnie warto impregnować i dlaczego?</h2>
                    <p>&nbsp;</p>
                    <p>Taras i balkon, elewacja, schody, podjazdy, murki czy elementy wykonane z naturalnego kamienia, cegły, gresu, klinkieru, marmuru lub granitu, wszystkie te powierzchnie w przestrzeni domowej lub budynkach użyteczność publicznej nieustannie ulegają eksploatacji i narażone są na szkodliwy wpływ czynników zewnętrznych. Z upływem czasu niezabezpieczone powierzchnie ulegają trwałemu zabrudzeniu i szybciej się starzeją.</p>
                    <p>Skuteczną ochroną jest odpowiednio dobrana impregnacja, która zapobiegają wchłanianiu wody i tłustych plam (olej, tłuszcz, smog, żywność, kosmetyki, mydła itp.). W rezultacie brud pozostaje na powierzchni kamienia, ale nie może wniknąć do środka, dlatego można go łatwo usunąć.</p>
                    <img src="/images/drops-2.png"/>
                    <p>&nbsp;</p>
                    <h2>Wysokiej jakości preparat, dobrze dobrany do odpowiedniego podłoża:</h2>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>wzmacnia jego strukturę,</p></li>
                        <li><p>zabezpiecza przed wchłanianiem wilgoci,</p></li>
                        <li><p>eliminuje pylenie,</p></li>
                        <li><p>zwiększa odporność na ścieranie,</p></li>
                        <li><p>zapobiega wchłanianiu zanieczyszczeń,</p></li>
                        <li><p>zapobiega porastaniu mchem,</p></li>
                        <li><p>zapobiega przebarwieniom,</p></li>
                        <li><p>ułatwia czyszczenie,</p></li>
                        <li><p>poprawia wygląd,</p></li>
                        <li><p>może wzmocnić kolor lub nadać połysk.</p></li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <video 
                        playsInline={true} 
                        width="100%" 
                        style={{"objectFit": "cover"}} 
                        autoPlay={true} 
                        muted={true} 
                        loop={true} 
                        preload="auto" 
                        controls="1"
                    >
                        <source src="https://antyposlizgowa.com/wp-content/uploads/2021/04/IMG_3058.mov" type="video/mp4" />
                        Sorry, your browser does not support embedded videos.
                    </video>
                    <p>&nbsp;</p>
                    <h2>Podczas wyboru odpowiedniego środka chemicznego do impregnacji należy zwrócić uwagę na to, aby:</h2>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>impregnat nie powodował żółknięcia zabezpieczonej powierzchni,</p></li>
                        <li><p>nie zwiększał jej śliskości,</p></li>
                        <li><p>był trwały,</p></li>
                        <li><p>łatwy w aplikacji,</p></li>
                        <li><p>bezpieczny dla środowiska,</p></li>
                        <li><p>był odporny na alkalia,</p></li>
                        <li><p>był odporny na działanie promieni UV</p></li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.selection} ref={selectionRef}>
                        <ul>
                            <li><p>Zalecamy stosowanie impregnacji na nowych i starych powierzchniach, zarówno wewnątrz jak i na zewnątrz budynków.</p></li>
                            <li><p>Zabezpieczenie nowych niezabrudzonych powierzchni znacząco przedłuży czas, w którym będą wyglądać czysto i świeżo oraz ułatwi ich codzienną pielęgnację.</p></li>
                            <li><p>Stare powierzchnie po zabiegu głębokiego oczyszczenia szczególnie należy poddać impregnacji, która wzmocni kolor lub przywróci blask zabezpieczanej powierzchni.</p></li>
                            <li><p>Firma CT Service pracuje na preparatach ekologicznych, bezpiecznych dla ludzi i przyjaznych dla środowiska, dlatego swoje usługi możemy wykonywać również wewnątrz budynków.</p></li>
                        </ul>
                    </div>                    
                    <p>&nbsp;</p>
                    <div className={styles.link}><Link href='/contact'><a>ZAMÓW USŁUGĘ &gt;&gt;</a></Link></div>
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

export default Impregnation
