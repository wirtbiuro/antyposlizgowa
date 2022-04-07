import React from 'react'
import styles from '../styles/Personvernpolitikk.module.css'
import Link from 'next/link'
import Footer from '../components/footer'
import Meta from '../components/meta'

const Personvernpolitikk = () => {

    return (
        <>

            <Meta />

            <div>
                <div className={styles.personvernpolitikk}>

                    <h1>PERSONVERNPOLITIKK OG INFORMASJONSKAPSLER</h1>
                    <h2>§ 1 Definisjoner</h2>
                    <p>I forbindelse med denne personvernpolitikken brukes det følgende begrep:</p>
                    <p>
                        <strong>Nettsted</strong> – nettside som fungerer under linken 
                        <Link href='https://www.sklibeskyttelse.no'><a>https://www.sklibeskyttelse.no</a></Link>
                    </p>
                    <p><strong>Administrator</strong> – BLB Spółka z ograniczoną odpowiedzialnością Spółka Komandytowa med sitt hovedkontor i Gdańsk (80-726), ul. Zawodzie 20, Polen, e-post: post@sklibeskyttelse.no, NIP 5833186787, REGON 362717625, registrert i Krajowy Rejestr Sądowy [Polsk register for selskaper og stiftelser] ført av Sąd Rejonowy Gdańsk-Północ w Gdańsku, VII Wydział Gospodarczy Krajowego Rejestru Sądowego [Gdańsk-Północ Tingrett i Gdańsk, 7. avdeling for næringssaker ved polsk register for selskaper og stiftelser] med nummeret KRS 0000579968</p>
                    <p><strong>Bruker</strong> – en fysisk person som besøker nettstedet</p>

                    <h2>§ 2 Generelle bestemmelser</h2>
                    <p>1. Brukerens personopplysninger behandles etter Ustawa o ochronie danych osobowych [polsk lov om personvern ] av den 29 august 1997, Ustawa o świadczeniu usług drogą elektroniczną [lov om elektroniske tjenester ] av den 18 juli 2002 og EUs forordning for personvern 2016/679 av 27.04.2016 som gjelder vern av fysiske personer i forbindelse med behandling av personopplysninger og om fri utveksling av slike opplysninger, samt oppheving av direktiv 95/46/WE (alminnelig personvernforordning) (Dz.Urz. UE L 119, s. 1).</p>
                    <p>2. Administrator gjør alt i sin makt for å beskytte personopplysninger.</p>
                    <p>3. Administrator forplikter seg til å følge eventuelle endringer i forskrifter gjeldende personvern. Det gjelder bl.a. Eus forordning for personvern av 27.04.2016.</p>
                    <p>4. Administrator er klar over risikoen som følger av behandling av personopplysninger på Internett, og erklærer derfor at han gjør sitt ytterste for å sikre et tilstrekkelig beskyttelsesnivå av personlige opplysninger og sikkerhet av brukere.</p>
                    
                    <h2>§ 3 Omfang av samlet data</h2>
                    <p>Administrator deler ikke opplysninger samlet fra nettstedets brukere med tredjeparter, bortsett fra offentlig administrasjon eller domstol som er berettiget til det.</p>

                    <h2>§ 4 Håndtering av personopplysninger</h2>
                    <p>1. Bruk av nettstedet er frivilig.</p>
                    <p>2. Administrator samler og analyserer opplysninger fra systemlogg, slik som domenenavn nettstedets brukere kobler seg til fra, antall sidevisninger, antall besøk på nettstedet.</p>
                    <p>3. Bruker har rett til å kontrollere behandling av opplysninger som vedrører ham i administratorens datasamling. Det gjelder særlig rett til å supplere, oppdatere og korrigere personopplysninger, midlertidig eller varig opphør av dens behandling eller fjerning dersom disse opplysningene er ufullstendige, utdaterte, usanne eller ble samlet i strid med lov.</p>
                    <p>4. Brukerens personopplysninger deles ikke med tredjepersoner for markedsføringsformål.</p>

                    <h2>§ 5 Brukerens plikter</h2>
                    <p>1. Brukeren er forpliktet til å anvende nettstedet på en lovlig og anstendig måte, med tanke på respekt for andres materielle og intelektuelle rettigheter og eiendom.</p>
                    <p>2. Alt innhold publisert på nettstedet eies av administrator og er beskyttet av opphavsrett. Brukeren er fullstendig ansvarlig for skade som skyldes bruk av innhold på nettstedet uten administratorens samtykke.</p>
                    <p>3. Enhver bruk av noen som helst element av innholdet på nettstedet, uten administratorens samtykke, er et brudd på opphavsretten.</p>

                    <h2>§ 6 Informasjonskapsler</h2>
                    <p>1. Administratorens nettstedet bruker informasjonskapsler. Hvis bruker ikke endrer innstillinger for nettleseren, er det ensbetydende med å samtykke til bruk av kapsler.</p>
                    <p>2. Informasjonskapsler er IT-data, særlig tekstfiler, som er lagret i brukerens dataenheter og er ment for bruk av nettsiden. Informasjonskapsler inneholder vanligvis navn av nettstedet de kommer fra, lagringstid på dataenheter og et unikt nummer.</p>
                    <p>3. Informasjonskapsler, som brukes av nettstedet, lagrer ikke personopplysninger eller andre informasjoner hentet fra brukeren. Nettstedet bruker informasjonskapsler for å identifisere nettleserenssesjon. Informasjonskapsler muliggjør bruk av funksjonene til nettstedet.</p>
                    <p>4. Bruk av informasjonskapsler tillater ikke nedlasting av noen som helst personopplysninger, adresseinformasjoner eller andre konfidensielle informasjoner fra brukerens datamaskin.</p>

                    <h2>§ 7 Fakturering</h2>
                    <p>Deres personopplysninger skal behandles for å utstede fakturaer og for regnskapsformål. Opplysningene kan kun deles med enheter som er berettiget til det i henhold til loven. De har rett til å få adgang til Deres personopplysninger og korrigere dem. Det er frivillig å oppgi personopplysninger, men det er nødvendig til utstedelse av faktura.</p>

                    <h2>8 Avtaleinngåelse</h2>
                    <p>I henhold til Artikkel 13 av alminnelig personvernforordning av den 17.04.2016 (Dz.Urz. UE L 119, s. 1). informerer vi at:</p>
                    <p>Deres personopplysninger skal behandles for å sikre gjennomføring av inngått avtale på grunnlag av Artikkel 6 ledd 1 bokstav b av alminnelig personvernforordning av den 17.04.2016</p>
                    <p>Deres personopplysninger vil kun deles med enheter som er berettiget til å motta personopplysninger. Deres personopplysninger vil oppbevares på grunnlag av Administratorens begrunnet interesser. De har rett til å få adgang til Deres personopplysninger, samt korrigering, fjerning eller begrensing av behandling. De har rett til å klage til et tilsynsorgan.</p>
                    <p>Det er frivillig å oppgi personopplysninger, men dersom det nektes, kan det umuliggjøre inngåelse av avtalen.</p>

                    <h2>§ 9 Sluttbestemmelser</h2>
                    <p>1. Administrator opprettholder tekniske og organisatoriske tiltak som sikrer personopplysninger som bearbeides. Beskyttelse er tilpasset kategori personopplysninger. Hovedformålet er å hindre upassende eller ufrivillige utleveringer, bruk, tilgang, tap, endring eller skade av personopplysninger og behandling som er i strid med gjeldende lover.</p>
                    <p>2. Administrator formidler tekniske midler som forebygger uautorisert innsamling og modifisering av personopplysninger som sendes elektronisk.</p>
                    <p>3. I saker som ikke omfattes av denne personvernpolitikken, gjelder de relevante forskrifter av polsk lov.</p>
                    <p>4. De ovennevnte reglene kan endres i fremtiden. I dette tilfellet vil administratoren informere.</p>

                </div>

                <Footer/>

            </div>
        
        </>

    )
}

export default Personvernpolitikk
