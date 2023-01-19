import styled from "styled-components";

export const Container = styled.div`
  width: 231px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border: 1px solid var(--color-white-2);
  border-left: none;
  border-radius: 0px 10px 10px 0px;

  background-color: #d1ece312;

  h1 {
    font-size: 16px;
    font-weight: 700;
    font-style: italic;

    color: var(--color-blue-2);
  }

  .container-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .info {
    font-size: 16px;
    font-style: italic;

    color: var(--color-blue-1);
  }

  .info .period {
    font-weight: 500;
  }

  .info .value {
    font-weight: 700;
  }
`;
