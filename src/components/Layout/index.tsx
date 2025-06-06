import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { 
    LayoutContainer, 
    MainContent 
} from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const userName = "Gustavo Moura";
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 900);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LayoutContainer>
      <Sidebar 
        userName={userName} 
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <MainContent>
        <Header 
          userName={userName} 
          onOpenSidebar={() => setSidebarOpen(true)} 
        />
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;