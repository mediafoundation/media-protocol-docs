import useBaseUrl from "@docusaurus/useBaseUrl";
import { CSSProperties } from "react";
import ThemedImage from "@theme/ThemedImage";

export function SDKBento() {
  return (
    <div
      className="relative mt-7 h-[240px] w-full -translate-x-12 sm:mt-0 sm:translate-x-0"
      aria-hidden="true"
      aria-label="A circuit with strobes of light beaming from it towards a snippet of code."
      style={{ "--comet-animation-duration": "0.5s" } as CSSProperties}
    >
      <div className="checkers relative h-full w-[336px]">
        <div className="checkers-top-line absolute top-0"></div>
        <div className="circuit-cover relative z-10 h-[104px] w-[104px] rounded-lg p-2 translate-x-[67px] translate-y-[68px]">
          <svg
            className="circuit-glow absolute -right-1 top-0"
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="104"
            viewBox="0 0 62 104"
            fill="none"
          >
            <g opacity="1" filter="url(#filter0_f_954_14753)">
              <ellipse
                cx="31"
                cy="52"
                rx="32"
                ry="11"
                transform="rotate(-90 31 52)"
                fill="url(#paint0_linear_954_14753)"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter0_f_954_14753"
                x="0"
                y="0"
                width="62"
                height="104"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="10"
                  result="effect1_foregroundBlur_954_14753"
                ></feGaussianBlur>
              </filter>
              <linearGradient
                id="paint0_linear_954_14753"
                x1="68.1892"
                y1="63"
                x2="-15.8837"
                y2="63"
                gradientUnits="userSpaceOnUse"
              >
                <stop className="color-bullets"></stop>
                <stop offset="0.66866" className="color-bullets"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="inner-circuit relative h-full w-full rounded-[2px]">
            <ThemedImage
              height="28px"
              width="48px"
              className="translate-x-[20px] translate-y-[34px]"
              alt="Media Protocol"
              sources={{
                light: useBaseUrl("./img/mediaprotocol.svg"),
                dark: useBaseUrl("./img/mediaprotocolwhite.svg"),
              }}
            />

            <p className="sdk-text absolute bottom-1 left-2 text-[8px] font-medium text-shark-gray-300">
              SDK
            </p>
          </div>
        </div>
        <div
          className="impact-glow impact-glow-2 absolute left-[240px] z-20 h-12 w-[1px] translate-y-[-30px]"
          style={{ "--delay": "0.3s" } as CSSProperties}
        ></div>
        <div
          className="impact-glow impact-glow-3 absolute left-[240px] z-20 h-12 w-[1px] translate-y-[-30px]"
          style={{ "--delay": "0.5s" } as CSSProperties}
        ></div>
        <div
          className="impact-glow static-impact-glow absolute left-[240px] z-20 h-12 w-[1px] translate-y-[-30px]"
          style={{ "--delay": "0.3s" } as CSSProperties}
          id="static"
        ></div>
        <div
          className="impact-glow impact-glow-2 absolute left-[240px] z-20 h-12 w-[1px] translate-y-[-7px]"
          style={{ "--delay": "0s" } as CSSProperties}
        ></div>
        <div
          className="impact-glow impact-glow-2 absolute left-[240px] z-20 h-12 w-[1px] translate-y-[-7px]"
          style={{ "--delay": "0.5s" } as CSSProperties}
        ></div>
        <div
          className="impact-glow static-impact-glow absolute left-[240px] z-20 h-12 w-[1px] translate-y-[-7px]"
          style={{ "--delay": "0.3s" } as CSSProperties}
          id="static"
        ></div>
        <div
          className="impact-glow impact-glow-2 absolute left-[240px] z-20 h-12 w-[1px]  translate-y-[16px]"
          style={{ "--delay": "0.2s" } as CSSProperties}
        ></div>
        <div
          className="impact-glow impact-glow-1 absolute left-[240px] z-20 h-12 w-[1px] translate-y-[16px]"
          style={{ "--delay": "0s" } as CSSProperties}
        ></div>
        <div
          className="impact-glow static-impact-glow absolute left-[240px] z-20 h-12 w-[1px]  translate-y-[16px]"
          style={{ "--delay": "0.3s" } as CSSProperties}
          id="static"
        ></div>
        <div>
          <div className="relative -translate-y-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              className="circuit-comet absolute"
              style={{ "--delay": "0.05s" } as CSSProperties}
            >
              <path
                d="M6 6L12 6"
                stroke="url(#paint0_linear_954_14703)"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <g filter="url(#filter0_f_954_14703)">
                <path
                  d="M6 6L12 6"
                  stroke="url(#paint1_linear_954_14703)"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_954_14703"
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="11"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="2.5"
                    result="effect1_foregroundBlur_954_14703"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_954_14703"
                  x1="12.7097"
                  y1="6"
                  x2="5.45174"
                  y2="5.72985"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_954_14703"
                  x1="12.7097"
                  y1="6"
                  x2="5.45174"
                  y2="5.72985"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="12"
              viewBox="0 0 34 12"
              fill="none"
              className="circuit-comet absolute"
              style={{ "--delay": "0.3s" } as CSSProperties}
            >
              <path
                d="M6 6L28 6"
                stroke="url(#paint0_linear_954_14704)"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <g filter="url(#filter0_f_954_14704)">
                <path
                  d="M6 6L28 6"
                  stroke="url(#paint1_linear_954_14704)"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_954_14704"
                  x="0.5"
                  y="0.5"
                  width="33"
                  height="11"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="2.5"
                    result="effect1_foregroundBlur_954_14704"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_954_14704"
                  x1="30.6022"
                  y1="6"
                  x2="4.44014"
                  y2="2.4295"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_954_14704"
                  x1="30.6022"
                  y1="6"
                  x2="4.44014"
                  y2="2.4295"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative translate-y-[10.5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="12"
              viewBox="0 0 34 12"
              fill="none"
              className="circuit-comet absolute"
              style={{ "--delay": "0s" } as CSSProperties}
            >
              <path
                d="M6 6L28 6"
                stroke="url(#paint0_linear_954_14704)"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <g filter="url(#filter0_f_954_14704)">
                <path
                  d="M6 6L28 6"
                  stroke="url(#paint1_linear_954_14704)"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_954_14704"
                  x="0.5"
                  y="0.5"
                  width="33"
                  height="11"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="2.5"
                    result="effect1_foregroundBlur_954_14704"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_954_14704"
                  x1="30.6022"
                  y1="6"
                  x2="4.44014"
                  y2="2.4295"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_954_14704"
                  x1="30.6022"
                  y1="6"
                  x2="4.44014"
                  y2="2.4295"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="12"
              viewBox="0 0 34 12"
              fill="none"
              className="circuit-comet absolute"
              style={{ "--delay": "0.5s" } as CSSProperties}
            >
              <path
                d="M6 6L28 6"
                stroke="url(#paint0_linear_954_14704)"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <g filter="url(#filter0_f_954_14704)">
                <path
                  d="M6 6L28 6"
                  stroke="url(#paint1_linear_954_14704)"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_954_14704"
                  x="0.5"
                  y="0.5"
                  width="33"
                  height="11"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="2.5"
                    result="effect1_foregroundBlur_954_14704"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_954_14704"
                  x1="30.6022"
                  y1="6"
                  x2="4.44014"
                  y2="2.4295"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_954_14704"
                  x1="30.6022"
                  y1="6"
                  x2="4.44014"
                  y2="2.4295"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative translate-y-[34.5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="12"
              viewBox="0 0 50 12"
              fill="none"
              style={{ "--delay": "0s" } as CSSProperties}
              className="circuit-comet absolute circuit-comet"
            >
              <path
                d="M6 6L44 6"
                stroke="url(#paint0_linear_954_14708)"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <g filter="url(#filter0_f_954_14708)">
                <path
                  d="M6 6L44 6"
                  stroke="url(#paint1_linear_954_14708)"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_954_14708"
                  x="0.5"
                  y="0.5"
                  width="49"
                  height="11"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="2.5"
                    result="effect1_foregroundBlur_954_14708"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_954_14708"
                  x1="48.4946"
                  y1="6"
                  x2="4.88727"
                  y2="-4.27965"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_954_14708"
                  x1="48.4946"
                  y1="6"
                  x2="4.88727"
                  y2="-4.27965"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="12"
              viewBox="0 0 34 12"
              fill="none"
              className="circuit-comet absolute"
              style={{ "--delay": "0.2s" } as CSSProperties}
            >
              <path
                d="M6 6L28 6"
                stroke="url(#paint0_linear_954_14704)"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <g filter="url(#filter0_f_954_14704)">
                <path
                  d="M6 6L28 6"
                  stroke="url(#paint1_linear_954_14704)"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_954_14704"
                  x="0.5"
                  y="0.5"
                  width="33"
                  height="11"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="2.5"
                    result="effect1_foregroundBlur_954_14704"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_954_14704"
                  x1="30.6022"
                  y1="6"
                  x2="4.44014"
                  y2="2.4295"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_954_14704"
                  x1="30.6022"
                  y1="6"
                  x2="4.44014"
                  y2="2.4295"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="color-bullets2"></stop>
                  <stop offset="0.484936" className="color-bullets"></stop>
                  <stop
                    offset="0.860711"
                    className="color-bullets2"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[240px] top-0 h-[480px] w-[353px] -translate-y-6 rounded-lg border border-white/[0.05] p-6 shadow-code-mockup">
        <pre>
          <code className="text-[12px]" style={{ color: "#bd93f9" }}>
            import{" "}
            <span className="text-white">&#123; Sdk, Marketplace &#125;</span>{" "}
            from <span className="text-rose">'media-sdk'</span>;
            <br />
            <br />
            const <span className="text-white">sdk =</span> new{" "}
            <span className="text-white">
              Sdk(&#123; <br />
              {"  "}mnemonic:
            </span>{" "}
            <span className="text-rose">'your mnemonic phrase'</span>
            <br />
            <span className="text-white">&#125;);</span>
            <br />
            <br />
            const <span className="text-white">marketplace =</span> new{" "}
            <span className="text-white">Marketplace(sdk);</span>
            <br />
            <br />
            const <span className="text-white">hash =</span> await{" "}
            <span>marketplace.</span>
            <span className="text-green">initializeMarketplace</span>
            <span className="text-white">
              (&#123;
              <br />
              {"  "}requiredStake: 100,
              <br />
              {"  "}marketFeeTo: sdk.config.walletClient.account.address,
              <br />
              {"  "}marketFeeRate: 50000
              <br />
              &#125;);
            </span>
            <br />
            <br />
            const <span className="text-white">transaction =</span> await{" "}
            <span className="text-white">sdk.config.publicClient.</span>
            <span className="text-green">waitForTransactionReceipt</span>
            <span className="text-white">
              (<br />
              {"  "}&#123; hash: hash &#125;
              <br />
              );
            </span>
            <br />
            <br />
            <br />
            <span className="text-white">console.</span>
            <span className="text-green">log</span>
            <span className="text-white">(transaction.logs[0].topics[1]);</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
