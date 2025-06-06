import styled, { keyframes, css } from "styled-components";

const slideOutLeft = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to   { transform: translateX(-100vw); opacity: 0; }
`;

const slideInRight = keyframes`
  from { transform: translateX(100vw); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const FadeDiv = styled.div<{
  $animate: boolean;
  $slideOut: boolean;
  $slideIn: boolean;
  $fadeOut?: boolean;
  $fadeIn?: boolean;
}>`
  width: 100%;
  position: relative;
  ${({ $animate, $slideOut, $slideIn, $fadeOut, $fadeIn }) =>
    $animate &&
    ($slideOut
      ? css`
          animation: ${slideOutLeft} 0.5s forwards;
        `
      : $slideIn
      ? css`
          animation: ${slideInRight} 0.5s;
        `
      : $fadeOut
      ? css`
          animation: ${fadeOut} 0.5s forwards;
        `
      : $fadeIn
      ? css`
          animation: ${fadeIn} 0.5s;
        `
      : "")}
`;