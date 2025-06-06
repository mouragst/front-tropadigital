import styled from 'styled-components';

const Container = styled.header`
  width: 1470px;
  height: 119px;
  padding: 15px;
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
    EventsSpan 
};