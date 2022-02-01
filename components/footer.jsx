import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

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
                    <div className={styles.right}><strong>CTS Chemistry Sp. z o.o.</strong></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}></div>
                    <div className={styles.right}><strong>Adres do korespondencji:</strong></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}></div>
                    <div className={styles.right}>ul. Okulickiego 19, 05-500 Piaseczno</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}><i className={styles['phone']}></i></div>
                    <div className={styles.right}>22 750 20 66</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}><i className={styles['envelope']}></i></div>
                    <div className={styles.right}>office@ctservice.com.pl</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}><i className={styles['file']}></i></div>
                    <div className={styles.right}>ul. Frezerów 3, 20-209 Lublin</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}></div>
                    <div className={styles.right}>NIP: 9512513546</div>
                </div>
            </div>

            {/* <div className={styles.col}>
                <div className={styles.row}><h2 className={styles.title}>Informacje</h2></div>
                <div className={styles.row}><Link href="/"><a>Cennik</a></Link></div>
                <div className={styles.row}><Link href="/"><a>Polityka Prywatności</a></Link></div>
                <div className={styles.row}><Link href="/"><a>Polityka plików „cookies”</a></Link></div>
                <div className={styles.row}><Link href="/"><a>Wiedza</a></Link></div>
            </div> */}
            <div className={styles.col}>
                <div className={styles.row}><h2 className={styles.title}>Nawigacja</h2></div>
                <div className={styles.row}><Link href="/"><a>Strona główna</a></Link></div>
                <div className={styles.row}><Link href="/services"><a>Nasze usługi</a></Link></div>
                {/* <div className={styles.row}><Link href="/"><a>Realizacje</a></Link></div> */}
                <div className={styles.row}><Link href="/about-us"><a>O nas</a></Link></div>
                <div className={styles.row}><Link href="/contact"><a>Kontakt</a></Link></div>
            </div>

            <div className={styles.col}>
                <div className={styles.row}><h2 className={styles.title}>Usługi</h2></div>
                <div className={styles.row}><Link href="/protection"><a>Zabezpieczenie antypoślizgowe</a></Link></div>
                <div className={styles.row}><Link href="/friction-measurement"><a>Pomiar współczynnika tarcia i PTV</a></Link></div>
                <div className={styles.row}><Link href="/cleaning"><a>Doczyszczanie powierzchni</a></Link></div>
                <div className={styles.row}><Link href="/descaling"><a>Odkamienianie</a></Link></div>
                <div className={styles.row}><Link href="/impregnation"><a>Impregnacja</a></Link></div>
            </div>
        </div>
    )
}

export default Footer
