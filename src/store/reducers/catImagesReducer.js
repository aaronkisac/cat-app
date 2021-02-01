import produce from "immer";

export const ACTION_TYPES = {
  SET_CAT_IMAGES: "SET_CAT_IMAGES",
  SET_CAT_FAV_IMAGES: "SET_CAT_FAV_IMAGES",
  SET_USER_NAME: "SET_USER_NAME",
  SET_CAT_VOTES: "SET_CAT_VOTES",
};

export const initialState = {
  userName: "",
  catImages: [],
  favs: [],
  votes: [],
};

const catImagesReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTION_TYPES.SET_CAT_IMAGES:
        draft.catImages = action.payload;
        break;
      case ACTION_TYPES.SET_CAT_FAV_IMAGES:
        draft.favs = action.payload;
        break;
      case ACTION_TYPES.SET_USER_NAME:
        draft.userName = action.payload;
        break;
      case ACTION_TYPES.SET_CAT_VOTES:
        draft.votes = action.payload;
        break;

      default:
        break;
    }
  });

export default catImagesReducer;
