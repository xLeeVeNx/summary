import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const instagramIcon = <BsInstagram className="footer__icon" />;
const telegramIcon = <FaTelegramPlane className="footer__icon" />;
const whatsAppIcon = <FaWhatsapp className="footer__icon" />;

const social = [
  {
    id: 1,
    name: "Damil",
    socialLinks: [
      {
        id: 0,
        socialLink: "",
        icon: instagramIcon,
      },
      {
        id: 1,
        socialLink: "",
        icon: telegramIcon,
      },
      {
        id: 2,
        socialLink: "",
        icon: whatsAppIcon,
      },
    ],
  },
];

export default social;
