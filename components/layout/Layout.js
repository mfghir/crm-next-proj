import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="hearder">
        <h2>CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>

      <div className="main">{children}</div>

      <footer className="footer">
        <a href="https://mfgh.vercel.app/" target="_blank" rel="noreferrer">
          mfgh
        </a>
        Next.js course | ARM project &copy;
      </footer>
    </>
  );
};

export default Layout;
