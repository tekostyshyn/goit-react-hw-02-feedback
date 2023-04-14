import styled from "styled-components";

export const Button = styled.button`
  font-size: 24px;
  color: black;
  border: 1px solid darkgray;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;

  &:hover {
    border-color: gray;
    background-color: lightgray;
  }

`;

export const Paragraph = styled.div`
  display: flex;
  gap: 10px;
`