import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 0 10px;
  display: inline-block;
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  &:focus {
    outline: none;
    box-shadow: 1px 5px 5px 5px rgba(175, 175, 175, 0.3);
  }
`;
