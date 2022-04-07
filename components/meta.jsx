import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Meta = ({
    title = 'Sklisikring av gulv – se våre tjenester!',
    description = "Sklibeskyttelse - Vi tilbyr profesjonelle tjenester i Oslo området innen sklisikring av gulv med antiskli midler, måling av gulvets sklisikkerhet, mm.",
    imgUrl = "https://www.sklibeskyttelse.no/images/logo-antyposlizgowa.svg",
    isNoIndex = false
}) => {

    const router = useRouter()
    const url = `https://www.virtoffice.pl${router.asPath}`

    return (
        <Head>
            {/* <!-- HTML Meta Tags --/> */}
            <title>{title}</title>
            <meta name="description" content={description}/>

            {/* <!-- Google / Search Engine Tags --> */}
            <meta itemProp="name" content={title}/>
            <meta itemProp="description" content={description}/>
            <meta itemProp="image" content={imgUrl}/>

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content={url}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={imgUrl}/>

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={imgUrl}/>

            {isNoIndex && <>
                <meta name="robots" content="noindex"></meta>
                <meta name="googlebot" content="noindex"></meta>
            </>}

        </Head>
    )
}

export default Meta
