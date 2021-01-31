import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "components";
import { StyledWrapper } from "./CardList.styles";

import {
  fetchCatFavImages,
  setCatImageFavAction,
  deleteCatImageFavAction,
  setCatVoteAction,
} from "store/actions/catImagesActions";

export const CardList = () => {
  const dispatch = useDispatch();
  const { userName, favs, votes, catImages } = useSelector(
    (state) => state?.catImagesResult
  );

  const handleFavorites = (isDelete, id) => {
    if (isDelete) {
      dispatch(deleteCatImageFavAction(id));
    } else {
      dispatch(setCatImageFavAction({ image_id: id, sub_id: userName }));
    }
  };

  const handleVote = (id, isLike) => {
    const data = {
      image_id: id,
      sub_id: userName,
      value: isLike,
    };
    dispatch(setCatVoteAction(data));
  };

  useEffect(() => {
    dispatch(fetchCatFavImages());
  }, []);

  return (
    <StyledWrapper>
      {catImages.map((image) => {
        const fav = favs.find(
          (fav) => fav?.image_id === image.id && fav?.sub_id === userName
        );
        const numberOfDisLikes = votes.filter(
          (vote) => vote?.image_id === image.id && vote.value === 0
        ).length;
        const numberOfLikes = votes.filter(
          (vote) => vote?.image_id === image.id && vote.value === 1
        ).length;

        return (
          <Card
            favId={fav ? fav.id : ""}
            totalVote={numberOfLikes - numberOfDisLikes}
            numberOfLikes={numberOfLikes}
            numberOfDisLikes={numberOfDisLikes}
            handleFavorites={handleFavorites}
            handleVote={handleVote}
            key={image.id}
            image={image}
          />
        );
      })}
    </StyledWrapper>
  );
};
