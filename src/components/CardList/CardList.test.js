import { render } from "@testing-library/react";
import { CardList } from "./CardList";

describe("CardList component unit test", () => {
  test("should render CardList component", () => {
    const dataId = "cardListId";
    const { getByTestId } = render(<CardList />);
    expect(getByTestId(dataId)).toBeInTheDocument();
  });
});
