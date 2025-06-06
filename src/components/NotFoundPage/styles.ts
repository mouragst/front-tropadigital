import styled from 'styled-components';

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: #ff5555;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #555;
  text-align: center;
  margin-top: 1rem;
`;

export {
  Container,
  Title,
  Description
}