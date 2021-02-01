import React from "react";
import {
  StyledWrapper,
  StylesImg,
  FavIcon,
  UnFavIcon,
  DisLikeIcon,
  LikeIcon,
  StyledTotal,
  StyledIcons,
} from "./Card.styles";

export const Card = (props) => {
  return (
    <StyledWrapper data-testid="cardId">
      <StylesImg src={props.image.url} alt={props.image.id} />
      <div>
        <StyledTotal>total vote : {props.totalVote}</StyledTotal>
        <StyledIcons>
          <LikeIcon
            data-testid="likeIconId"
            onClick={() => props.handleVote(props.image.id, 1)}
          />
          {props.numberOfLikes}
          <DisLikeIcon
            data-testid="disLikeIconId"
            onClick={() => props.handleVote(props.image.id, 0)}
          />
          {props.numberOfDisLikes}
          {props.favId ? (
            <FavIcon
              data-testid="favIconId"
              onClick={() => props.handleFavorites(!!props.favId, props.favId)}
            />
          ) : (
            <UnFavIcon
              data-testid="unFavIconId"
              onClick={() =>
                props.handleFavorites(!!props.favId, props.image.id)
              }
            />
          )}
        </StyledIcons>
      </div>
    </StyledWrapper>
  );
};
