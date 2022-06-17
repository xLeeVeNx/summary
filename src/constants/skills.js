import { DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { SiTypescript } from "react-icons/si";

const ReactIcon = <DiReact className="skills__card-image" />;
const ReduxIcon = <SiRedux className="skills__card-image" />;
const JavaScriptIcon = <DiJavascript1 className="skills__card-image" />;
const CSSIcon = <IoLogoCss3 className="skills__card-image" />;
const HTMLIcon = <ImHtmlFive className="skills__card-image" />;
const TSIcon = <SiTypescript className="skills__card-image" />;

const skills = [
  {
    id: 0,
    name: "React",
    info: "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.",
    link: "https://reactjs.org/docs/getting-started.html",
    icon: ReactIcon,
  },
  {
    id: 1,
    name: "Redux",
    info: "Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
    link: "https://redux.js.org/",
    icon: ReduxIcon,
  },
  {
    id: 2,
    name: "JavaScript",
    info: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: JavaScriptIcon,
  },
  {
    id: 3,
    name: "CSS",
    info: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    link: "https://en.wikipedia.org/wiki/CSS",
    icon: CSSIcon,
  },
  {
    id: 4,
    name: "HTML",
    info: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
    link: "https://en.wikipedia.org/wiki/HTML",
    icon: HTMLIcon,
  },
  {
    id: 5,
    name: "TypeScript",
    info: "TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system. For example, JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these. TypeScript does.",
    link: "https://www.typescriptlang.org/docs/",
    icon: TSIcon,
  },
];

export default skills;
