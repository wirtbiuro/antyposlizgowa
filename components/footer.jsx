import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import { links } from '../constants'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.col}>
                <div className={styles.row}>
                    <Link href="/"><a>
                        <img className={styles.logo} src="/images/logo-antyposlizgowa.svg"/>
                    </a></Link>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}><i className={styles['map-marker']}></i></div>
                    <div className={styles.right}><strong>Dyktighandverker AS</strong></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}></div>
                    <div className={styles.right}><strong>Org.nr. 916 258 801</strong></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}><i className={styles['file']}></i></div>
                    <div className={styles.right}>Industriveien 13</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}></div>
                    <div className={styles.right}>1481 Hagan</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}><i className={styles['envelope']}></i></div>
                        <Link href='mailto:post@sklibeskyttelse.no'><a>
                            <div className={styles.right}>epost: post@sklibeskyttelse.no</div>
                        </a></Link>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}><i className={styles['phone']}></i></div>
                    <Link href='tel:+4762815981'><a>
                        <div className={styles.right}>tlf: 62 81 59 81</div>
                    </a></Link>
                </div>

                {/* <div className={styles.row}>
                    <div className={styles.left}><i className={styles['file']}></i></div>
                    <div className={styles.right}>ul. Frezerów 3, 20-209 Lublin</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}></div>
                    <div className={styles.right}>NIP: 9512513546</div>
                </div> */}
            </div>

            {/* <div className={styles.col}>
                <div className={styles.row}><h2 className={styles.title}>Informacje</h2></div>
                <div className={styles.row}><Link href="/"><a>Cennik</a></Link></div>
                <div className={styles.row}><Link href="/"><a>Polityka Prywatności</a></Link></div>
                <div className={styles.row}><Link href="/"><a>Polityka plików „cookies”</a></Link></div>
                <div className={styles.row}><Link href="/"><a>Wiedza</a></Link></div>
            </div> */}
            <div className={`${styles.col} ${styles.menu}`}>
                <div className={styles.row}><h2 className={styles.title}>Menu</h2></div>
                <div className={styles.row}><Link href="/"><a>Hjem</a></Link></div>
                <div className={styles.row}><Link href={`/${links.services}`}><a>Våre tjenester</a></Link></div>
                {/* <div className={styles.row}><Link href="/"><a>Realizacje</a></Link></div> */}
                <div className={styles.row}><Link href={`/${links.aboutUs}`}><a>Om oss</a></Link></div>
                <div className={styles.row}><Link href={`/${links.contact}`}><a>Kontakt</a></Link></div>
                <div className={styles.row}><Link href={`/${links.personvernpolitikk}`}><a>Personvernpolitikk</a></Link></div>
            </div>

            <div className={styles.col}>
                <div className={styles.row}><h2 className={styles.title}>Tjenester</h2></div>
                <div className={styles.row}><Link href={`/${links.protection}`}><a>Sklisikring</a></Link></div>
                <div className={styles.row}><Link href={`/${links.frictionMeasurement}`}><a>Måling av friksjonskoeffisient og PTV</a></Link></div>
                <div className={styles.row}><Link href={`/${links.cleaning}`}><a>Rengjøring av overflate</a></Link></div>
                <div className={styles.row}><Link href={`/${links.descaling}`}><a>Avkalking</a></Link></div>
                <div className={styles.row}><Link href={`/${links.impregnation}`}><a>Impregnering</a></Link></div>
            </div>
        </div>
    )
}

export default Footer
