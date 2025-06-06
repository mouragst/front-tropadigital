import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FadeRouteTransitionContext } from "../../context/TransitionContext";
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
  Divider,
  CloseButton,
  Overlay
} from "./styles";
import * as SVG from "../../assets/svgs";
import Login from "../../pages/Login";

interface SidebarProps {
  userName: string;
  open?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ userName, open = true, onClose }) => {
  const navigate = useNavigate();
  const { triggerMenuToLogin } = useContext(FadeRouteTransitionContext);

  const handleLogout = () => {
    if (triggerMenuToLogin) {
      triggerMenuToLogin(<Login />, () => navigate("/login"));
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <SidebarContainer open={open}>
        <CloseButton onClick={onClose}>
          <SVG.ArrowRightIcon />
        </CloseButton>
        <LogoWrapper>
          <SVG.TropaDigitalLogo />
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
      {/* Overlay para fechar ao clicar fora */}
      <Overlay open={open} onClick={onClose} />
    </>
  );
};

export default Sidebar;