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
          padding: 70,
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.22,
            backgroundImage:
              "linear-gradient(rgba(22, 208, 230, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(22, 208, 230, 0.2) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", zIndex: 1 }}>
          <div style={{ width: 14, height: 14, backgroundColor: "#16d0e6", marginRight: 18 }} />
          <div style={{ display: "flex", color: "#f1efe9", fontSize: 26, letterSpacing: 7 }}>
            ATLANTA, GEORGIA
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 126, fontWeight: 700, color: "#f1efe9", letterSpacing: 5 }}>
            RAPTURE
            <span style={{ height: 92, width: 4, backgroundColor: "#16d0e6", marginLeft: 32, marginRight: 28 }} />
            <span style={{ color: "#16d0e6", letterSpacing: 10 }}>ATL</span>
          </div>
          <div style={{ display: "flex", marginTop: 30, fontSize: 34, color: "#f1efe9", opacity: 0.8 }}>
            SCREEN PRINTING  /  DTG  /  EMBROIDERY
          </div>
        </div>
        <div style={{ display: "flex", zIndex: 1, color: "#ff3b21", fontSize: 22, fontWeight: 700, letterSpacing: 5 }}>
          CUSTOM APPAREL + MERCH
        </div>
      </div>
    ),
    size,
  );
}
