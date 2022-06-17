import stellarBurgers from "../assets/images/Stellar Burgers.png";
import stellarBurgersExampleOne from "../assets/images/StellarBurgersExample1.png";
import StellarBurgersExampleTwo from "../assets/images/StellarBurgersExample2.png";

import qrCodeMainImage from "../assets/images/QR-code-mainImage.jpg";
import qrCodeFirstImage from "../assets/images/qrMenuFirstImage.png";
import qrCodeSecondImage from "../assets/images/qrMenuSecondImage.png";

import myKoreaMainImage from "../assets/images/my-korea.jpg";
import myKoreaFirstImage from "../assets/images/myKoreaFirstImage.png";
import myKoreaSecondImage from "../assets/images/myKoreaSecondImage.png";

import kalibrisFirstImage from "../assets/images/kalibrisFirstImage.png";
import kalibrisSecondImage from "../assets/images/kalibrisSecondImage.png";
import kalibrisMain from "../assets/images/kalibrisMain.jpeg";

import gleeFirstImage from "../assets/images/gleeFirstImage.png";
import gleeSecondImage from "../assets/images/gleeSecondImage.png";
import gleeMain from "../assets/images/gleeMain.jpg";

import marchoFirstImage from "../assets/images/marchoFirstImage.png";
import marchoSecondImage from "../assets/images/marchoSecondImage.png";
import marchoMain from "../assets/images/marchoMain.jpg";

const worksData = [
  {
    title: "Stellar Burgers",
    shortDescription: "Yandex Practicum Project",
    clientName: "Yandex",
    projectValue: "Training",
    date: "28 Oct 2021",
    descriptionFirst:
      "The idea of ​​the project is to create a web application for the fictional company Stellar Burgers, which is based on the sale of fast food",
    descriptionSecond:
      "A project created for the purpose of learning React. This project uses modern technologies such as React, Redux, WebSocket, TypeScript, React Router, REST API.",
    mainImage: stellarBurgers,
    exampleImageFirst: stellarBurgersExampleOne,
    exampleImageSecond: StellarBurgersExampleTwo,
    link: "https://ramiltanker.github.io/react-burger/",
    id: 1,
  },
  {
    title: "QR-MENU",
    shortDescription: "QR-menu for Tino Pizza",
    clientName: "Tino Pizza",
    projectValue: "Urban",
    date: "10 Oct 2021",
    descriptionFirst:
      "The application was created to remove the traditional menu and replace it with a more modern counterpart. The application works by scanning a QR code with a phone camera.",
    descriptionSecond:
      "The application was created using technologies such as React, React Router, React Transition Group, Redux",
    mainImage: qrCodeMainImage,
    exampleImageFirst: qrCodeFirstImage,
    exampleImageSecond: qrCodeSecondImage,
    link: "https://qr-menu-jhu5fqc95-ramiltanker.vercel.app/",
    id: 2,
  },
  {
    title: "My Korea",
    shortDescription: "My Korea for Education",
    clientName: "Korea university",
    projectValue: "International",
    date: "15 June 2021",
    descriptionFirst:
      "A project created to help students study in Korea. The site contains information about universities, grants and other information.",
    descriptionSecond:
      "The project is written using the React library in JavaScript.",
    mainImage: myKoreaMainImage,
    exampleImageFirst: myKoreaFirstImage,
    exampleImageSecond: myKoreaSecondImage,
    link: "https://ramiltanker.github.io/mykorea/",
    id: 3,
  },
  {
    title: "Kalibris",
    shortDescription: "Safe & Easy payments",
    clientName: "Sergey (mediator)",
    projectValue: "International",
    date: "11 May 2021",
    descriptionFirst:
      "If you, too, are among the handful of people who are afraid (and rightly so) to hand over their credit information online, we're here for you!",
    descriptionSecond:
      "TheKalibris allows you to get a virtual credit card number in less than 60 seconds and pay with it online! What are you waiting for?",
    mainImage: kalibrisMain,
    exampleImageFirst: kalibrisFirstImage,
    exampleImageSecond: kalibrisSecondImage,
    link: "https://xleevenx.github.io/TheKabibris/index-en.html",
    id: 4,
  },
  {
    title: "Glee",
    shortDescription: "Smart and Trendy",
    clientName: "from0to1",
    projectValue: "Training",
    date: "20 December 2020",
    descriptionFirst: "Mission of our creative house",
    descriptionSecond: "Sale of high-quality, branded and designer furniture.",
    mainImage: gleeMain,
    exampleImageFirst: gleeFirstImage,
    exampleImageSecond: gleeSecondImage,
    link: "https://xleevenx.github.io/Glee/index.html",
    id: 5,
  },
  {
    title: "Marcho",
    shortDescription: "Clothes Shop",
    clientName: "from0to1",
    projectValue: "Training",
    date: "20 Jan 2021",
    descriptionFirst: "The site is designed for the Marcho clothing store",
    descriptionSecond:
      "The site provides a huge selection of clothes, its purchase, adding to the cart, and so on.",
    mainImage: marchoMain,
    exampleImageFirst: marchoFirstImage,
    exampleImageSecond: marchoSecondImage,
    link: "https://xleevenx.github.io/Marcho-s-online-shop/",
    id: 6,
  },
];

export default worksData;
