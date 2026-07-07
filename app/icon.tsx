import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Generated app icon / favicon — copper flame on deep navy.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#10324a",
          borderRadius: 14,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 48 48">
          <circle cx="24" cy="26" r="13" fill="none" stroke="#14b8b8" strokeWidth="2.4" opacity="0.6" />
          <path
            d="M24 11c1.6 4.2 6 5.8 6 10.8A6 6 0 0 1 18 22c0-1.9.8-3.4 2-4.6.6 1.1 1.8 1.7 2.6 2.5.7-3.4-1-6.9 1.4-8.9z"
            fill="#f0870a"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
