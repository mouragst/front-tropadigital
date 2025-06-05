import React from "react";
import Sidebar from "../Sidebar";
import { 
    LayoutContainer, 
    MainContent 
} from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <LayoutContainer>
    <Sidebar />
    <MainContent>
      {children}
    </MainContent>
  </LayoutContainer>
);

export default Layout;