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
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
`;

const LeftLayout = styled.div`
  width: 339px;
  height: 478px;
  gap: 20px;
  padding: 40px 20px 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: #CC6237;
  font-size: 26px;
  line-height: 15px;
  letter-spacing: 0%;
  margin: 0 0 8px 0;
`;

const Subtitle = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0%;
  color: #555;
`;

const RightLayout = styled.div`
  width: 397.5px;
  height: 478px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrangeBox = styled.div`
  width: 355.5px;
  height: 478px;
  border-radius: 20px;
  background: #CC6237;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const AvatarImage = styled.img`
  width: 357px;
  height: 316px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  object-fit: contain;
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
  AvatarImage
};