
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

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
        a protocol, enabling anyone to create peer-to-peer marketplaces.
      </>
    ),
    sources: {
      light: "/img/mediaprotocol.svg",
      dark: "/img/mediaprotocolwhite.svg",
    },
    href: "/overview",
  },
  {
    title: "Media Network",
    description: (
      <>
        Media Network is a decentralized web services marketplace, offering a
        peer-to-peer alternative to industry giants like Google Cloud & AWS.
      </>
    ),
    sources: {
      light: "/img/medianetwork.svg",
      dark: "/img/medianetworkwhite.svg",
    },
    href: "https://www.media.network",
    padding: true,
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
    title: "What is Media Protocol",
    description: (<>
      Learn about the core concepts of the Media Protocol, its governance structure, and key terminology.
    </>),
    content: <img src="/img/01.svg" />,
    href: "/introduction"
  },
  {
    title: "Integrate with Media Protocol",
    description: (
      <>
        Explore the process of integrating with Media Protocol, using the <b>SDK</b> and step-by-step guidance.
      </>
    ),
    content: <img src="/img/04.svg" />,
    href: "/sdk/overview"
  },
  {
    title: "Media Protocol Smart Contracts",
    description: (
      <>Discover the architecture and technical reference of the smart contracts powering the Media Protocol.</>
    ),
    content: <img src="/img/03.svg" />,
    href: "/smart-contracts/overview"
  },
  {
    title: "Media Protocol Governance",
    description: (
      <>
        Understand the governance structure of the Media Protocol, and how to participate.
      </>
    ),
    content: <img src="./img/02.svg" />,   
    href: "/governance/overview",
  }
];

export const GovernanceItems = [
  {
    title: "Governance Forum",
    description: "A forum for governance-related discussions, proposals, and voting on key decisions that shape the future of the protocol.",
    href: "https://gov.mediaprotocol.net/",
    sources: {
      light: "/img/forum.svg",
      dark: "/img/forumwhite.svg",
    },
  },
  {
    title: "Snapshot",
    description: "Off-chain voting interface for community members to signal sentiment during the early stages of a proposal’s life cycle.",
    href: "https://snapshot.org/#/mediaprotocol.eth",
    sources: {
      light: "/img/snapshot.svg",
      dark: "/img/snapshotwhite.svg",
    },
  },
  {
    title: "Tally",
    description: "On-chain governance platform for DAOs to create, vote on, and manage proposals in a transparent and decentralized manner.",
    href: "https://www.tally.xyz/gov/media-protocol-dao",
    sources: {
      light: "/img/tally.svg",
      dark: "/img/tallywhite.svg",
    },
  }
]