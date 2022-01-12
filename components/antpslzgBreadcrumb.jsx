import React from 'react'
import styles from '../styles/AntpslzgBreadcrumb.module.css'
import { Breadcrumb } from 'antd';
import Link from 'next/link';

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
                            {path.href? <Link href={path.href}><a>{path.title}</a></Link>: path.title}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </div>
        </div>
    )
}

export default AntpslzgBreadcrumb
