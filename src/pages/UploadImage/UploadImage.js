import { ImageUpload } from "components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadCatImageAction } from "store/actions/catImagesActions";
import { useHistory } from "react-router-dom";

const UploadImage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector((state) => state?.catImagesResult?.userName);
  const [selectedImageFile, setSelectedImageFile] = useState([]);

  const handleSubmit = () => {
    if (selectedImageFile?.length) {
      const file = new FormData();
      file.append("sub_id", userName);
      file.append("file", selectedImageFile[0], selectedImageFile?.name);
      dispatch(uploadCatImageAction(file)).then(() => history.push("/"));
    }
  };
  const onFileChange = (event) => {
    setSelectedImageFile(event?.target?.files);
  };
  return (
    <ImageUpload
      handleSubmit={handleSubmit}
      onFileChange={onFileChange}
      selectedImageFile={selectedImageFile}
    />
  );
};
export default UploadImage;
