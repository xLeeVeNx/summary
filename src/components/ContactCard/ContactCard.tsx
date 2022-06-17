import React from "react";

interface IContactCard {
  name1: string;
  textName1: string;
  title: string;
  name2: string;
  textName2: string;
  icon: JSX.Element;
}

const ContactCard: React.FC<IContactCard> = ({
  name1,
  textName1,
  title,
  name2,
  textName2,
  icon,
}) => {
  return (
    <div className="contacts__card">
      <div className="contacts__image-box">{icon}</div>
      <p className="contacts__title">{title}</p>
      <div className="contacts__box">
        <p className="contacts__name">{name2}</p>
        <p className="contacts__text">{textName2}</p>
      </div>
    </div>
  );
};

export default ContactCard;
