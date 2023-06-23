import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deletePictures,
  getOnePicture,
  getPictures,
} from "../../store/pictures/picturesActions";
import "./details.css";

import { VscChromeClose } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { ADMIN } from "../../helpers/consts";
import ModalEdit from "../ModalEdit/ModalEdit";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const Details = () => {
  const { pictureDetails } = useSelector((state) => state.pictures);
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(getOnePicture(id));
  }, [id]);

  useEffect(() => {
    setName(pictureDetails.name);
    setDescr(pictureDetails.descr);
    setImage(pictureDetails.image);
  }, [pictureDetails]);

  useEffect(() => {
    dispatch(getPictures());
  }, [id]);

  const [isOpenSide, setIsOpenSide] = useState(false);

  const openSidebar = () => {
    setIsOpenSide(!isOpenSide);
    setSidebarStyle((prev) => !prev);
  };

  const [sidebarStyle, setSidebarStyle] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleChange = (value) => {
    setIsOpenModal(value);
  };

  function handleLike() {
    const likeObj = {
      image,
      id: pictureDetails.id,
    };

    localStorage.setItem(`Like-${likeObj.id}`, JSON.stringify(likeObj));
  }

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="d-box">
      <div className={`${sidebarStyle ? "details-nav-active" : "details-nav"}`}>
        <p>Details</p>
        <div className="details-item">
          {isOpenSide ? (
            ""
          ) : (
            <button className="details-save" onClick={handleLike}>
              SAVE
            </button>
          )}
          {isOpenSide ? (
            <button className="details-sidebar-open" onClick={openSidebar}>
              HIDE SIDEBAR
            </button>
          ) : (
            <button className="details-sidebar-open" onClick={openSidebar}>
              SHOW SIDEBAR
            </button>
          )}
          {isOpenSide ? (
            <div className="details-close" onClick={openSidebar}>
              <IoIosArrowForward />
            </div>
          ) : (
            <div className="details-close" onClick={() => navigate("/")}>
              <VscChromeClose />
            </div>
          )}
        </div>
      </div>
      <div className="details-box">
        <div className="details-box-img">
          <div className="modal-edit">
            {isOpenModal ? (
              <ModalEdit
                handleChange={handleChange}
                openSidebar={openSidebar}
              />
            ) : (
              ""
            )}
          </div>
          <div
            className={`${
              sidebarStyle ? "details-img-active" : "details-img-noactive"
            }`}
          >
            <img src={pictureDetails?.image} alt="error-image" />
          </div>
          {isOpenSide && (
            <div className="details-sidebar">
              <div className="details-name">
                <h3 className="side-details">{pictureDetails?.name}</h3>
                <p className="side-details">{pictureDetails.descr}</p>
              </div>
              {user === ADMIN ? (
                <div className="details-btns">
                  <div className="admin-btns">
                    <button className="details-save-side" onClick={openModal}>
                      Edit
                    </button>
                    <button
                      className="details-save-side-dlt"
                      onClick={() => {
                        dispatch(deletePictures(id));
                        navigate("/");
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="details-btns">
                  <button
                    className="details-save-side"
                    onClick={() => {
                      navigate("/");
                      handleLike();
                    }}
                  >
                    SAVE
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mainCommentBlock">
        <h1>Comments</h1>
        <br />
        <CommentList comments={comments} />
        <hr />
        <CommentForm onCommentSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
};

export default Details;
