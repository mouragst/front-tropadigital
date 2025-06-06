import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 230px;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #eee;
  padding: 32px 0 16px 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const MenuIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const MenuTitle = styled.div`
  font-size: 9px;
  color: #A3A3A3;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 32px;
  margin-bottom: 8px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0 0 0 16px;
  margin: 0;
  flex: 1;
`;

const MenuItem = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #252525;
  margin-bottom: 20px;
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
  }
`

const BottomMenuList = styled(MenuList)`
  padding-left: 0;
  margin-top: 16px;
`;

const BottomSection = styled.div`
  padding-left: 16px;
`;

const UserProfile = styled.div`
  padding-left: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserAvatar = styled.img`
  width: 45px;
  height: 45px;
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
  Divider
}