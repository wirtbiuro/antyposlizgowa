import React, { useRef } from 'react'
import Banner from '../components/banner'
import MainForm from '../components/main-form'
import Link from 'next/link'
import styles from '../styles/Common.module.css'
import Cards from '../components/cards'
import DiffBlock from '../components/diff-block'
import TrustBlock from '../components/trust-block'
import Footer from '../components/footer'
import AuxForm from '../components/aux-form'
import AntpslzgBreadcrumb from '../components/antpslzgBreadcrumb'
import Animate from '../components/animate'
import { zamowUsluge, uslugi, checkAllServices } from '../constants'
import BottomBaner from '../components/bottom-banner'

const Descaling = () => {

    const imgRef = useRef()

    return (
        <div>
            <Animate elementRef={imgRef} animationName="fadeInUp10"/>
            <AntpslzgBreadcrumb pathArr={[{title: uslugi, href:'/services'}, {title: 'Avkalking'}]}/>
            <Banner backgroundImage='url(/images/plates-flowers.jpg)' withwaves={false} isFadeInLeft10={true}>
                <div className={`${styles.bannerInner}`}>
                    <div className={`${styles.left} ${styles.self}`}>
                        <h1>Avkalking</h1>
                        <p>Kalsiumoppbygging på f.eks. bassengoverflater gjør det nødvendig å bruke sure kjemiske preparater.  Det er også viktig å rengjøre slike overflater periodisk. Send en melding til oss og hvordan vi kan hjelpe deg.</p>
                        <div className={styles.link}><Link href='/services'><a>{checkAllServices}</a></Link></div>
                    </div>
                </div>
            </Banner>
            <div className={styles.pageBody}>
                <div className={styles.left}>
                    <img src="/images/plates.png" className={styles.decorImg} ref={imgRef}/>
                    <h2>Avkalking</h2>
                    <p>&nbsp;</p>
                    <p>Skład chemiczny osadów kamiennych powstających w procesie eksploatacji np. basenu kąpielowego, zależy od rodzaju i jakości wody, stosowanych złóż filtracyjnych, reagentów chemicznych i ich dawek zastosowanych w oczyszczaniu wody oraz pH wody.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Skąd bierze się osad kamienny ?</h2>
                    <p>&nbsp;</p>
                    <p>Woda wodociągowa czy głębinowa jest nośnikiem dla łatwo rozpuszczalnych w wodzie związków chemicznych. Woda, zawierając dwutlenek węgla, wchodzi w reakcje ze składnikami skał przez które przepływa. Przepływając przez glebę i skały, woda ulega zanieczyszczeniu przez kwaśne węglany, szczawiany i siarczany, wapnia i magnezu oraz inne składniki w nich występujące mniejszych ilościach. Ich stężenie w wodzie określa jej twardość. Im większa ich ilość, tym woda jest twardsza.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Jak powstaje osad kamienny ?</h2>
                    <p>&nbsp;</p>
                    <p>Składniki mineralne niesione przez wodę, przylegają do powierzchni np. płytek basenowych, powodując odkłada się warstwami osadów kamiennych. Powszechnie stosowana na basenach woda kanalizacyjna, może w ciągu roku spowodować przyrost kamienia na poziomie około 2-3 mm. Całkowite wyeliminowanie minerałów z wody wodociągowej czy basenowej nie jest możliwe. Filtry i uzdatnianie wody mogą jedynie nieznacznie zmniejszyć szybkość gromadzenia się osadów, ale nie są w stanie całkowicie wyeliminować tego zjawiska. Jest to proces zupełnie naturalny i nieunikniony, z którym musimy się pogodzić i jemu przeciwdziałać.</p>
                    <p>&nbsp;</p>
                    <p>Warstwy osadu kamiennego posiadają niezwykle porowatą strukturę, do której przyczepiają się wszelkie zabrudzenia, a jego powierzchnia jest bardzo chłonna.</p>
                    <p>Osad wżera się w powierzchnię i jest praktycznie nie do usunięcia przez tradycyjne czyszczenie czy nawet szorowanie. Luźny osad kamienny ulega przekształceniu w bardziej zwięzły kamień w wyniku szeregu procesów, określanych łącznie mianem cementacji. W środowisku naturalnym procesy cementacji prowadzą do powstawania skał.</p>
                    <p>W środowisku domowym czy przemysłowym, kamień z reguły pozostaje nam usunąć bezinwazyjnie, tylko środkami chemicznymi.</p>
                    <p>Gdy problem zanieczyszczenia np. basenu kamieniem jest duży, należy zaprosić do działania kwaśne preparaty chemiczne. Podczas ich stosowania trzeba oczywiście zachować należytą ostrożność. Środki chemiczne o wysokiej kwasowości są jednak niezbędne do usunięcia dużych osadów kamiennych.</p>
                    <p>W miejscach, które narażone są na ciągły kontakt z wodą, a w szczególności z ciepłą wodą, należy pamiętać o okresowym czyszczeniu ich wodą z dodatkiem kwaśnego preparatu chemicznego.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.link}><Link href='/contact'><a>{zamowUsluge}</a></Link></div>
                </div>
                <div className={styles.right}>
                    <AuxForm/>
                </div>
            </div>
            <BottomBaner/>
            <Footer/>
            <div className={styles.footerBar}></div>
        </div>
    )
}

export default Descaling
