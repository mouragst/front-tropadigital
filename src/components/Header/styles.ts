import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 119px;
  padding: 15px;
  display: flex;
  position: relative;
`;

const WelcomeSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: rgba(16, 16, 16, 0.55);

  strong {
    color: #101010;
  }
`;

const OpenSidebarButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  @media (max-width: 900px) {
    display: block;
  }
  svg {
    margin-bottom: 24px;
    width: 32px;
    height: 32px;
    color: #cc6237;
  }
`;

const EventsSpan = styled.span`
  display: block;
  margin-top: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #CC6237E5;
`;

export { 
    Container, 
    WelcomeSpan, 
    EventsSpan,
    OpenSidebarButton
};