import { StyledButton } from "./Button.styles";
export * from "./Button.styles";

export const Button = (props) => {
  return (
    <StyledButton data-testid="buttonId"  {...props}>
      {props.children}
    </StyledButton>
  );
};
