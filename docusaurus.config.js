module.exports = {
  title: "Media Protocol Documentation",
  tagline:
    "A suite of persistent, non-upgradable smart contracts that together create a protocol enabling anyone to build their own peer-to-peer marketplaces.",
  url: "https://docs.media.network/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "mediafoundation",
  projectName: "documentation",
  themeConfig: {
    prism: {
      additionalLanguages: ['solidity'],
    },
    image: "https://media.network/images/mediasocial.jpg",
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Media Protocol",
      logo: {
        alt: "Media Protocol Logo",
        src: "/img/medianetwork.svg",
        srcDark: "/img/medianetworkwhite.svg",
      },
      items: [
        {
          href: "https://t.me/Media_FDN",
          label: "Chat",
          position: "right",
        },
        {
          href: "https://github.com/mediafoundation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    editUrl: "https://github.com/mediafoundation/media-protocol-docs/edit/main/",
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          path: "src/docs",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ]
};
