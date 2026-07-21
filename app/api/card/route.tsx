import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const name = (searchParams.get("name") ?? "JOHN DOE").toUpperCase();
  const number =
    searchParams.get("number") ?? "**** **** **** 1234";
  const expiry = searchParams.get("expiry") ?? "12/29";
  const brand = (searchParams.get("brand") ?? "APEX").toUpperCase();
  const type = (searchParams.get("type") ?? "Premium").toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "675px",
          display: "flex",
          background: "#0f172a",
          padding: "50px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            borderRadius: "36px",
            padding: "50px",
            background:
              "linear-gradient(135deg,#0f172a,#1e293b,#334155)",
            color: "white",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  letterSpacing: "4px",
                  color: "#94a3b8",
                }}
              >
                DIGITAL CARD
              </span>

              <span
                style={{
                  fontSize: "56px",
                  fontWeight: "700",
                }}
              >
                {brand}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  color: "#94a3b8",
                }}
              >
                TYPE
              </span>

              <span
                style={{
                  fontSize: "28px",
                  color: "#38bdf8",
                  fontWeight: "700",
                }}
              >
                {type}
              </span>
            </div>
          </div>

          {/* Chip */}
          <div
            style={{
              display: "flex",
              marginTop: "45px",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "65px",
                borderRadius: "10px",
                background:
                  "linear-gradient(135deg,#ffe082,#d4af37)",
              }}
            />
          </div>

          {/* Card Number */}
          <div
            style={{
              display: "flex",
              marginTop: "60px",
              marginBottom: "90px",
              fontSize: "46px",
              fontWeight: "700",
              letterSpacing: "8px",
            }}
          >
            {number}
          </div>

          {/* Push footer down */}
          <div
            style={{
              display: "flex",
              flexGrow: 1,
            }}
          />

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "#94a3b8",
                }}
              >
                CARD HOLDER
              </span>

              <span
                style={{
                  marginTop: "8px",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                {name}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "#94a3b8",
                }}
              >
                VALID THRU
              </span>

              <span
                style={{
                  marginTop: "8px",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                {expiry}
              </span>
            </div>
          </div>

          {/* Bottom Brand */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#ef4444",
                }}
              />

              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#f59e0b",
                  marginLeft: "-14px",
                }}
              />

              <span
                style={{
                  marginLeft: "12px",
                  fontSize: "22px",
                  color: "#cbd5e1",
                }}
              >
                Apex Network
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 675,
    }
  );
}
