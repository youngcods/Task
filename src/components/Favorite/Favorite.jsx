import React, { useEffect, useState } from "react";
import "./favorite.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPictures } from "../../store/pictures/picturesActions";

const Favorite = () => {
  const allData = Object.keys(localStorage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPictures());
  }, []);

  return (
    <div className="favorite-box">
      <div className="title-box">
        <h1>Your favorite images here</h1>
      </div>

      <div className="img-box">
        {allData.map((item, index) => {
          const obj = JSON.parse(localStorage.getItem(`${allData[index]}`));
          if (obj && obj.image) {
            return (
              <img
                src={`${obj.image}`}
                alt="#"
                key={index}
                onClick={() => navigate("/details/" + obj.id)}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Favorite;
