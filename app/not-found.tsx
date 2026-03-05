export default function NotFound() {
  return (
    <html lang="en">
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
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "0.5rem", color: "#e8341a" }}>
          404
        </h1>
        <p style={{ color: "#f2ede4", opacity: 0.6, marginBottom: "2rem" }}>
          This page doesn&apos;t exist.
        </p>
        <a
          href="/"
          style={{
            color: "#f2ede4",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          Go home →
        </a>
      </body>
    </html>
  );
}
