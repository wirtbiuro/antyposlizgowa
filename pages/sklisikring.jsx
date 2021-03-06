import React, { useRef } from "react";
import Banner from "../components/banner";
import MainForm from "../components/main-form";
import Link from "next/link";
import styles from "../styles/Common.module.css";
import Cards from "../components/cards";
import DiffBlock from "../components/diff-block";
import TrustBlock from "../components/trust-block";
import Footer from "../components/footer";
import AuxForm from "../components/aux-form";
import AntpslzgBreadcrumb from "../components/antpslzgBreadcrumb";
import Animate from "../components/animate";
import {
  phoneLink,
  phone,
  zamowUsluge,
  checkAllServices,
  uslugi,
  links,
} from "../constants";
import BottomBaner from "../components/bottom-banner";
import Meta from "../components/meta";

const Protection = () => {
  const leftRef = useRef();
  const imgRef = useRef();

  return (
    <>
      <Meta />

      <div>
        <Animate elementRef={imgRef} animationName="fadeInUp10" />
        <AntpslzgBreadcrumb
          pathArr={[
            { title: uslugi, href: `/${links.protection}` },
            { title: "Sklisikring" },
          ]}
        />
        <Banner
          backgroundImage="url(/images/floor.png)"
          withwaves={false}
          isFadeInLeft10={true}
        >
          <div className={`${styles.bannerInner}`}>
            <div className={`${styles.left} ${styles.self}`}>
              <h1>Sklisikring</h1>
              <p>
                Dersom du har ansvar for det offentlige rom, svarer du også for
                de smertefulle fallene og skader forårsaket av skliulykker.
                Unngå store erstatningskrav og sørg for brukernes sikkerhet.
                Sjekk hvordan du kan få et gulv med en sklihemmende effekt.
              </p>
              <div className={styles.link}>
                <Link href={`/${links.services}`}>
                  <a>{checkAllServices}</a>
                </Link>
              </div>
            </div>
          </div>
        </Banner>
        <div className={styles.pageBody}>
          <div className={styles.left} ref={leftRef}>
            <img
              src="/images/wet-floor.png"
              className={styles.decorImg}
              ref={imgRef}
            />
            <h2>Sklisikring</h2>
            <p>&nbsp;</p>
            <p>
              Vi bruker antiskli preparater fra CTS Chemistry. Produktene er
              økologiske, og benytter moderne teknologier basert på vann. Derfor
              er kvaliteten på tjenestene våre høy.
            </p>
            {/* <p>Jako jedyna w Polsce firma pracujemy w oparciu o własnej produkcji preparaty chemiczne, które pozwalają nam uzyskać najwyższą jakość świadczonych usług.</p> */}
            <img src="/images/gray.png" />
            <p>&nbsp;</p>
            <h2>Når skal man bruke profesjonell sklisikring?</h2>
            {/* <p>&nbsp;</p> */}
            <p>&nbsp;</p>
            <p>
              Uansett alder, fysisk form eller yrke som utøves er vi alle sammen
              utsatt for skliulykker og smertefulle fall.
            </p>
            <p>
              Gulvets utilstrekkelige sklisikkerhet medfører risiko for
              alvorlige skader som resulterer i lang og kostbar behandling og
              høye erstatningskrav. Derfor er det viktig å bli kjent med og
              bruke alle tilgjengelige tekniske og juridiske midler helt fra
              prosjektering, gjennom overtakelse og også under drift for å
              garantere brukere at gulvet de bruker er trygt.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h2>Leter du etter en effektiv løsning?</h2>
            <p>&nbsp;</p>
            <p>
              Vi tilbyr profesjonelle tjenester innen sklisikring av gulv basert
              på egen, patentert ZAP-teknologi. Vi utfører profesjonelle
              målinger av gulvets sklisikkerhet, og vi utsteder et sertifikat
              som bekrefter målingens resultater, dette vedlegges en utskrift
              med egenskapene til den dynamiske friksjonskoeffisienten til den
              beskyttede overflaten.
            </p>
            <div className={styles.link}>
              <Link href={`/${links.contact}`}>
                <a>{zamowUsluge}</a>
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <AuxForm />
          </div>
        </div>
        <BottomBaner />
        <Footer />
        <div className={styles.footerBar}></div>
      </div>
    </>
  );
};

export default Protection;
