import React, { useRef } from 'react'
import styles from '../styles/MainForm.module.css'
import axios from 'axios'
import Animate from './animate'
import { Modal } from 'antd'

const AuxForm = () => {

    const fullNameRef = useRef()
    const emailRef = useRef()
    const zgoda1Ref = useRef()
    const formRef = useRef()
    const mainFormRef = useRef()

    const submit = async (e)=>{
        e.preventDefault()

        fullNameRef.current.required = true
        zgoda1Ref.current.required = true
        emailRef.current.required = true

        const validity =  formRef.current.reportValidity()

        if(!validity)
            return

        await axios({
            url: "/api/sendmessage",
            method: "POST",
            data: {
                fullName: e.target.fullName.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                // message: e.target.message.value
            }
        })

        return Modal.success({
            content: "You have successfully sent a message.",
            onOk: ()=>{
                e.target.fullName.value = ''
                e.target.email.value = ''
                e.target.phone.value = ''
                e.target.zgoda1.checked = false
                e.target.zgoda2.checked = false
                fullNameRef.current.required = false
                zgoda1Ref.current.required = false
                emailRef.current.required = false
            }
        })

        console.log('send')
    }


    return (
        <>
            <Animate elementRef={mainFormRef} animationName="fadeInRight10"/>
            <div className={`${styles.mainForm} ${styles.auxForm}`} ref={mainFormRef}>
                <form onSubmit={submit} ref={formRef}>
                    <div className={styles.row}>
                        <h2>
                            Potrzebujesz konsultacji technicznych? Zamów rozmowę:
                        </h2>
                    </div>
                    <div className={styles.row}>
                        <input type="text" name="fullName" placeholder="Imię i nazwisko*" ref={fullNameRef}/>
                    </div>
                    <div className={styles.row}>
                        <input type="text" name="email" placeholder="Email*" ref={emailRef}/>
                    </div>
                    <div className={styles.row}>
                        <input type="text" name="phone" placeholder="Numer telefonu"/>
                    </div>
                    <div className={`${styles.row} ${styles.info}`}>
                        <span>Skontaktujemy się z Państwem jak najszybciej to możliwe.</span>
                    </div>
                    <div className={`${styles.row} ${styles.withCheckbox}`}>
                        <input type="checkbox" name="zgoda1" id="zgoda1" ref={zgoda1Ref}/>
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
                    <div className={styles.row}>
                        <input type="submit" value="Zamów kontakt"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AuxForm
