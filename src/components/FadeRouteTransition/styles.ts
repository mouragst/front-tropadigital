import styled, { keyframes, css } from "styled-components";

const slideOutLeft = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to   { transform: translateX(-100vw); opacity: 0; }
`;

const slideInRight = keyframes`
  from { transform: translateX(100vw); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
`;

export const FadeDiv = styled.div<{ $animate: boolean; $slideOut: boolean; $slideIn: boolean }>`
  width: 100%;
  position: relative;
  ${({ $animate, $slideOut, $slideIn }) =>
    $animate &&
    ($slideOut
      ? css`
          animation: ${slideOutLeft} 0.5s forwards;
        `
      : $slideIn
      ? css`
          animation: ${slideInRight} 0.5s;
        `
      : "")}
`;