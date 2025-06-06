import styled from "styled-components";

const SidebarContainer = styled.aside<{ open?: boolean }>`
  width: 230px;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #eee;
  padding: 32px 0 16px 0;
  position: fixed;
  left: ${({ open }) => (open ? "0" : "-250px")};
  z-index: 1200;
  transition: left 0.3s;
  overflow-y: auto;
  @media (min-width: 901px) {
    position: static;
    left: 0;
    transition: none;
    overflow-y: visible;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const MenuIcon = styled.span`
  display: inline-flex;
  margin-right: 8px;
  svg {
    width: 16px;
    height: 16px;
  }
`;

const MenuTitle = styled.div`
  font-size: 9px;
  color: #A3A3A3;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 28px;
`;

const MenuList = styled.ul`
  padding: 0 0 0 16px;
  flex: 1;
`;

const MenuItem = styled.li<{ active?: boolean }>`
  display: flex;
  width: 180px;
  height: 35px;
  align-items: center;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  margin-right: 16px;
  color: #252525;
  margin-bottom: 8px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
  ${({ active }) =>
    active &&
    `
      width: 180px;
      height: 35px;
      border-radius: 5px;
      background: #CC6237;
      color: #fff;
    `}
  &:hover {
    color: ${({ active }) => (active ? "#ffe3d2" : "rgb(2, 2, 2)")};
    background: ${({ active }) => (active ? "#CC6237" : "#f5e7e1")};
    border-radius: 5px;
  }
`

const BottomMenuList = styled(MenuList)`
  padding-left: 0;
  margin-top: 6px;
`;

const BottomSection = styled.div`
  padding-left: 16px;
`;

const UserProfile = styled.div`
  padding-left: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserAvatar = styled.img`
  width: 45px;
  padding: 3px;
  border-radius: 15px;
  border: 1px solid #cc6237;
  object-fit: cover;
  margin-left: -8px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #333;
`;

const UserRole = styled.div`
  font-size: 13px;
  color: #888;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 32px;
`;

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 8px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1300;
  @media (max-width: 900px) {
    display: block;
  }
  svg {
    width: 24px;
    height: 24px;
    color: #cc6237;
  }
`;

const Overlay = styled.div<{ open?: boolean }>`
  display: none;
  @media (max-width: 900px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.2);
    z-index: 1100;
  }
`;

export {
  SidebarContainer,
  LogoWrapper,
  MenuTitle,
  MenuList,
  MenuItem,
  BottomSection,
  BottomMenuList,
  UserProfile,
  UserAvatar,
  UserInfo,
  UserName,
  UserRole,
  MenuIcon,
  Divider,
  CloseButton,
  Overlay
}