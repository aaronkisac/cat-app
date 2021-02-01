import { render } from "@testing-library/react";
import { Card } from "./Card";
import { fireEvent } from "@testing-library/react";
const image = { url: "https://cdn2.thecatapi.com/images/cg5.jpg", id: "1" };

describe("Card component unit test", () => {
  test("should render Card component", () => {
    const dataId = "cardId";
    const { getByTestId } = render(<Card image={image} />);
    expect(getByTestId(dataId)).toBeInTheDocument();
  });

  test("should render with numberOfLikes", () => {
    const numberOfLikes = 3242;
    const { getByText } = render(
      <Card image={image} numberOfLikes={numberOfLikes} />
    );
    expect(getByText(numberOfLikes)).toBeInTheDocument();
  });

  test("should render with numberOfDisLikes", () => {
    const numberOfDisLikes = 3242;
    const { getByText } = render(
      <Card image={image} numberOfDisLikes={numberOfDisLikes} />
    );
    expect(getByText(numberOfDisLikes)).toBeInTheDocument();
  });

  test("should render with totalVote", () => {
    const totalVote = 3242;
    const { getByText } = render(<Card image={image} totalVote={totalVote} />);
    expect(getByText(`total vote : ${totalVote}`)).toBeInTheDocument();
  });

  test("should render with fav icon", () => {
    const favId = 3242;
    const dataId = "favIconId";

    const { getByTestId } = render(<Card image={image} favId={favId} />);
    expect(getByTestId(dataId)).toBeInTheDocument();
  });

  test("should render with unFav icon", () => {
    const dataId = "unFavIconId";
    const { getByTestId } = render(<Card image={image} />);
    expect(getByTestId(dataId)).toBeInTheDocument();
  });

  test("works onClick on LikeIcon", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Card handleVote={handleClick} image={image} />
    );
    const Icon = getByTestId("likeIconId");
    fireEvent.click(Icon);
    expect(handleClick).toHaveBeenCalled();
  });
  test("works onClick on DisLikeIcon", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Card handleVote={handleClick} image={image} />
    );
    const Icon = getByTestId("disLikeIconId");
    fireEvent.click(Icon);
    expect(handleClick).toHaveBeenCalled();
  });
  test("works onClick on FavIcon", () => {
    const favId = "5432";
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Card handleFavorites={handleClick} image={image} favId={favId} />
    );
    const Icon = getByTestId("favIconId");
    fireEvent.click(Icon);
    expect(handleClick).toHaveBeenCalled();
  });

  test("works onClick on UnFavIcon", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Card handleFavorites={handleClick} image={image} />
    );
    const Icon = getByTestId("unFavIconId");
    fireEvent.click(Icon);
    expect(handleClick).toHaveBeenCalled();
  });
});
