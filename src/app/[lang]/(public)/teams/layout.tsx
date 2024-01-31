import Link from "next/link";

const Layout = ({
  children,
  hehe,
  test,
}: {
  children: React.ReactNode;
  hehe: React.ReactNode;
  test: React.ReactNode;
}) => {
  return (
    <div>
      <div>Team ne</div>
      {children}
      {hehe}
      {test}
    </div>
  );
};

export default Layout;
