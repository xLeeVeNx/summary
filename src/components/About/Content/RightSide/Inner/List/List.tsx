import React from "react";
import { Item } from "./Inner/Item";

interface IAbout {
  [key: string]: string;
  id: string;
}

interface IList {
  name: string;
  age: string;
  phone: string;
  email: string;
}

export const List: React.FC<IList> = ({ name, age, phone, email }) => {
  const data: IAbout[] = [
    { Name: name, id: "1" },
    { Age: age, id: "2" },
    { Phone: phone, id: "3" },
    { Email: email, id: "4" },
  ];

  return (
    <ul className="about__list">
      {data.map((item) => {
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];

        return <Item key={item.id} label={key} value={value} />;
      })}
    </ul>
  );
};
