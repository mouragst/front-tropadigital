import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #F8F8F8;
`;

const MainContent = styled.main`
  width: 100%;
  overflow-x: hidden;
  padding: 24px;

  @media (max-width: 900px) {
    padding: 16px 4vw 16px 4vw;
    margin-left: 0;
  }
`;

export { 
    LayoutContainer, 
    MainContent 
};