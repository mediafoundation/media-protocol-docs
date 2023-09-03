module.exports = {
  title: "Media Protocol Documentation",
  tagline:
    "A suite of persistent, non-upgradable smart contracts that together create a protocol enabling anyone to build their own decentralized marketplace.",
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
      title: "Media Protocol Docs",
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
            to: '/protocol-overview',
            from: [
              '/media-network/about',
              '/about-intro'
            ]
          },
          {
            to: '/overview',
            from: [
              '/media-network/components',
              '/about-components'
            ]
          },
          {
            to: '/glossary',
            from: [
              '/media-network/glossary',
              '/about-glossary'
            ]
          },
          {
            to: '/media-token',
            from: [
              '/media-token/about',
              '/media-token-about',
              '/media-token/stats',
              '/media-token-stats'
            ]
          },
 /*          {
            to: 'https://www.mediacloud.ws/overview',
            from: [
              '/cdn-marketplace/about',
              '/cdn-marketplace-about'
            ]
          },
          {
            to: 'https://www.mediacloud.ws/for-clients/overview',
            from: [
              '/cdn-marketplace/clients',
              '/cdn-marketplace-clients'
            ]
          },
          {
            to: 'https://www.mediacloud.ws/for-providers/overview',
            from: [
              '/cdn-marketplace/providers',
              '/cdn-marketplace-providers'
            ]
          },
          {
            to: 'https://www.mediacloud.ws/for-providers/CDN/media-edge/about',
            from: [
              '/software/media-edge/about',
              '/cdn-marketplace-edge'
            ]
          }, */
          {
            to: '/faq',
            from: [
              '/cdn-marketplace/faq',
              '/cdn-marketplace-faq'
            ]
          },
          {
            to: "/governance/overview",
            from: [
              '/governance',
              '/media-governance-dao',
              '/media-governance-troubleshooting'
            ]
          },
/*           {
            to: "",
            from: [
              '/media-app/about',
              '/media-app-about'
            ],
          },
          {
            to: "",
            from: [
              '/media-app/troubleshooting',
              '/media-app-troubleshooting'
            ],
          },
          {
            to: "",
            from: [
              '/smart-contracts/about',
              '/media-contracts-about'
            ],
          },
          {
            to: "",
            from: [
              '/smart-contracts/troubleshooting',
              '/media-contracts-troubleshooting'
            ],
          },
          {
            to: "",
            from: [
              '/software/media-server/about',
              '/ms-about'
            ],
          },
          {
            to: "",
            from: [
              '/software/media-server/setup',
              '/ms-setup'
            ],
          },
          {
            to: "",
            from: [
              '/software/media-server/stream',
              '/ms-stream'
            ],
          },
          {
            to: "",
            from: [
              '/software/media-server/integration',
              '/ms-media'
            ],
          },
          {
            to: "",
            from: [
              '/software/media-server/playback',
              '/ms-playback'
            ],
          },
          {
            to: "",
            from: [
              '/software/media-peerpool/about',
              '/peerpool-about'
            ],
          },
          {
            to: "",
            from: [
              '/software/media-peerpool/demo',
              '/peerpool-demo'
            ],
          },
          {
            to: "",
            from: [
              '/software/media-peerpool/setup',
              '/peerpool-setup'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/ipfs/about',
              '/ipfs-about'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/ipfs/setup',
              '/ipfs-setup'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/ipfs/config',
              '/ipfs-config'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/ipfs/upload',
              '/ipfs-upload'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/ipfs/integration',
              '/ipfs-media'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/arweave/about',
              '/ar-about'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/arweave/miner',
              '/ar-miner'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/arweave/gateway',
              '/ar-gateway'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/arweave/upload',
              '/ar-deploy'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/arweave/integration',
              '/ar-media'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/storj/about',
              '/storj-about'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/storj/setup',
              '/storj-setup'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/storj/integration',
              '/storj-media'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/owncast/about',
              '/owncast-about'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/owncast/setup',
              '/owncast-setup'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/owncast/integration',
              '/owncast-media'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/owncast/config',
              '/owncast-config'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/uniswap/about',
              '/uniswap-about'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/uniswap/setup',
              '/uniswap-setup'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/livepeer/about',
              '/livepeer-about'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/livepeer/setup',
              '/livepeer-setup'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/livepeer/connect',
              '/livepeer-connect'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/livepeer/broadcaster',
              '/livepeer-broadcaster'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/livepeer/stream',
              '/livepeer-stream'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/livepeer/integration',
              '/livepeer-media'
            ],
          },
          {
            to: "",
            from: [
              '/tutorials/livepeer/livepeer.com',
              '/livepeer-livepeer.com'
            ],
          },
          {
            to: "",
            from: [
              '/legacy-dcdn/handshake',
              '/hns-about'
            ],
          },
          {
            to: "",
            from: [
              '/legacy-dcdn/handshake',
              '/hns-setup'
            ],
          },
          {
            to: "",
            from: [
              '/legacy-dcdn/handshake',
              '/hns-media'
            ],
          },
          {
            to: "",
            from: [
              '/legacy-dcdn/about',
              '/legacy-about'
            ],
          },
          {
            to: "",
            from: [
              '/legacy-dcdn/setup',
              '/legacy-setup'
            ],
          }, */
        ],
      },
    ],
  ],
};
