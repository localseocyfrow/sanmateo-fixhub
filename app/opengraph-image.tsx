import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0c2739 0%, #10324a 55%, #164562 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "#0c2739",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="52" height="52" viewBox="0 0 48 48">
              <circle cx="24" cy="26" r="13" fill="none" stroke="#14b8b8" strokeWidth="2.4" opacity="0.6" />
              <path
                d="M24 11c1.6 4.2 6 5.8 6 10.8A6 6 0 0 1 18 22c0-1.9.8-3.4 2-4.6.6 1.1 1.8 1.7 2.6 2.5.7-3.4-1-6.9 1.4-8.9z"
                fill="#f0870a"
              />
            </svg>
          </div>
          <div style={{ display: "flex", gap: 10, fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
            <span>SanMateo</span>
            <span style={{ color: "#f0870a" }}>FixHub</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
            Stove Repair in San Mateo, CA
          </div>
          <div style={{ marginTop: 22, fontSize: 32, color: "#dbe7ef", maxWidth: 880 }}>
            Specialist gas &amp; electric stove, range &amp; cooktop repair across the Peninsula.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#cdf3f3" }}>
          <div style={{ background: "#d97706", color: "white", padding: "10px 22px", borderRadius: 12, fontWeight: 700 }}>
            Call for Stove Repair
          </div>
          <div>Homes &amp; businesses · Gas &amp; electric</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
