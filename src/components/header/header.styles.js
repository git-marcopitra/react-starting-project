import styled from "styled-components";

export const AppHeader = styled.header`
  background-color: ${({ bg, theme }) => bg || theme.colors.background.normal};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLink = styled.a`
  color: ${({ color }) => color || "#61dafb"};
`;
