import React from "react";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="bg-yellow-200 h-screen">{children}</div>;
};

export default Layout;
