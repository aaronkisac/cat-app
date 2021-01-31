import { useRef } from "react";
import { StyledWrapper, StyledInput, StyledLabel } from "./ImageUpload.styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button } from "components";

const schema = yup.object().shape({
  picture: yup
    .mixed()
    .required("You need to provide a file")
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= 2000000;
    })
    .test("type", "We only support jpeg/png/gif", (value) => {
      return (
        value &&
        value[0].type === "image/jpeg" &&
        value[0].type === "image/png" &&
        value[0].type === "image/gif"
      );
    }),
});

export const ImageUpload = (props) => {
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    props.onFileChange(event);
  };
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const hiddenFileInput = useRef(register);

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit(props.handleSubmit)}>
        <StyledInput
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
        />
        <StyledLabel className="label-button" onClick={handleClick}>
          Choose file
        </StyledLabel>
        <StyledLabel onClick={handleClick}>
          {props?.selectedImageFile.length
            ? props.selectedImageFile[0].name
            : "No file chosen"}
        </StyledLabel>
        {errors.picture && <p>{errors.picture.message}</p>}
        <StyledLabel className="label-button">
        <Button type="submit" disabled={!props?.selectedImageFile.length}>
          Upload
        </Button>
        </StyledLabel>
      </form>
    </StyledWrapper>
  );
};
