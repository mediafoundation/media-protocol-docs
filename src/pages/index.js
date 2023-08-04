import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>What is Media Network</>,
    imageUrl: "/media-network/overview",
    description: <>Learn about the core concepts of the Media Network Protocol, its governance structure, and key terminology.</>
  }, //
  {
    title: <>Integrate with Media Network</>,
    imageUrl: "/media-network/overview",
    description: <>Explore the process of integrating with Media Network by building a decentralized p2p with step-by-step guidance.</>
  }, //
  {
    title: <>The Media Network smart contracts</>,
    imageUrl: "/media-network/overview",
    description: <>Discover the architecture of the smart contracts powering the Media Network Protocol.</>
  }, //
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4 aos-init aos-animate", styles.feature)}>
      {imgUrl && (
        <Link className="navbar_link" to={imgUrl}>
          <div className="group gradient-box margin-top--lg">
            <div class="gradient-box-child"></div>
            <div class="gradient-box-content">
              <h3>{title}</h3>
              <p className="lead mb-0">{description}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Media Network"
      description="Documentation"
    >
      {/* <header className={clsx("hero hero--primary", styles.heroBanner)}> */}
      {/* <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p> */}
      {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div> */}
      {/* </div> */}
      {/* </header> */}
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container padding-bottom--lg">
              <div className="row cards__container">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
