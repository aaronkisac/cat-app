import { useDispatch, useSelector } from "react-redux";
import {
  fetchCatImages,
  fetchCatFavImages,
  fetchCatVotes,
} from "store/actions/catImagesActions";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "components";
import ImageListPage from "pages/ImageListPage/ImageListPage";
import LoginPage from "pages/LoginPage/LoginPage";
import UploadImage from "pages/UploadImage/UploadImage";
import { StyledWrapper } from "./App.styles";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.catImagesResult);
  console.log("​App -> store", store);

  useEffect(() => {
    dispatch(fetchCatFavImages());
    dispatch(fetchCatImages());
    dispatch(fetchCatVotes());
  }, []);

  return (
    <StyledWrapper >
      <Router>
        {!store?.userName && <Redirect to="/login" />}
        <Header />
        <Switch>
          <Route exact path="/">
            {store?.userName ? <ImageListPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/upload">
            {store?.userName ? <UploadImage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </StyledWrapper>
  );
}

export default App;
