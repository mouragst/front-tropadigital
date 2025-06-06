import React, { 
  useState, 
  useContext 
} from "react";
import { useNavigate } from "react-router-dom";
import { FadeRouteTransitionContext } from "@/context/TransitionContext";
import {
  Container,
  LoginBox,
  LeftLayout,
  LeftContent,
  Title,
  Subtitle,
  RightLayout,
  OrangeBox,
  AvatarImage,
  InputGroup,
  InputLabel,
  Input,
  PasswordWrapper,
  LogoWrapper,
  TitleSubtitleWrapper,
  InputsWrapper,
  EyeIcon,
  LoginButton
} from "./styles";

import * as SVG from "@/assets/svgs";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { triggerLoginToMenu } = useContext(FadeRouteTransitionContext);

  const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();
  if (triggerLoginToMenu) {
    triggerLoginToMenu( null, () => navigate("/menu/events")
    );
  } else {
    navigate("/menu/events");
  }
};

  return (
    <Container>
      <LoginBox>
        <LeftLayout>
          <LeftContent>
            <LogoWrapper>
              <SVG.TropaDigitalLogo />
            </LogoWrapper>
            <TitleSubtitleWrapper>
              <Title>Bem-vindo de volta</Title>
              <Subtitle>Entre com sua conta para acessar o painel.</Subtitle>
            </TitleSubtitleWrapper>
            <InputsWrapper>
              <form onSubmit={handleLogin}>
                <InputGroup>
                  <InputLabel htmlFor="email">E-mail</InputLabel>
                  <Input type="email" id="email" placeholder="seunome@seuservidor.com" />
                </InputGroup>
                <InputGroup>
                  <InputLabel htmlFor="password">Senha</InputLabel>
                  <PasswordWrapper>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Digite aqui"
                    />
                    <EyeIcon
                      as="button"
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      tabIndex={0}
                      aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                      <SVG.EyeSVG visible={!showPassword} />
                    </EyeIcon>
                  </PasswordWrapper>
                </InputGroup>
                <LoginButton type="submit">Enviar</LoginButton>
              </form>
            </InputsWrapper>
          </LeftContent>
        </LeftLayout>
        <RightLayout>
          <OrangeBox />
          <AvatarImage src="/assets/login/login_avatar.png" alt="Avatar" />
        </RightLayout>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;