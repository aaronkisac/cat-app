import { StyledWrapper, StyledInput } from "./Login.styles";
import { Button } from "components";
export const Login = (props) => {
  return (
    <StyledWrapper>
      <StyledInput
        type="text"
        placeholder="type a user name please"
        value={props.value}
        onChange={props.handleOnChange}
      />
      <Button type="button" onClick={props.handleSubmit}>
        Login
      </Button>
    </StyledWrapper>
  );
};
