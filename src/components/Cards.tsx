import React, { CSSProperties, useEffect, useRef } from "react";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

export function Cards({ items, size = 4, height = "auto" }) {
  const cardsRef = useRef([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      cardsRef.current.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--xPos", `${x}px`);
        card.style.setProperty("--yPos", `${y}px`);
      });
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="cards" ref={wrapperRef}>
      {items.map((item, index) => { 
        return (
        <div
          className="card"
          style={{ "--size": size, "--height": height } as CSSProperties}
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
        >
          <Link to={item.href} style={{position:"absolute", inset:0}}>&nbsp;</Link>
          <div className="card-content">
            {item.sources && (
              <div className="connected-container">
                <div className="connected-feature-card-dots">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="connected-feature-card-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="connected-feature-card-circles">
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ThemedImage
                        height="24px"
                        width="24px"
                        style={item.padding && { padding: "2px" }}
                        alt={item.title}
                        sources={{
                          light: useBaseUrl(item.sources.light),
                          dark: useBaseUrl(item.sources.dark),
                        }}
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            )}
            <h2
              className="hero-landing-subtitle"
              style={{ display: "flex", alignItems: "center" }}
            >
              {/* {item.sources && (
                <ThemedImage
                  height="36px"
                  width="36px"
                  style={{ padding: "3px", marginRight: "10px" }}
                  alt={item.title}
                  sources={{
                    light: useBaseUrl(item.sources.light),
                    dark: useBaseUrl(item.sources.dark),
                  }}
                />
              )} */}
              <a href={item.href} target="_blank">
                {item.title}
              </a>
            </h2>
            <p className="custom-text">{item.description}</p>
            {item.content && item.content}
            {!item.content && <div className="card-dots" />}
          </div>
        </div>
      )
      })}
    </div>
  );
}

export function StackedCards({ items }) {
  return (
    <div className="NotificationAsset_root__FE0I_ NotificationAsset_iso__WK2oW">
      <div className="NotificationAsset_cards__ACT0z">
        {items.map((item, idx) => (
          <div key={idx} className="NotificationAsset_card__KoMdR">
            <div className="NotificationAsset_cardInner__V4DL_">
              <svg
                aria-hidden="true"
                style={{
                  height: "0.625rem",
                  width: "auto",
                  stroke: "rgba(100, 116, 139, 0.3)",
                }}
                fill="none"
              >
                <circle cx="5" cy="5" r="4.5"></circle>
                <circle cx="21" cy="5" r="4.5"></circle>
                <circle cx="37" cy="5" r="4.5"></circle>
              </svg>

              <div
                className="Spacer_root__uoSvA"
                style={{ "--height": "8px" } as CSSProperties}
              ></div>
              <span className="sc-1737a4ce-0 dkdEZD">{item.code}</span>
              <div
                className="Spacer_root__uoSvA"
                style={{ "--height": "12px" } as CSSProperties}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
