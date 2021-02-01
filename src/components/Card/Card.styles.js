import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import { GrFavorite, GrDislike, GrLike } from "react-icons/gr";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 25rem;
  min-width: 18.75rem;
  padding: 5px;
  color: white;
  font-size: 1.5rem;
  background-color: rgb(46, 46, 46);
`;

export const StyledTotal = styled.div`
  text-align: center;
  margin: 10px 0 20px;
`;
export const StyledIcons = styled.div`
  text-align: center;
  margin: 10px 0;
`;

export const StylesImg = styled.img`
  width: 100%;
`;

export const FavIcon = styled(MdFavorite)`
  cursor: pointer;
  color: white;
  margin: 0 15px;
`;

export const UnFavIcon = styled(GrFavorite)`
  cursor: pointer;
  margin: 0 15px;
  color: white;
`;

export const DisLikeIcon = styled(GrDislike)`
  cursor: pointer;
  margin: 0 15px;
  color: white;
`;

export const LikeIcon = styled(GrLike)`
  cursor: pointer;
  margin: 0 15px;
  color: white;
`;
