import { render } from "@testing-library/react";
import { ImageUpload } from "./ImageUpload";

describe("ImageUpload component unit test", () => {
  test("should render ImageUpload component", () => {
    const dataId = "imageUploadId";
    const { getByTestId } = render(<ImageUpload />);
    expect(getByTestId(dataId)).toBeInTheDocument();
  });
});
