import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: block;
  margin: 50px auto;
  height: 500px;
  max-width: 1000px;
  align-items: center;

  .label-button {
    width: 30%;
    max-width: 218px;
    margin: 0;
    color: #fff;
    background-color: #212529;
  }

  button {
    padding: 0;
    background-color: transparent;
    margin: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

export const StyledInput = styled.input`
  display: none;
`;
export const StylesImg = styled.img`
  margin-top: 20px;
  max-width: 25rem;
  min-width: 18.75rem;
`;
export const StyledLabel = styled.label`
  min-width: 210px;
  max-width: 468px;
  width: 50%;
  display: inline-block;
  cursor: pointer;
  padding: 0.75rem 1rem;
  font-size: 1.5rem;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  border-radius: 0.25rem;
`;
