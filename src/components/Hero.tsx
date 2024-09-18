import { StackedCards } from "./Cards";

const items = [
  {
    title: "Compile a Basic Contract",
    code: (
      <div>
      <span style={{ color: "#569CD6" }}>contract</span> <span style={{ color: "#DCDCAA" }}>SimpleInitializeMarketplace</span> {"{"}<br />
      &nbsp;&nbsp;<span style={{ color: "#569CD6" }}>Marketplace</span> marketplace;<br />
      <br />
      &nbsp;&nbsp;<span style={{ color: "#569CD6" }}>constructor</span>(<span style={{ color: "#569CD6" }}>address</span> _marketplaceAddress) {"{"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;marketplace = <span style={{ color: "#DCDCAA" }}>Marketplace</span>(_marketplaceAddress);<br />
      &nbsp;&nbsp;{"}"}<br />
      <br />
      &nbsp;&nbsp;<span style={{ color: "#569CD6" }}>function</span> initializeMarketplace() <span style={{ color: "#569CD6" }}>external</span> <span style={{ color: "#569CD6" }}>returns</span> (<span style={{ color: "#569CD6" }}>uint</span> marketplaceId) {"{"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;marketplaceId = marketplace.initializeMarketplace(<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#B5CEA8" }}>5000000000000000000</span>, <span style={{ color: "#6A9955" }}>// marketplace min required liquidity</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;msg.sender, <span style={{ color: "#6A9955" }}>// marketplace owner</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#B5CEA8" }}>3000</span> <span style={{ color: "#6A9955" }}>// 3% fee</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;);<br />
      &nbsp;&nbsp;{"}"}<br />
      {"}"}
      </div>
    ),
  },
  {
    title: "Compile a Basic Contract",
    code: (
      <div>
      <span style={{ color: "#569CD6" }}>contract</span> <span style={{ color: "#DCDCAA" }}>SimpleInitializeMarketplace</span> {"{"}<br />
      &nbsp;&nbsp;<span style={{ color: "#569CD6" }}>Marketplace</span> marketplace;<br />
      <br />
      &nbsp;&nbsp;<span style={{ color: "#569CD6" }}>constructor</span>(<span style={{ color: "#569CD6" }}>address</span> _marketplaceAddress) {"{"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;marketplace = <span style={{ color: "#DCDCAA" }}>Marketplace</span>(_marketplaceAddress);<br />
      &nbsp;&nbsp;{"}"}<br />
      <br />
      &nbsp;&nbsp;<span style={{ color: "#569CD6" }}>function</span> initializeMarketplace() <span style={{ color: "#569CD6" }}>external</span> <span style={{ color: "#569CD6" }}>returns</span> (<span style={{ color: "#569CD6" }}>uint</span> marketplaceId) {"{"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;marketplaceId = marketplace.initializeMarketplace(<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#B5CEA8" }}>5000000000000000000</span>, <span style={{ color: "#6A9955" }}>// marketplace min required liquidity</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;msg.sender, <span style={{ color: "#6A9955" }}>// marketplace owner</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#B5CEA8" }}>3000</span> <span style={{ color: "#6A9955" }}>// 3% fee</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;);<br />
      &nbsp;&nbsp;{"}"}<br />
      {"}"}
      </div>
    ),
  }
]

export function Hero() {
  return (
    <div className="row margin-top--xl margin-bottom--xl" style={{ alignItems: 'center' }}>
      <div className="col col--6">
        <h1 className="hero__title">Media Protocol</h1>
        <p className="hero__subtitle">
          Most popular smart contract framework for building decentralized
          marketplaces.
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="button button--primary">Get Started</button>
          <button className="button button--outline button--secondary">View on GitHub</button>
        </div>
      </div>
      <div className="col col--6">
        <StackedCards items={items} />
      </div>
    </div>
  );
}