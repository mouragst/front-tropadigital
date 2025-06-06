import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6fa;
`;

const LoginBox = styled.div`
  width: 756.5px;
  height: 498px;
  border-radius: 20px;
  padding: 10px;
  background: #fff;
  display: flex;
  box-shadow:
    0px 100px 200px 0px #00000040,
    -16px 0 32px -16px #00000020,
    16px 0 32px -16px #00000020;

  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    min-width: 0;
    min-height: 0;
    border-radius: 0;
    padding: 0;
  }
`;

const LeftLayout = styled.div`
  width: 380px;
  height: 478px;
  gap: 20px;
  padding: 40px 20px 40px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    padding: 40px 10vw;
    justify-content: center;
  }
`;

const LeftContent = styled.div`
  width: 299px;
  height: 388px;
  padding-bottom: 49px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-weight: 700;
  color: #CC6237;
  font-size: 26px;
  line-height: 15px;
  letter-spacing: 0%;
  margin: 0 0 4px 0;
`;

const Subtitle = styled.span`
  font-weight: 400;
  color: #2A4D8E;
  opacity: 0.55;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0%;
`;

const RightLayout = styled.div`
  width: 320px;
  height: 478px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

const OrangeBox = styled.div`
  width: 355px;
  height: 478px;
  border-radius: 20px;
  background: #CC6237;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const AvatarImage = styled.img`
  width: 420px;
  height: 370px;
  position: absolute;
  left: -60px;
  bottom: -20px;
  z-index: 2;
  object-fit: contain;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`;

const InputLabel = styled.label`
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0%;
  color: #CC6237;
  margin-bottom: 2px;
`;

const Input = styled.input`
  background: #F6F6F6;
  width: 299px;
  height: 40px;
  border-radius: 100px;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 14px;
  color: #222;
`;

const LogoWrapper = styled.div`
  margin-bottom: 28px;
`;

const TitleSubtitleWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const EyeIcon = styled.button`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #757d8d;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
`;

const LoginButton = styled.button`
  width: 299px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 10px 25px;
  background: #CC6237;
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
`;

export {
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
};