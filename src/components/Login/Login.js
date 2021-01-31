import { StyledWrapper } from "./Login.styles";
export const Login = (props) => {
  return (
    <StyledWrapper>
      Login Component
      <input
        type="text"
        placeholder="type a user name"
        value={props.value}
        onChange={props.handleOnChange}
      />
      <button type="button" onClick={props.handleSubmit}>
        Login
      </button>
    </StyledWrapper>
  );
};
