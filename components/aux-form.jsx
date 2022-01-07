import React from 'react'
import styles from '../styles/MainForm.module.css'

const AuxForm = () => {

    const submit = (e)=>{
        e.preventDefault()
        console.log('fullName', e.target.fullName.value)
        console.log('email', e.target.email.value)
        console.log('message', e.target.message.value)
        console.log('zgoda1', e.target.zgoda1.checked)
    }

    return (
        <div className={`${styles.mainForm} ${styles.auxForm}`}>
            <form onSubmit={submit}>
                <div className={styles.row}>
                    <h2>
                        Potrzebujesz konsultacji technicznych? Zamów rozmowę:
                    </h2>
                </div>
                <div className={styles.row}>
                    <input type="text" name="fullName" placeholder="Imię i nazwisko*"/>
                </div>
                <div className={styles.row}>
                    <input type="text" name="email" placeholder="Email*"/>
                </div>
                <div className={styles.row}>
                    <input type="text" name="phone" placeholder="Numer telefonu"/>
                </div>
                <div className={styles.row}>
                    <span>Skontaktujemy się z Państwem jak najszybciej to możliwe.</span>
                </div>
                <div className={styles.row}>
                    <input type="checkbox" name="zgoda1" id="zgoda1"/>
                    <label htmlFor="zgoda1">
                        Wyrażam zgodę na przetwarzanie przez CT Service S.A. moich danych osobowych podanych w niniejszym formularzu w celach związanych z prezentacją usług oferowanych przez CT Service S.A. oraz w celach marketingowych.
                    </label>
                </div>
                <div className={styles.row}>
                    <input type="checkbox" name="zgoda2" id="zgoda2"/>
                    <label htmlFor="zgoda2">
                        Wyrażam zgodę na otrzymywanie od CT Service S.A. z siedzibą w Piasecznie przy ul. Okulickiego 19 informacji handlowych na adres elektroniczny podany w niniejszym Formularzu.                    
                    </label>
                </div>
                <div className={styles.row}>
                    <input type="submit" value="Zamów kontakt"/>
                </div>
            </form>
        </div>
    )
}

export default AuxForm
