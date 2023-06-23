import React, { useEffect, useState } from "react";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPictures } from "../../store/pictures/picturesActions";

const Search = () => {
  const { pictures } = useSelector((state) => state.pictures);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPictures());
  }, []);

  const [value, setValue] = useState("");

  const searchPicture = pictures.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="container-search">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search new inspiration"
          className="search-inp"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="rectangle-search">
        <p>Popular images</p>
      </div>
      <div className="home-box">
        <div className="search-box-img">
          {searchPicture.map((item) => (
            <img
              src={item.image}
              alt="error-img"
              key={item.id}
              onClick={() => navigate("/details/" + item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
