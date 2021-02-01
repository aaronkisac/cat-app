import { Card } from "components";
import { StyledWrapper } from "./CardList.styles";

export const CardList = (props) => {
  return (
    <StyledWrapper data-testid="cardListId">
      {props?.catImages?.map((image) => {
        const fav = props?.favs?.find(
          (fav) =>
            fav?.image_id === image?.id && fav?.sub_id === props?.userName
        );
        const numberOfDisLikes = props?.votes.filter(
          (vote) => vote?.image_id === image?.id && vote?.value === 0
        ).length;
        const numberOfLikes = props?.votes.filter(
          (vote) => vote?.image_id === image.id && vote?.value === 1
        ).length;

        return (
          <Card
            favId={fav ? fav?.id : ""}
            totalVote={numberOfLikes - numberOfDisLikes}
            numberOfLikes={numberOfLikes}
            numberOfDisLikes={numberOfDisLikes}
            handleFavorites={props?.handleFavorites}
            handleVote={props?.handleVote}
            key={image.id}
            image={image}
          />
        );
      })}
    </StyledWrapper>
  );
};
