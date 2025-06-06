import React from "react";
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

  return (
    <LayoutContainer>
      <Sidebar userName={userName} />
      <MainContent>
        <Header userName={userName} />
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;