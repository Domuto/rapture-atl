import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — custom printing in Atlanta`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d0d0f",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#f1efe9", fontSize: 28, letterSpacing: 6 }}>
          ATLANTA, GEORGIA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 120, fontWeight: 700, color: "#f1efe9" }}>
            RAPTURE
            <span style={{ color: "#ff3b21", marginLeft: 24 }}>ATL</span>
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 36, color: "#f1efe9", opacity: 0.7 }}>
            Screen printing · DTF · Embroidery · DTG
          </div>
        </div>
      </div>
    ),
    size,
  );
}
