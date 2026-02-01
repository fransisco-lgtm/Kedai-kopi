export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>© {year} Kedai Kopi • All rights reserved.</div>
        <div style={{ opacity: .85 }}>Made with ☕ + React</div>
      </div>
    </footer>
  );
}