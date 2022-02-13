import React, { useRef, useEffect } from 'react'
import styles from '../styles/MainForm.module.css'
import axios from 'axios'
import Animate from './animate'
import { Modal } from 'antd'
import { zgoda1, zgoda2 } from '../constants'

const AuxForm = () => {

    const fullNameRef = useRef()
    const emailRef = useRef()
    const zgoda1Ref = useRef()
    const formRef = useRef()
    const mainFormRef = useRef()
    const field1Ref = useRef()
    const field2Ref = useRef()

    const defaultAdress = 'Gdańsk, ul. Obrońców Wybrzeża 4B'

    useEffect(()=>{
        field1Ref.current.value = defaultAdress 
    },[])


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
                field1: e.target.field1.value,
                field2: e.target.field2.value,
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
                            Kontakt oss:
                        </h2>
                    </div>
                    <div className={styles.row}>
                        <input type="text" name="fullName" placeholder="Navn*" ref={fullNameRef}/>
                    </div>
                    <div className={styles.row}>
                        <input type="text" name="email" placeholder="Epost*" ref={emailRef}/>
                    </div>
                    <div className={styles.row}>
                        <input type="text" name="phone" placeholder="Telefonnummer"/>
                    </div>
                    <div className={`${styles.row} ${styles.city}`}>
                        <input type="text" name="field1" placeholder="Field1" ref={field1Ref}/>
                    </div>
                    <div className={`${styles.row} ${styles.adress}`}>
                        <input type="text" name="field2" placeholder="Field2" ref={field2Ref}/>
                    </div>
                    <div className={`${styles.row} ${styles.info}`}>
                        <span>Vi vil kontakte deg så fort vi kan.</span>
                    </div>
                    <div className={`${styles.row} ${styles.withCheckbox}`}>
                        <input type="checkbox" name="zgoda1" id="zgoda1" ref={zgoda1Ref}/>
                        <label htmlFor="zgoda1">{zgoda1}</label>
                    </div>
                    <div className={`${styles.row} ${styles.withCheckbox}`}>
                        <input type="checkbox" name="zgoda2" id="zgoda2"/>
                        <label htmlFor="zgoda2">{zgoda2}</label>
                    </div>
                    <div className={styles.row}>
                        <input type="submit" value="Send melding"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AuxForm
