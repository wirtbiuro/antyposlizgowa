import React, { useRef } from 'react'
import styles from '../styles/Banner.module.css'
import MainForm from './main-form'
import Animate from './animate'

const Banner = ({children, withwaves=true, backgroundImage='url(/images/feet.jpg)', isFadeInUp=false,
    isFadeInLeft10=false, backgroundPosition="center center", 
    childrenDivOpacity=0
}) => {

    const paddingBottom = withwaves? '0': '11%'

    const childrenDivRef = useRef()

    return (
        <div className={styles.banner} style={{backgroundImage, paddingBottom, backgroundPosition}}>

            {isFadeInLeft10 && <Animate animationName="fadeInLeft10" elementRef={childrenDivRef}/>}
            {isFadeInUp && <Animate animationName="fadeInUp10" elementRef={childrenDivRef}/>}

            <div className={`${styles.childrenDiv} ${childrenDivOpacity===1 && styles.opacityOne}`} ref={childrenDivRef}>
                {children}
            </div>
            
            {withwaves && <div className={styles.waves} style={{fontSize:0, lineHeight:0}}>
                <svg className="fusion-hills-opacity-candy" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 -0.5 1024 182" preserveAspectRatio="none">
                    <path className={styles.st0} d="M0 182.086h1024V41.593c-28.058-21.504-60.109-37.581-97.075-37.581-112.845 0-198.144 93.798-289.792 93.798S437.658 6.777 351.846 6.777s-142.234 82.125-238.49 82.125c-63.078 0-75.776-31.744-113.357-53.658L0 182.086z"></path>
                    <path className={styles.st1} d="M1024 181.062v-75.878c-39.731 15.872-80.794 27.341-117.658 25.805-110.387-4.506-191.795-109.773-325.53-116.224-109.158-5.12-344.166 120.115-429.466 166.298H1024v-.001z"></path>
                    <path className={styles.st2} d="M0 182.086h1024V90.028C966.451 59.103 907.059 16.3 824.115 15.071 690.278 13.023 665.19 102.93 482.099 102.93S202.138-1.62 74.24.019C46.49.326 21.811 4.217 0 9.849v172.237z"></path>
                    <path className={styles.st3} d="M0 182.086h1024V80.505c-37.171 19.558-80.691 35.328-139.571 36.25-151.142 2.355-141.619-28.57-298.496-29.184s-138.854 47.002-305.459 43.725C132.813 128.428 91.238 44.563 0 28.179v153.907z"></path>
                    <path className={styles.st4} d="M0 182.086h1024v-77.312c-49.05 20.07-120.525 42.394-193.229 42.086-128.922-.512-159.846-72.294-255.795-72.294-89.088 0-134.656 80.179-245.043 82.022S169.063 99.346 49.971 97.401C32.768 97.094 16.077 99.244 0 103.135v78.951z"></path>
                </svg>
            </div>}
            {/* <div className="fusion-section-separator-spacer fusion-section-separator-fullwidth">
                <div className="fusion-section-separator-spacer-height" style={{paddingTop: '16.773438%'}}>
                </div>
            </div> */}
        </div>
    )
}

export default Banner
