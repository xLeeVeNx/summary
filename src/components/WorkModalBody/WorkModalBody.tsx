import React from "react";
import { Link } from "react-router-dom";

// Test
import testImg from "../../assets/images/test image.jpg";
// Test

// Types
import { TWorkCardModal } from "../../types/works";
// Types

interface IWorkModalBody {
  workCardData?: TWorkCardModal;
}

const WorkModalBody: React.FC<IWorkModalBody> = ({ workCardData }) => {
  return (
    <div className="work-modal">
      <h2 className="work-modal__title">{workCardData?.title}</h2>
      <div className="work-modal__short-info">
        <p className="work-modal__info-text">
          Client Name<span>{workCardData?.clientName}</span>
        </p>
        <p className="work-modal__info-text">
          Project Value<span>{workCardData?.projectValue}</span>
        </p>
        <p className="work-modal__info-text">
          Date<span>{workCardData?.date}</span>
        </p>
      </div>
      <div className="work-modal__text-block">
        <p className="work-modal__text-description">
          {workCardData?.descriptionFirst}
        </p>
        <p className="work-modal__text-description">
          {workCardData?.descriptionSecond}
        </p>
      </div>
      <div className="work-modal__images-block">
        <img
          src={workCardData?.exampleImageFirst}
          alt="test"
          className="work-modal__image"
        />
        <img
          src={workCardData?.exampleImageSecond}
          alt="test"
          className="work-modal__image"
        />
      </div>
      <div className="work-modal__link-box">
        <p className="work-modal__link-title">Link</p>
        <a className="work-modal__link" href={workCardData?.link}>
          {workCardData?.link}
        </a>
      </div>
    </div>
  );
};

export default WorkModalBody;
