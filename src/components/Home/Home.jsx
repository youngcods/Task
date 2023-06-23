import React, { useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPictures } from "../../store/pictures/picturesActions";
import Pagination from "../Search/Pagination";

const Home = () => {
  const { pictures } = useSelector((state) => state.pictures);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPictures());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const picturesPerPage = 21;
  const totalPages = Math.ceil(pictures.length / picturesPerPage);
  const indexOfLastPicture = currentPage * picturesPerPage;
  const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
  const currentPictures = pictures.slice(
    indexOfFirstPicture,
    indexOfLastPicture
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="home-box">
      <div className="img-box">
        {currentPictures.map((item) => (
          <img
            src={item.image}
            alt="error-img"
            key={item.id}
            onClick={() => navigate("/details/" + item.id)}
          />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
