import { Button } from "components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { StyledWrapper, StyledUserName, Links, Icon } from "./Header.styles";

export const Header = () => {
  const history = useHistory();
  const userName = useSelector((state) => state?.catImagesResult.userName);

  return (
    <StyledWrapper>
      <div>
        <Links>
          <Button onClick={() => history.push("/")}>Home</Button>
          <Button onClick={() => history.push("/upload")}>Upload Image</Button>
          <Button onClick={() => history.push("/login")}>
            Change User Name
          </Button>
        </Links>
        <StyledUserName>
         
            {userName && <Icon />} {userName}
      
        </StyledUserName>
      </div>
    </StyledWrapper>
  );
};
