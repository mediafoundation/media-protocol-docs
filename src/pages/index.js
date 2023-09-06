import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>What is Media Protocol</>,
    imageUrl: "/introduction",
    description: <>Learn about the core concepts of the Media Protocol, its governance structure, and key terminology.</>
  }, //
  {
    title: <>Integrate with Media Protocol</>,
    imageUrl: "/sdk/overview",
    description: <>Explore the process of integrating with Media Protocol, using the SDK and step-by-step guidance.</>
  }, //
  {
    title: <>Media Smart Contracts</>,
    imageUrl: "/smart-contracts/overview",
    description: <>Discover the architecture and technical reference of the smart contracts powering the Media Protocol.</>
  }, //
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4 aos-init aos-animate", styles.feature)}>
      {imgUrl && (
        <Link className="navbar_link" to={imgUrl}>
          <div className="group gradient-box margin-bottom--lg">
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
      title="Media Protocol"
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
        <div className="container">
            <h1 className="hero__title margin--lg padding--lg">Welcome to Media Protocol Docs</h1>
        </div>
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
