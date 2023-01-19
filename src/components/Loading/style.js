import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 16px;
    font-weight: 700;
    font-style: italic;

    color: var(--color-blue-2);
  }
`;

export const Animation = styled.div`
  width: 50px;
  height: 50px;

  border: 6px solid var(--color-blue-0);
  border-top-color: var(--color-blue-2);
  border-radius: 50%;

  animation: is-rotating 1s infinite;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
