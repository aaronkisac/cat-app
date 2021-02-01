import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: block;
  margin: 50px auto;
  height: 500px;
  max-width: 1000px;
  align-items: center;

  button {
    min-width: 210px;
    max-width: 468px;
    width: 50%;
    color: #fff;
    background-color: #212529;
    font-size: 1.5rem;
    background-clip: padding-box;
    border: none;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;
export const StyledInput = styled.input`
  margin-top: 20px;
  min-width: 210px;
  max-width: 468px;
  width: 50%;
  display: inline-block;
  padding: 0.75rem 1rem;
  font-size: 1.5rem;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  border-radius: 0.25rem;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
