import { ACTION_TYPES } from "store/reducers/catImagesReducer";
import to from "await-to-js";

import {
  getCatAllImages,
  uploadCatImage,
  setCatImageFav,
  deleteCatImageFav,
  getCatAllFavImages,
  getCatVotes,
  setCatVote,
} from "services/catImagesServices";

export const fetchCatImages = () => async (dispatch) => {
  const [err, payload] = await to(getCatAllImages());
  const newPayload = [...payload];
  if (err) {
    return err;
  }

  dispatch({
    type: ACTION_TYPES.SET_CAT_IMAGES,
    payload: newPayload,
  });
};

export const uploadCatImageAction = (data) => async (dispatch) => {
  const [err] = await to(uploadCatImage(data));

  if (err) {
    return err;
  }

  const [err2, payload2] = await to(getCatAllImages());
  const newPayload = [...payload2];

  if (err2) {
    return err2;
  }

  dispatch({
    type: ACTION_TYPES.SET_CAT_IMAGES,
    payload: newPayload,
  });
};

export const fetchCatFavImages = () => async (dispatch) => {
  const [err, payload] = await to(getCatAllFavImages());
  const newPayload = [...payload];
  if (err) {
    return err;
  }

  dispatch({
    type: ACTION_TYPES.SET_CAT_FAV_IMAGES,
    payload: newPayload,
  });
};

export const setCatImageFavAction = (data) => async (dispatch) => {
  const [err] = await to(setCatImageFav(data));

  if (err) {
    return err;
  }
  const [err2, payload] = await to(getCatAllFavImages());
  const newPayload = [...payload];
  if (err2) {
    return err2;
  }

  dispatch({
    type: ACTION_TYPES.SET_CAT_FAV_IMAGES,
    payload: newPayload,
  });
};

export const deleteCatImageFavAction = (key) => async (dispatch) => {
  const [err] = await to(deleteCatImageFav(key));

  if (err) {
    return err;
  }
  const [err2, payload] = await to(getCatAllFavImages());
  const newPayload = [...payload];
  if (err2) {
    return err2;
  }

  dispatch({
    type: ACTION_TYPES.SET_CAT_FAV_IMAGES,
    payload: newPayload,
  });
};

export const login = (userName) => async (dispatch) => {
  const err = !userName && "User name is required";

  if (err) {
    return err;
  }
  dispatch({
    type: ACTION_TYPES.SET_USER_NAME,
    payload: userName,
  });
};

export const fetchCatVotes = () => async (dispatch) => {
  const [err, payload] = await to(getCatVotes());
  const newPayload = [...payload];
  if (err) {
    return err;
  }

  dispatch({
    type: ACTION_TYPES.SET_CAT_VOTES,
    payload: newPayload,
  });
};

export const setCatVoteAction = (data) => async (dispatch) => {
  const [err] = await to(setCatVote(data));

  if (err) {
    return err;
  }
  const [err2, payload2] = await to(getCatVotes());
  const newPayload = [...payload2];
  if (err2) {
    return err2;
  }

  dispatch({
    type: ACTION_TYPES.SET_CAT_VOTES,
    payload: newPayload,
  });
};
