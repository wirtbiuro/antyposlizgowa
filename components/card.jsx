import React from 'react'
import styles from '../styles/Card.module.css'
import Link from 'next/link'

const Card = ({title, href, aClassName}) => {
    return (
        <div className={styles.card}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <Link href={href}><a className={styles[aClassName]}></a></Link>
                </div> 
                <div className={styles.bottom}>
                    <Link href={href}><a>{title}</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Card
