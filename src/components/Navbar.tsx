import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#D2B48C",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          color: "black",
          margin: 0,
        }}
      >
        Collector's Hub
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Marketplace
        </Link>

        <Link
          to="/community"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Community Feed
        </Link>

        <Link
          to="/collection"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          My Collection
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
