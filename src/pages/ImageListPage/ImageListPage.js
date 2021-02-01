import { CardList } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCatFavImages,
  setCatImageFavAction,
  deleteCatImageFavAction,
  setCatVoteAction,
} from "store/actions/catImagesActions";

const ImageListPage = () => {
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
    <CardList
      userName={userName}
      favs={favs}
      votes={votes}
      catImages={catImages}
      handleFavorites={handleFavorites}
      handleVote={handleVote}
    />
  );
};
export default ImageListPage;
