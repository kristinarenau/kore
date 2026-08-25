import { LeafPattern } from "the-kore-ui";

export const Default = () => (
  <div style={{ position: "relative", width: 320, height: 200, background: "#F8F6F2" }}>
    <LeafPattern />
  </div>
);

export const HigherOpacity = () => (
  <div style={{ position: "relative", width: 320, height: 200, background: "#F8F6F2" }}>
    <LeafPattern opacity={0.25} color="#6D750A" />
  </div>
);
