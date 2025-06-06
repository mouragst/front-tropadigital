import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Description } from './styles';
import { CharacterSVG } from '../../assets/svgs';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (seconds === 0) {
      navigate('/login');
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  return (
    <Container>
      <CharacterSVG />
      <Title>404</Title>
      <Description>
        Página não encontrada.<br />
        Você será redirecionado para o login em {seconds} segundo{seconds !== 1 && 's'}.
      </Description>
    </Container>
  );
};

export default NotFoundPage;