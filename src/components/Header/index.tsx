import React from 'react';
import { 
    Container, 
    WelcomeSpan, 
    EventsSpan,
    OpenSidebarButton
} from './styles';
import * as SVG from "@/assets/svgs";

interface HeaderProps {
  userName: string;
  onOpenSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, onOpenSidebar }) => {
  return (
    <Container>
      <OpenSidebarButton onClick={onOpenSidebar}>
        <SVG.ArrowLeftIcon />
      </OpenSidebarButton>
      <div>
        <WelcomeSpan>Bem vindo de volta, <strong>{userName}</strong></WelcomeSpan>
        <EventsSpan>Todos eventos</EventsSpan>
      </div>
    </Container>
  );
}

export default Header;