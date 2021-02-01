import { StyledWrapper, StyledInput } from "./Login.styles";
import { Button } from "components";
export const Login = (props) => {
  return (
    <StyledWrapper data-testid="loginId">
      <StyledInput
        data-testid="inputId"
        type="text"
        placeholder="type a user name please"
        value={props.value}
        onChange={props.handleOnChange}
      />
      <Button data-testid="buttonId" type="button" onClick={props.handleSubmit}>
        Login
      </Button>
    </StyledWrapper>
  );
};
