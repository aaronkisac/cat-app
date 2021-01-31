import { Login } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "store/actions/catImagesActions";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state?.userName);
  const [value, setValue] = useState(userName || "");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(login(value))
      .then(() => history.push("/"))
      .catch((err) => console.log("​handleSubmit -> err", err));
  };

  return (
    <div>
      <Login
        value={value}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;
