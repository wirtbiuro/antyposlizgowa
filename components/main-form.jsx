import React, { useRef } from 'react'
import styles from '../styles/MainForm.module.css'
import axios from 'axios'
import Animate from './animate'
import { Modal } from 'antd'

const MainForm = ({style, title='Potrzebujesz konsultacji? Napisz do nas wiadomość:', isFadeInLeftt10=false}) => {

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
                city: e.target.city.value,
                message: e.target.message.value
            }
        })

        return Modal.success({
            content: "You have successfully sent a message.",
            onOk: ()=>{
                e.target.fullName.value = ''
                e.target.email.value = ''
                e.target.phone.value = ''
                e.target.city.value = ''
                e.target.message.value = ''
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
            <Animate 
                animationName={isFadeInLeftt10? 'fadeInLeft10': 'fadeInRight10'} 
                elementRef={mainFormRef}
            />
            <div className={`${styles.mainForm}`} style={style} ref={mainFormRef}>
                <form onSubmit={submit} ref={formRef}>
                    <div className={styles.row}>
                        <h2>
                            {title}
                        </h2>
                    </div>
                    <div className={styles.row}>
                        <input type="text" name="fullName" placeholder="Imię i nazwisko*" ref={fullNameRef}/>
                        <input type="email" name="email" placeholder="Email*" ref={emailRef}/>
                    </div>
                    <div className={styles.row}>
                        <input type="text" name="phone" placeholder="Numer telefonu"/>
                        <input type="text" name="city" placeholder="Miasto"/>
                    </div>
                    <div className={styles.row}>
                        <textarea name="message" placeholder="Wiadomość" rows={4}/>
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
                    <div className={`${styles.row} ${styles.submit}`}>
                        <input type="submit" value="WYŚLIJ"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default MainForm
