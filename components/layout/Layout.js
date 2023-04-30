import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h2>CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>

      <div className="main">{children}</div>

      <footer className="footer">
        <a href="https://fatemeweb.vercel.app/" target="_blank" rel="noreferrer">
        fatemeweb
        </a>
        Next.js course | CRM project &copy;
      </footer>
    </>
  );
};

export default Layout;
