import React from "react";
import {
  StyledWrapper,
  StylesImg,
  FavIcon,
  DisFavIcon,
  DisLikeIcon,
  LikeIcon,
  StyledTotal,
  StyledIcons,
} from "./Card.styles";

export const Card = (props) => {
  return (
    <StyledWrapper>
      <StylesImg src={props.image.url} alt={props.image.id} />
      <div>
        <StyledTotal>total vote : {props.totalVote}</StyledTotal>
        <StyledIcons>
          <LikeIcon onClick={() => props.handleVote(props.image.id, 1)} />
          {props.numberOfLikes}
          <DisLikeIcon onClick={() => props.handleVote(props.image.id, 0)} />
          {props.numberOfDisLikes}
          {props.favId ? (
            <FavIcon
              onClick={() => props.handleFavorites(!!props.favId, props.favId)}
            />
          ) : (
            <DisFavIcon
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
