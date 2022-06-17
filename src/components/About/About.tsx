import React from "react";
import Particles from "react-particles-js";
import { Decor } from "../Decor/Decor";
import { Content } from "./Content/Content";

type AboutPropsType = {
  abs: (data: any) => void;
};

export const About: React.FC<AboutPropsType> = ({ abs }) => {
  return (
    <section className="about" id="about">
      <Content abs={abs} />
      <Decor fill="#202020" />
      <Particles
        className="about__decor"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 5,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
            },
          },
        }}
      />
      <div className="line" />
    </section>
  );
};
