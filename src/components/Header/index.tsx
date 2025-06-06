import React from 'react';
import { 
    Container, 
    WelcomeSpan, 
    EventsSpan 
} from './styles';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <Container>
      <div>
        <WelcomeSpan>Bem vindo de volta, <strong>{userName}</strong></WelcomeSpan>
        <EventsSpan>Todos eventos</EventsSpan>
      </div>
    </Container>
  );
}

export default Header;