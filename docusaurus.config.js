module.exports = {
  title: "Media Network Documentation",
  tagline:
    "A suite of persistent, non-upgradable smart contracts that together create a protocol enabling anyone to build their own decentralized marketplace.",
  url: "https://docs.media.network/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "mediafoundation",
  projectName: "documentation",
  themeConfig: {
    image: "https://media.network/images/mediasocial.jpg",
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Media Network Docs",
      logo: {
        alt: "Media Network Logo",
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
    footer: {
      links: [
        {
          title: "Misc",
          items: [
            {
              label: "Launch App",
              href: "https://app.media.network",
            },
            {
              label: "Network Status",
              href: "https://status.media.network",
            },
            {
              label: "Back to home",
              href: "https://media.network",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/Media_FDN",
            },
            {
              label: "Telegram",
              href: "https://t.me/Media_FDN",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/Xxv5euvmva",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/mediafoundation",
            },
            {
              label: "Coingecko",
              href: "https://www.coingecko.com/en/coins/media-network",
            },
            {
              label: "Blog",
              href: "https://www.media.network/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Media Foundation`,
    },
    editUrl: "https://github.com/mediafoundation/documentation/edit/main/",
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
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/media-network/about',
            from: '/about-intro',
          },
          {
            to: '/media-network/components',
            from: '/about-components',
          },
          {
            to: '/media-network/glossary',
            from: '/about-glossary',
          },
          {
            to: '/media-token/about',
            from: '/media-token-about',
          },
          {
            to: '/media-token/stats',
            from: '/media-token-stats',
          },
          {
            to: '/cdn-marketplace/about',
            from: '/cdn-marketplace-about',
          },
          {
            to: '/cdn-marketplace/clients',
            from: '/cdn-marketplace-clients',
          },
          {
            to: '/cdn-marketplace/providers',
            from: '/cdn-marketplace-providers',
          },
          {
            to: '/software/media-edge/about',
            from: '/cdn-marketplace-edge',
          },
          {
            to: '/cdn-marketplace/faq',
            from: '/cdn-marketplace-faq',
          },
          {
            to: '/media-app/about',
            from: '/media-app-about',
          },
          {
            to: '/media-app/troubleshooting',
            from: '/media-app-troubleshooting',
          },
          {
            to: '/smart-contracts/about',
            from: '/media-contracts-about',
          },
          {
            to: '/smart-contracts/troubleshooting',
            from: '/media-contracts-troubleshooting',
          },
          {
            to: '/governance',
            from: [
              '/media-governance-dao',
              '/media-governance-troubleshooting'
            ]
          },
          {
            to: '/software/media-server/about',
            from: '/ms-about',
          },
          {
            to: '/software/media-server/setup',
            from: '/ms-setup',
          },
          {
            to: '/software/media-server/stream',
            from: '/ms-stream',
          },
          {
            to: '/software/media-server/integration',
            from: '/ms-media',
          },
          {
            to: '/software/media-server/playback',
            from: '/ms-playback',
          },
          {
            to: '/software/media-peerpool/about',
            from: '/peerpool-about',
          },
          {
            to: '/software/media-peerpool/demo',
            from: '/peerpool-demo',
          },
          {
            to: '/software/media-peerpool/setup',
            from: '/peerpool-setup',
          },
          {
            to: '/tutorials/ipfs/about',
            from: '/ipfs-about',
          },
          {
            to: '/tutorials/ipfs/setup',
            from: '/ipfs-setup',
          },
          {
            to: '/tutorials/ipfs/config',
            from: '/ipfs-config',
          },
          {
            to: '/tutorials/ipfs/upload',
            from: '/ipfs-upload',
          },
          {
            to: '/tutorials/ipfs/integration',
            from: '/ipfs-media',
          },
          {
            to: '/tutorials/arweave/about',
            from: '/ar-about',
          },
          {
            to: '/tutorials/arweave/miner',
            from: '/ar-miner',
          },
          {
            to: '/tutorials/arweave/gateway',
            from: '/ar-gateway',
          },
          {
            to: '/tutorials/arweave/upload',
            from: '/ar-deploy',
          },
          {
            to: '/tutorials/arweave/integration',
            from: '/ar-media',
          },
          {
            to: '/tutorials/storj/about',
            from: '/storj-about',
          },
          {
            to: '/tutorials/storj/setup',
            from: '/storj-setup',
          },
          {
            to: '/tutorials/storj/integration',
            from: '/storj-media',
          },
          {
            to: '/tutorials/owncast/about',
            from: '/owncast-about',
          },
          {
            to: '/tutorials/owncast/setup',
            from: '/owncast-setup',
          },
          {
            to: '/tutorials/owncast/integration',
            from: '/owncast-media',
          },
          {
            to: '/tutorials/owncast/config',
            from: '/owncast-config',
          },
          {
            to: '/tutorials/uniswap/about',
            from: '/uniswap-about',
          },
          {
            to: '/tutorials/uniswap/setup',
            from: '/uniswap-setup',
          },
          {
            to: '/tutorials/livepeer/about',
            from: '/livepeer-about',
          },
          {
            to: '/tutorials/livepeer/setup',
            from: '/livepeer-setup',
          },
          {
            to: '/tutorials/livepeer/connect',
            from: '/livepeer-connect',
          },
          {
            to: '/tutorials/livepeer/broadcaster',
            from: '/livepeer-broadcaster',
          },
          {
            to: '/tutorials/livepeer/stream',
            from: '/livepeer-stream',
          },
          {
            to: '/tutorials/livepeer/integration',
            from: '/livepeer-media',
          },
          {
            to: '/tutorials/livepeer/livepeer.com',
            from: '/livepeer-livepeer.com',
          },
          {
            to: '/legacy-dcdn/handshake',
            from: '/hns-about',
          },
          {
            to: '/legacy-dcdn/handshake',
            from: '/hns-setup',
          },
          {
            to: '/legacy-dcdn/handshake',
            from: '/hns-media',
          },
          {
            to: '/legacy-dcdn/about',
            from: '/legacy-about',
          },
          {
            to: '/legacy-dcdn/setup',
            from: '/legacy-setup',
          },
        ],
      },
    ],
  ],
};
