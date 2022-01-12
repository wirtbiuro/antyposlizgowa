import React from 'react'
import styles from '../styles/MainForm.module.css'

const MainForm = ({style, title='Potrzebujesz konsultacji? Napisz do nas wiadomość:'}) => {

    const submit = (e)=>{
        e.preventDefault()
        console.log('fullName', e.target.fullName.value)
        console.log('email', e.target.email.value)
        console.log('message', e.target.message.value)
        console.log('zgoda1', e.target.zgoda1.checked)
    }

    return (
        <div className={styles.mainForm} style={style}>
            <form onSubmit={submit}>
                <div className={styles.row}>
                    <h2>
                        {title}
                    </h2>
                </div>
                <div className={styles.row}>
                    <input type="text" name="fullName" placeholder="Imię i nazwisko*"/>
                    <input type="text" name="email" placeholder="Email*"/>
                </div>
                <div className={styles.row}>
                    <input type="text" name="phone" placeholder="Numer telefonu"/>
                    <input type="text" name="city" placeholder="Miasto"/>
                </div>
                <div className={styles.row}>
                    <textarea name="message" placeholder="Wiadomość" rows={4}/>
                </div>
                <div className={`${styles.row} ${styles.withCheckbox}`}>
                    <input type="checkbox" name="zgoda1" id="zgoda1"/>
                    <label htmlFor="zgoda1">
                        Wyrażam zgodę na przetwarzanie przez CT Service S.A. moich danych osobowych podanych w niniejszym formularzu w celach związanych z prezentacją usług oferowanych przez CT Service S.A. oraz w celach marketingowych.
                    </label>
                </div>
                <div className={`${styles.row} ${styles.withCheckbox}`}>
                    <input type="checkbox" name="zgoda2" id="zgoda2"/>
                    <label htmlFor="zgoda2">
                        Wyrażam zgodę na otrzymywanie od CT Service S.A. z siedzibą w Piasecznie przy ul. Okulickiego 19 informacji handlowych na adres elektroniczny podany w niniejszym Formularzu.                    
                    </label>
                </div>
                <div className={`${styles.row} ${styles.submit}`}>
                    <input type="submit" value="WYŚLIJ"/>
                </div>
            </form>
        </div>
    )
}

export default MainForm
