import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Animate.module.css'
import useScrollPosition from '../hooks/useScrollPosition'

const Animate = ({elementRef, animationName}) => {

    const scrollPos = useScrollPosition()

    const [isAnimated, setIsAnimated] = useState(false)
    const [isFirstTime, setIsFirstTime] = useState(true)

    useEffect(()=>{
        if(isFirstTime){
            elementRef.current.style.visibility = 'hidden'
            setIsFirstTime(false)
        }
    }, [isFirstTime, elementRef])

    useEffect(()=>{
        if(!isAnimated){
            const elementTop = elementRef.current.getBoundingClientRect().top
            const height = document.documentElement.clientHeight
            if(height> elementTop){
                elementRef.current.classList.add(styles[`${animationName}`]) 
                elementRef.current.style.visibility = 'visible'
                setIsAnimated(true)
            }
        }
    }, [scrollPos, isAnimated, elementRef])

    return (
        <></>
    )
}

export default Animate
