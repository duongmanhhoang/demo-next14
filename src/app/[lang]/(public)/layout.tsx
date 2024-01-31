import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <Link className="pr-10" href={"/users"}>
          users
        </Link>
        <Link className="pr-10" href={"/posts"}>
          posts
        </Link>
        <Link className="pr-10" href={"/products"}>
          products
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
