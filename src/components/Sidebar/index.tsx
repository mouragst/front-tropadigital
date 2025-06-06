import React from "react";
import { TropaDigitalLogo } from "../../assets/svgs/TropaDigitalSVG";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SidebarContainer,
  LogoWrapper,
  MenuTitle,
  MenuList,
  MenuItem,
  MenuIcon,
  BottomSection,
  BottomMenuList,
  UserProfile,
  UserAvatar,
  UserInfo,
  UserName,
  UserRole,
  Divider
} from "./styles";
import * as SVG from "../../assets/svgs";

interface SidebarProps {
  userName: string;
  isSlidingOut?: boolean;
  onLogout?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ userName }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <SidebarContainer>
      <LogoWrapper>
        <TropaDigitalLogo />
      </LogoWrapper>
      <MenuTitle>Menu</MenuTitle>
      <MenuList>
        <MenuItem active={location.pathname === "/menu/dashboard"}>
          <MenuIcon>
            <SVG.DashboardIcon />
          </MenuIcon>
          Dashboard
        </MenuItem>
        <MenuItem active={location.pathname === "/menu/events"}>
          <MenuIcon>
            <SVG.CalendarIcon />
          </MenuIcon>
          Eventos
        </MenuItem>
        <MenuItem active={location.pathname === "/menu/teams"}>
          <MenuIcon>
            <SVG.TeamIcon />
          </MenuIcon>
          Equipes
        </MenuItem>
        <MenuItem active={location.pathname === "/menu/subscriptions"}>
          <MenuIcon>
            <SVG.GroupIcon />
          </MenuIcon>
          Inscrições
        </MenuItem>
      </MenuList>
      <Divider />
      <BottomSection>
        <UserProfile>
          <UserAvatar src="https://ui-avatars.com/api/?name=Gustavo+de+Moura" alt="Avatar" />
          <UserInfo>
            <UserName>{userName}</UserName>
            <UserRole>Administrador</UserRole>
          </UserInfo>
        </UserProfile>
        <BottomMenuList>
          <MenuItem>
            <MenuIcon>
              <SVG.UserIcon />
            </MenuIcon>
            Alterar dados
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <MenuIcon>
              <SVG.LeaveIcon />
            </MenuIcon>
            Sair
          </MenuItem>
        </BottomMenuList>
      </BottomSection>
    </SidebarContainer>
  );
};

export default Sidebar;