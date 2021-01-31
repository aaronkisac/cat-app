import styled from "styled-components";
import { FaCat } from "react-icons/fa";

export const StyledWrapper = styled.div`
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: 5rem;
    color: white;
    background-color: #33353d;
  }
`;
export const StyledUserName = styled.div`
  color: white;
  background-color: transparent;
  padding: 0 2rem;
  font-size: 1.3rem;
  align-items: center;
`;
export const Links = styled.div`
  display: flex;
`;
export const Icon = styled(FaCat)`
  margin: 0 10px;
`;
