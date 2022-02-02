import React from 'react'
import styles from '../styles/AntpslzgBreadcrumb.module.css'
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { home } from '../constants';

const AntpslzgBreadcrumb = ({pathArr}) => {
    return (
        <div className={styles.antpslzgBreadcrumb}>
            <div className={styles.inner}>
                <Breadcrumb separator="»">
                    <Breadcrumb.Item>
                        <Link href='/'><a>{home}</a></Link>
                    </Breadcrumb.Item>
                    {pathArr.map(path=>(
                        <Breadcrumb.Item key={path.title}>
                            {path.href? <Link href={path.href}><a>{path.title}</a></Link>: path.title}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </div>
        </div>
    )
}

export default AntpslzgBreadcrumb
