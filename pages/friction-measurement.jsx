import React from 'react'
import Banner from '../components/banner'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'

const FrictionMeasurement = () => {
    return (
        <div className={styles.frictionMeasurement}>
            <AntpslzgBreadcrumb pathArr={[{title: 'Usługi', href:'/services'}, {title: 'Pomiar współczynnika tarcia i PTV'}]}/>
            <Banner backgroundImage='url(/images/stairs.png)' withwaves={false}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Pomiar współczynnika tarcia i PTV</h1>
                        <p>Wykonamy pomiar antypoślizgowości Twojej powierzchni według wytycznych Instytutu Techniki Budowlanej. Następnie otrzymasz Certyfikat Zgodności przeprowadzonego badania.</p>
                        <div className={styles.link}><Link href='/services'><a>SPRAWDŹ WSZYSTKIE USŁUGI</a></Link></div>
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left}>
                    <img src="/images/measurement.png" className={styles.decorImg}/>
                    <h2>Dlaczego należy sprawdzać stan posadzki w zakresie antypoślizgowości?</h2>
                    <p>&nbsp;</p>
                    <p>Każda płytka ceramiczna, w miarę upływu czasu oraz intensywności eksploatacji, traci swoją antypoślizgowość fabryczną. Dlatego antypoślizgowość posadzek należy okresowo kontrolować (nie rzadziej niż raz na 3 lata), w ramach przeglądów technicznych obiektów.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Kto zleca nam pomiar odporności posadzek na poślizg?</h2>
                    <p>&nbsp;</p>
                    <p>Projektanci, inspektorzy nadzoru budowlanego, inwestorzy, zarządcy, administratorzy obiektów użyteczności publicznej lub budynków mieszkalnych, chcąc mieć pewność, że ich posadzki są bezpieczne i zgodne z obowiązującymi przepisami prawa, wytycznymi i poradnikami, regularnie badają odporność na poślizg, nowych oraz eksploatowanych posadzek.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>W jaki sposób mierzy się odporność posadzki na poślizg ?</h2>
                    <p>&nbsp;</p>
                    <p>Ze względów praktycznych, najczęściej takich pomiarów dokonuje się przy użyciu dwóch mobilnych metod :</p>
                    <p>1. Metodą weryfikacji odporności posadzki na poślizg jest <strong>badanie oporu poślizgu</strong>. Badanie to wykonujemy przy użyciu przyrządu zwanego wahadłem angielskim, stąd badanie w skrócie określane jest jako PTV (Pendulum Test Value). Metodę badania opisano szczegółowo w normie PN-EN 13036-4:2011.</p>
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
                        <source src="https://antyposlizgowa.com/wp-content/uploads/2021/03/Pomiar_wahadlem-angielskim.mov" type="video/mp4" />
                        Sorry, your browser does not support embedded videos.
                    </video>
                    <p>Wartości oporu poślizgu PTV stanowią podstawę klasyfikacji posadzki w ujęciu ryzyka poślizgu. Klasyfikację tę przedstawiono w poniższej tabeli.</p>
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td ><strong>Opór poślizgu, PTV</strong></td>
                                <td ><strong>Klasyfikacja</strong></td>
                            </tr>
                            <tr>
                                <td >0 – 24</td>
                                <td >Wysokie ryzyko poślizgnięcia</td>
                            </tr>
                            <tr>
                                <td >25 – 35</td>
                                <td >Średnie ryzyko poślizgnięcia</td>
                            </tr>
                            <tr>
                                <td >≥ 36</td>
                                <td >Niskie ryzyko poślizgnięcia</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>&nbsp;</p>
                    <p>2. Drugą metodą badania odporności posadzki na poślizg jest <strong>pomiar dynamicznego współczynnika tarcia µ według normy DIN 51131.</strong></p>
                    <p>Test wykonywany jest przez nas <strong>za pomocą urządzenia FSC 2011 lub GMG 200</strong>. Metoda ta została wykorzystana już w roku 1995, do porównania otrzymanych wyników pomiarów dynamicznego współczynnika tarcia µ, do parametrów antypoślizgowości R otrzymanych przy badaniu wg normy DIN 51130 oraz parametrów A/B/C otrzymanych przy badaniu wg normy DIN 51097.</p>
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
                        <source src="https://antyposlizgowa.com/wp-content/uploads/2021/04/FSC_2011.mp4" type="video/mp4"/>
                        Sorry, your browser does not support embedded videos.
                    </video>
                    <p>&nbsp;</p>
                    <h2>Jak działamy?</h2>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>Pomiary wykonujemy zawsze zgodnie z wytycznymi zawartymi w normie oraz dedykowanymi do tych pomiarów ślizgaczami (stopkami), na suchym i mokrym.</p></li>
                        <li><p>Po każdym badaniu przygotujemy raport odporności podłoża na poślizg.</p></li>
                        <li><p>Rzetelne badanie jest podstawą do uznania zgodności parametrów badanego podłoża z wytycznymi opracowanymi przez Instytut Techniki Budowlanej w Warszawie w 2018 roku oraz Ministerstwo Inwestycji i Rozwoju w 2020 roku.</p></li>
                    </ul>
                    <img src="/images/measurement-2.png"/>
                    <p>&nbsp;</p>
                    <h2>O czym warto pamiętać przed podjęciem decyzji o profesjonalnym pomiarze odporności na poślizg?</h2>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <ul>
                        <li><p>Każda płytka, w miarę upływu czasu oraz intensywności eksploatacji, traci swoją antypoślizgowości fabryczną.</p></li>
                        <li><p>Antypoślizgowość danej posadzki w warunkach rzeczywistych zależy m.in. od :
                            – rodzaju posadzki np. gres szkliwiony, granit polerowany, marmur, żywica, PCV,
                            – rodzaju zelówki np. PU, TR, EVA, styrogum, tuniskór, skóra naturalna,
                            – rodzaju lubrykanta np. woda, błoto, soki, olej, ketchup, musztarda, zupy, sosy,
                            – siła nacisku czyli nasza waga.
                        </p></li>
                        <li><p>W zależności od miejsca, w którym znajduje się dana posadzka, sposobu jej eksploatacji czy charakterystyki zawodowej lub wiekowej osób z niej korzystających, każda podłoga wymaga profesjonalnego, indywidualnego podejścia przed wykonaniem pomiaru.</p></li>
                        <li><p>Inna jest antypoślizgowość suchej i inna mokrej posadzki.</p></li>
                        <li><p>Płytki ceramiczne potrafią bardzo znacznie różnić się w swojej klasie antypoślizgowości R lub A/B/C, wartościami PTV czy dynamicznego współczynnika tarcia µ.</p></li>
                        <li><p>Zlecając usługę pomiaru poślizgu swojej podłogi, zawsze szukaj doświadczonej firmy, z ugruntowaną pozycją na rynku.</p></li>
                        <li><p>Zlecaj usługę firmie dysponującej odpowiednimi urządzeniami pomiarowymi, gwarantującymi wykonanie rzetelnego pomiaru, zgodnego z obowiązującymi nomami.</p></li>
                        <li><p>Zadbaj o to, aby pomiarów dokonywał doświadczony w obsłudze urządzenia pracownik.</p></li>
                    </ul>
                    <p>&nbsp;</p>

                    <div className={styles.link}><Link href='/contact'><a>ZAMÓW USŁUGĘ &gt;&gt;</a></Link></div>
                </div>
                <div className={styles.right}>
                    <AuxForm/>
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

export default FrictionMeasurement
