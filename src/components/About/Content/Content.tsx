import React from "react";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import {LeftSide} from "./LeftSide/LeftSide";
import {RightSide} from "./RightSide/RightSide";

// Info about us
import aboutInfo from "../../../constants/about-us-info.json";
// Info about us

// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation} from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

type ContentPropsType = {
    abs: (data: any) => void;
};

export const Content: React.FC<ContentPropsType> = ({abs}) => {
    return (
        <div className="about__inner">
            <LeftSide/>
            <RightSide
                name="Berdyev Damil"
                age="21 years"
                phone="+7-(777)-369-22-86"
                email="berdyevwork@mail.ru"
                text="I am a meticulous Front-end developer with over 2 years of experience focused on crafting clean, creative and user‑friendly experiences. I develop responsive single page applications using modern web technologies, carefully thinking about the architecture and code."
                abs={() => abs({
                    name: 'Berdyev Damil',
                    age: '21 years',
                    phone: '+7-(777)-369-22-86',
                    email: 'berdyevwork@mail.ru'
                })}
            />
        </div>
    );
};
