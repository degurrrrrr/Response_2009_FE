import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {

  const dispatch = useDispatch();
  // const is_uploading = useSelector(state => state.image.uploading);
  const fileInput = React.useRef();


  const selectFile = (e) => {
    const img = e.target.files[0]
    const formData = new FormData();
    formData.append('image', img);

    dispatch(imageActions.uploadImageDB(formData));
    for (const keyValue in formData) console.log(keyValue)

    const reader = new FileReader();
    const file = fileInput.current.files[0]

    reader.readAsDataURL(file)
    console.log(file)

    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result))
      console.log(reader.result)
    }
  }

  return (
      <input
        type="file"
        onChange={selectFile}
        ref={fileInput}
      />
  );
};

export default Upload;