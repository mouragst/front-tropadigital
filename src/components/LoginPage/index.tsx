import React from "react";
import {
  Container,
  LoginBox,
  LeftLayout,
  LeftContent,
  Title,
  Subtitle,
  RightLayout,
  OrangeBox,
  AvatarImage
} from "./styles";

const LoginPage: React.FC = () => (
  <Container>
    <LoginBox>
      <LeftLayout>
        <LeftContent>
          <Title>Bem vindo de volta</Title>
          <Subtitle>Entre com sua conta para acessar o painel.</Subtitle>
        </LeftContent>
      </LeftLayout>
      <RightLayout>
        <OrangeBox />
        <AvatarImage src="/assets/login/login_avatar.png" alt="Avatar" />
      </RightLayout>
    </LoginBox>
  </Container>
);

export default LoginPage;