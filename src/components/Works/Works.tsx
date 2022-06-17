import React from "react";

// Types
import { TWorkCardModal } from "../../types/works";
import { Decor } from "../Decor/Decor";
// Types

// Components
import WorksCardContainer from "../WorksCardContainer/WorksCardContainer";
// Components

interface IWorks {
  handleOpenWorkModal: (state: boolean) => void;
  handleSetWorkCardInfo: (workCardInfo: TWorkCardModal) => void;
}

const Works: React.FC<IWorks> = ({
  handleOpenWorkModal,
  handleSetWorkCardInfo,
}) => {
  return (
    <section className="works" id="projects">
      <h2 className="works__title">Latest Project</h2>
      <WorksCardContainer
        handleOpenWorkModal={handleOpenWorkModal}
        handleSetWorkCardInfo={handleSetWorkCardInfo}
      />
      <Decor fill="#2a2a2a"/>
    </section>
  );
};

export default Works;
