import React from 'react'
import styles from '../styles/AntpslzgBreadcrumb.module.css'
import { Breadcrumb } from 'antd';

const AntpslzgBreadcrumb = ({pathArr}) => {
    return (
        <div className={styles.antpslzgBreadcrumb}>
            <div className={styles.inner}>
                <Breadcrumb separator="»">
                    <Breadcrumb.Item>
                        <a href='/'>Home</a>
                    </Breadcrumb.Item>
                    {pathArr.map(path=>(
                        <Breadcrumb.Item>
                            {path.href? <a href={path.href}>{path.title}</a>: path.title}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </div>
        </div>
    )
}

export default AntpslzgBreadcrumb
