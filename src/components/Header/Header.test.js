import { render } from "@testing-library/react";
import { Header } from "./Header";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Header component unit test", () => {
  test("should render Header component", () => {
    const dataId = "headerId";
    const { getByTestId } = render(<Header />);
    expect(getByTestId(dataId)).toBeInTheDocument();
  });
  test("should render user icon in Header component", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        userName: "user23",
      })
    );
    const dataId = "headerId";
    const { getByTestId } = render(<Header />);
    expect(getByTestId(dataId)).toBeInTheDocument();
  });
});
