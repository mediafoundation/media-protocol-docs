
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { SDKBento } from "./SDKBento";

export function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={"col col--6 aos-init aos-animate"}>
      {imgUrl && (
        <Link className="navbar_link" to={imgUrl}>
          <div className="group gradient-box margin-bottom--lg">
            <div className="gradient-box-child"></div>
            <div className="gradient-box-content">
              <h3>{title}</h3>
              <p className="lead mb-0">{description}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
  
export const Items = [
  {
    title: "Media Protocol",
    description: (
      <>
        A suite of persistent, non-upgradable smart contracts that together form
        a protocol, enabling anyone to create unstoppable peer-to-peer
        marketplaces.
      </>
    ),
    sources: {
      light: "/img/mediaprotocol.svg",
      dark: "/img/mediaprotocolwhite.svg",
    },
    href: "./overview",
  },
  {
    title: "Media Network",
    description: (
      <>
        Media Network is a decentralized web services marketplace, offering a
        peer-to-peer alternative to industry giants like Google Cloud & AWS.
        It's anchored in the Media Protocol's permissionless system.
      </>
    ),
    sources: {
      light: "/img/medianetwork.svg",
      dark: "/img/medianetworkwhite.svg",
    },
    href: "https://www.media.network",
  },
  {
    title: "Media Foundation",
    description: (
      <>
        This entity acts as the driving force behind the development of the
        Media Protocol and Media Network.
      </>
    ),
    sources: {
      light: "/img/mediafoundation.svg",
      dark: "/img/mediafoundationwhite.svg",
    },
    href: "https://x.com/Media_FDN",
  },
];

export const Items2 = [
  {
    title: "Media SDK",
    description: (
      <>
        Comprehensive toolkit designed for seamless interaction with the Media Protocol's contracts. Developed in JavaScript, it harnesses the power of the viem library, providing an intuitive interface for engaging with the Media Protocol.
      </>
    ),
    content: <SDKBento />,
    href: "./sdk/overview",
  },
  {
  },
];

export const GovernanceItems = [
  {
    title: "Governance Forum",
    description: "A forum for governance-related discussions, proposals, and voting on key decisions that shape the future of the protocol.",
    href: "https://gov.mediaprotocol.net/",
    svg: <svg
    width={24} height={24} 
    viewBox="0 0 821.14687 719.54102"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="rotate(-60.299406,259.81128,1200.169)">
      <path
        d="m 1330.1345,655.52043 -633.87937,-3.40652 62.82445,110.33986 506.09372,2.71995 z"
      />
      <path
        d="m 1425.2362,821.03192 -634.74526,-3.40871 62.82453,110.33981 506.95753,2.72556 z"
      />
      <path
        d="m 1327.7939,985.51267 -511.16283,-2.74692 -64.96122,109.65325 448.57635,2.4101 -95.5608,161.3049 -61.2975,-107.794 -64.62078,-0.3466 123.79828,217.6992 z"
      />
    </g>
  </svg>
  },
  {
    title: "Snapshot",
    description: "Off-chain voting interface for community members to signal sentiment during the early stages of a proposal’s life cycle.",
    href: "https://snapshot.org/#/mediaprotocol.eth",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="20 17 39 46"><g filter="url(#i100)"><path  d="m21.197 44.342 14.647-.01-8.395 16.891c-.595 1.198.88 2.348 1.884 1.47l27.295-23.865c.749-.655.29-1.894-.703-1.896l-15.073-.017L49.6 19.694c.576-1.134-.824-2.236-1.778-1.401l-27.41 23.94c-.834.729-.32 2.11.785 2.108v.002Z"></path></g><path d="m22.23 43.342 15.043-.01-8.622 16.891c-.611 1.198.904 2.348 1.934 1.47l28.033-23.865c.769-.655.298-1.894-.722-1.896l-15.48-.017L51.4 18.694c.59-1.134-.847-2.236-1.827-1.401l-28.15 23.94c-.858.729-.33 2.11.806 2.108v.002Z"></path><defs></defs></svg>
  },
  {
    title: "Tally",
    description: "On-chain governance platform for DAOs to create, vote on, and manage proposals in a transparent and decentralized manner.",
    href: "https://www.tally.xyz/gov/media-protocol-dao",
    svg: <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width={24} height={24} viewBox="0 0 542.21 741.24"><g><path clipRule="evenodd" d="M441.854 416.343V289.117L65.79 76.7145V37.6758L476.308 269.536V435.8L441.854 416.343ZM344.904 472.413L310.451 452.956V684.727L344.904 704.185V472.413Z"  fillRule="evenodd"></path><path clipRule="evenodd" d="M507.752 378.667V251.441L131.688 39.0387V0L542.205 231.86V398.124L507.752 378.667ZM410.27 508.5L376.366 489.5V676L410.27 695V508.5Z"  fillRule="evenodd"></path><path d="M410.518 306.59V472.855L279.114 398.601V741.239L131.475 657.797V315.248L0 240.995V74.7305L410.518 306.59Z" ></path></g></svg>
  }
]