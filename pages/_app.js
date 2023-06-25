import Layout from "../Layout/Layout";
import "../styles/components/navbar.scss";
import "../styles/components/home.scss";
import "../styles/globals.css";

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

let teachers = [
  {
    id: 9,
    name: "Samin Anam",
    email: "samin@gmail.com",
    designation: "Part-time Teacher",
    password: "1234",
    subject: "Math",
    classes: [3, 4, 5],
    avatar: "/static/images/teacher.webp",
  },
  {
    id: 8,
    name: "Shamsur Rahman",
    email: "shams@gmail.com",
    designation: "Asistant Teacher",
    password: "1234",
    subject: "Physics",
    classes: [3, 4, 5],
    avatar: "/static/images/teacher.webp",
  },
  {
    id: 7,
    name: "Donald Samit",
    email: "samit@gmail.com",
    designation: "Asistant Teacher",
    password: "12334",
    subject: "English",
    classes: [3, 4, 5],
    avatar: "/static/images/teacher.webp",
  },
  {
    id: 1,
    name: "Shamsul Arefin",
    email: "arefin@gmail.com",
    designation: "Asistant Teacher",
    password: "1234",
    subject: "Math",
    classes: [3, 4, 5],
    avatar: "/static/images/teacher.webp",
  },
  {
    id: 2,
    name: "Asaduzzaman Kabir",
    email: "kabir@gmail.com",
    designation: "Asistant Teacher",
    password: "1234",
    subject: "Bengali",
    classes: [3, 4, 5],
    avatar: "/static/images/teacher.webp",
  },
  {
    id: 3,
    name: "Jannatul Ferdaus Nyma",
    email: "nyma@gmail.com",
    designation: "Asistant Teacher",
    password: "1234",
    subject: "English",
    classes: [3, 4, 5],
    avatar: "/static/images/teacher.webp",
  },
  {
    id: 4,
    name: "Ahmed Mostafa",
    email: "ahmed@gmail.com",
    designation: "Asistant Teacher",
    password: "1234",
    subject: "Math",
    classes: [3, 4, 5],
    avatar: "/static/images/teacher.webp",
  },
  {
    id: 5,
    name: "Abdur Rahim Akash",
    email: "akash@gmail.com",
    designation: "Asistant Teacher",
    password: "1234",
    subject: "Physics",
    classes: [3, 4, 5],
    avatar: "/static/images/teacher.webp",
  },
  {
    id: 6,
    name: "Samuel Test",
    email: "test@gmail.com",
    designation: "Part-time Teacher",
    password: "1234",
    subject: "English",
    classes: [3, 4, 5],
    avatar: "/static/images/teacher.webp",
  },
];

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // generic colors
      white: "#ffffff",
      whiteBlured: "#ffffff66",
      black: "#000000",
      blackBlured: "#00000066",

      // background colors (light)
      background: "$white",
      backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
      foreground: "$black",
      backgroundContrast: "$white",

      //semantic colors (light)
      blue50: "#EDF5FF",
      // ...
      blue900: "#00254D",
      // ...

      // brand colors
      primaryLight: "$blue200",
      primaryLightHover: "$blue300", // commonly used on hover state
      primaryLightActive: "$blue400", // commonly used on pressed state
      primaryLightContrast: "$blue600", // commonly used for text inside the component
      primary: "$blue600",
      primaryBorder: "$blue500",
      primaryBorderHover: "$blue600",
      primarySolidHover: "$blue700",
      primarySolidContrast: "$white", // commonly used for text inside the component
      primaryShadow: "$blue500",

      // ... rest of colors (secondary, success, warning, error, etc)
      secondaryLight: "$green200",
      secondaryLightHover: "$green300",
      secondaryLightActive: "$green400",
      secondaryLightContrast: "$green600",
      secondary: "#4ADE7B",
      secondaryBorder: "$green500",
      secondaryBorderHover: "$green600",
      secondarySolidHover: "$green700",
      secondaryShadow: "$green500",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      white: "#ffffff",
      whiteBlured: "#00000066",
      black: "#000000",
      blackBlured: "#ffffff66",

      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
      myColor: "#ff4ecd",
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if(window){
      if(!sessionStorage.getItem("teachers")){
        sessionStorage.setItem("teachers", JSON.stringify(teachers), 2);
      }
    }
  }, [])
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
      <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
