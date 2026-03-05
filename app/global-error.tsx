"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{
          background: "#1a1814",
          color: "#f2ede4",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <h2 style={{ fontWeight: 600, marginBottom: "1rem" }}>Something went wrong.</h2>
        <button
          onClick={reset}
          style={{
            background: "#e8341a",
            color: "#f2ede4",
            border: "none",
            padding: "0.75rem 2rem",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
