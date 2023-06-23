import React, { useState } from "react";
import "./create.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPicture } from "../../store/pictures/picturesActions";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  const [showError, setShowError] = useState(false);

  function handleCreate() {
    if (!name.trim() || !descr.trim() || !image.trim()) {
      setShowError(true);
      return;
    }
    let picturesObj = {
      name,
      descr,
      image,
    };

    dispatch(addPicture(picturesObj));
    setName("");
    setDescr("");
    setImage("");
    navigate("/");
  }

  return (
    <div className="create-box">
      <div className="create-title-box">
        <h1>Just create your image here</h1>
      </div>
      <div className="form-box">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        {showError ? <p>Enter all inputs</p> : <></>}
      </div>
      <div className="create-btns">
        <button onClick={() => handleCreate()}>Create</button>
        <button onClick={() => navigate("/")}>Cancel</button>
      </div>
    </div>
  );
};

export default Create;
