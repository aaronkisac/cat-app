import { useRef } from "react";
import {
  StyledWrapper,
  StyledInput,
  StyledLabel,
  StylesImg,
} from "./ImageUpload.styles";
import { Button } from "components";

export const ImageUpload = (props) => {
  const hiddenFileInput = useRef("");
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    props.onFileChange(event);
  };

  return (
    <StyledWrapper data-testid="imageUploadId">
      <StyledInput
        data-testid="inputId"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
      <StyledLabel className="label-button" onClick={handleClick}>
        Choose file
      </StyledLabel>
      <StyledLabel onClick={handleClick}>
        {props?.selectedImageFile?.length
          ? props?.selectedImageFile[0]?.name
          : "No file chosen"}
      </StyledLabel>
      <StyledLabel className="label-button">
        <Button
         
          type="submit"
          onClick={props?.handleSubmit}
          disabled={!props?.selectedImageFile?.length}
        >
          Upload
        </Button>
      </StyledLabel>
      {props?.selectedImageFile?.length ? (
        <StylesImg
          src={URL?.createObjectURL(props?.selectedImageFile[0])}
          alt={props?.selectedImageFile[0]?.name}
        />
      ) : (
        ""
      )}
    </StyledWrapper>
  );
};
