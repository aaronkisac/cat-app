import styled from "styled-components";
import { FaCat } from "react-icons/fa";

export const StyledWrapper = styled.div`
  width: 100%;
  background-color: #33353d;
`;
export const StyledHeaderBody = styled.div`
  width: 100%;
  max-width: 1700px;
  min-width: 340px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
  height: 5rem;
  color: white;
  box-shadow: 1px 5px 5px 5px rgba(175, 175, 175, 0.3);
`;
export const StyledUserName = styled.div`
  color: white;
  background-color: transparent;
  padding: 0 2rem;
  font-size: 1.3rem;
  align-self: center;
`;
export const Links = styled.div`
  display: flex;
`;
export const Icon = styled(FaCat)`
  margin: 0 10px;
`;
