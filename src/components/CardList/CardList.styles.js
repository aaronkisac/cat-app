import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;
  grid-gap: 1rem;
  min-width: 340px;
  max-width: 1700px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
