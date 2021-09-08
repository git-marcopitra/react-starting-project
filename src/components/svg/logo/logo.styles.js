import styled, { keyframes } from "styled-components";

const AppLoginSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Svg = styled.svg`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLoginSpin} infinite 20s linear;
  }
`;
