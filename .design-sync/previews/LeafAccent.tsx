import { LeafAccent } from "the-kore-ui";

export const Default = () => <LeafAccent />;

export const AsListMarker = () => (
  <ul style={{ listStyle: "none", padding: 0 }}>
    <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <LeafAccent size={20} />
      <span className="text-sm text-ink">Strategy-first engagements</span>
    </li>
    <li style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
      <LeafAccent size={20} color="#6D750A" />
      <span className="text-sm text-ink">Senior team, no hand-offs</span>
    </li>
  </ul>
);
