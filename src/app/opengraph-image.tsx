import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8f6f2",
          backgroundImage:
            "radial-gradient(60% 60% at 50% 40%, rgba(124,145,130,0.18) 0%, rgba(124,145,130,0) 70%)",
        }}
      >
        <p
          style={{
            fontSize: 28,
            letterSpacing: 6,
            color: "#6d750a",
            marginBottom: 24,
          }}
        >
          THE KORE
        </p>
        <p
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#3f4406",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          {SITE.tagline}
        </p>
      </div>
    ),
    { ...size }
  );
}
