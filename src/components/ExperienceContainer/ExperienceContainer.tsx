import React from "react";

// Components
import ExperienceCard from "../ExperienceCard/ExperienceCard";
// Components

type TLastExp = {
  id: number;
  title: string;
  time: string;
  description: string;
};

interface IExperienceContainer {
  lastExp: Array<TLastExp>;
  name: string;
  isRamil: boolean;
  isDamil: boolean;
}

const ExperienceContainer: React.FC<IExperienceContainer> = ({
  lastExp,
  name,
  isRamil,
  isDamil,
}) => {
  const [isShowContainer, setIsShowContainer] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (name === "Ramil") {
      setIsShowContainer(isRamil);
    } else if (name === "Damil") {
      setIsShowContainer(isDamil);
    }
  }, [name, isRamil, isDamil]);

  return (
    <div
      className={`${
        isShowContainer ? "experience__container-show" : ""
      } experience__container`}
    >
      {lastExp.map(({ id, title, time, description }) => {
        return (
          <ExperienceCard
            key={id}
            title={title}
            time={time}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default ExperienceContainer;
