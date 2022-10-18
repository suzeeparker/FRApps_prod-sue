import { Outlet, Link } from "react-router-dom";

export default function App() {

  return (
    <div>
      <h1>Bookkeeper (with API)</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/orders"  >Orders</Link> |{" "}
        <Link to="/invoices">Invoices</Link>
      </nav>

      <Outlet />

    </div>
  );
}
