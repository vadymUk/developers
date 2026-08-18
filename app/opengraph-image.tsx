import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = "Web Studio — розробка сайтів під ключ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background:
          "linear-gradient(135deg, #030712 0%, #0b1220 55%, #082f49 100%)",
        color: "#edf6ff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #7dd3fc, #38bdf8 35%, #8b5cf6)",
          borderRadius: 28,
          color: "#020617",
          display: "flex",
          fontSize: 34,
          fontWeight: 900,
          height: 96,
          justifyContent: "center",
          width: 96,
        }}
      >
        &lt;/&gt;
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          letterSpacing: 8,
          marginTop: 34,
        }}
      >
        {siteConfig.name.toUpperCase()}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 54,
          fontWeight: 700,
          marginTop: 24,
          textAlign: "center",
        }}
      >
        Розробка сайтів під ключ
      </div>
      <div
        style={{
          color: "#a7b2c8",
          display: "flex",
          fontSize: 26,
          marginTop: 22,
        }}
      >
        Landing Page · інтернет-магазини · бізнес-сайти
      </div>
    </div>,
    size,
  );
}
