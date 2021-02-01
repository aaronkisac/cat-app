import { render } from "@testing-library/react";
import { Login } from "./Login";
import { fireEvent } from "@testing-library/react";

describe("Login component unit test", () => {
  test("should render without props", () => {
    const dataId = "loginId";
    const { getByTestId } = render(<Login />);
    expect(getByTestId(dataId)).toBeInTheDocument();
  });

  test("should work handleSubmit", () => {
    const handleClick = jest.fn();
    const dataId = "buttonId";
    const { getByTestId } = render(<Login handleSubmit={handleClick} />);
    const button = getByTestId(dataId);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  test("should work handleOnChange", () => {
    const handleOnChange = jest.fn();
    const dataId = "inputId";
    const { getByTestId } = render(<Login handleOnChange={handleOnChange} />);
    const input = getByTestId(dataId);
    fireEvent.change(input, { target: { value: "user23" } });
    expect(input.value).toBe("user23");
  });
});
