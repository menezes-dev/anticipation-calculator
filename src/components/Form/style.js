import styled from "styled-components";

export const Container = styled.div`
  width: 377px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  background-color: var(--color-white-0);

  border: 1px solid var(--color-white-2);
  border-right: none;
  border-radius: 10px 0px 0px 10px;

  h1 {
    font-size: 24px;
    font-weight: 700;

    color: var(--color-gray-0);
  }

  form {
    width: 251px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  label {
    font-size: 14px;
    font-weight: 400;

    color: var(--color-gray-0);
  }

  input {
    width: 100%;
    height: 37px;

    border: 1px solid var(--color-white-1);
    border-radius: 4px;

    :focus {
      outline-color: var(--color-blue-0);
    }
  }

  button {
    width: 100%;
    height: 37px;

    font-size: 16px;
    font-weight: 700;

    border: 1px solid #d1ece312;
    border-radius: 10px;

    background-color: #d1ece312;
    color: var(--color-blue-2);

    transition: all 0.5s ease-in;

    :hover {
      background-color: var(--color-blue-2);
      color: var(--color-white-0);
    }
  }
`;
