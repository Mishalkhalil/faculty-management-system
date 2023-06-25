import { Card, Image, useTheme } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Login from "../components/login/login";
import Layout from "../Layout/Layout";
import { useEffect } from "react";

import FacultiesFromJSON from "../static/data/faculties.json";
import ScheduleFromJSON from "../static/data/schedule.json";
import CoursesFromJSON from "../static/data/offeredCourses.json";

const winD = typeof window !== "undefined";

const Home = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (winD) {
      if (!sessionStorage.getItem("teachers")) {
        sessionStorage.setItem("teachers", JSON.stringify(FacultiesFromJSON));
      }
      if (!sessionStorage.getItem("courses")) {
        sessionStorage.setItem("courses", JSON.stringify(CoursesFromJSON));
      }
      if (!sessionStorage.getItem("schedule")) {
        sessionStorage.setItem("schedule", JSON.stringify(ScheduleFromJSON));
      }
    }
  }, []);
  const handler = () => {
    const loggedin =
      winD && sessionStorage.getItem("loggedin") === "yes" ? true : false;
    if (loggedin) {
      router.push("/teachers");
    } else {
      setVisible(true);
    }
  };
  const closeHandler = () => {
    setVisible(false);
  };
  const loginHandler = () => {
    winD && sessionStorage.setItem("loggedin", "yes", 2);
    router.push("/teachers");
    setVisible(false);
  };

  const heroItems = [
    { text: "Faculty", color: "#F31260", link: "/teachers" },
    { text: "Courses", color: "#7828C8", link: "/students" },
    { text: "Schedule", color: "#F31260", link: "/gallary" },
    { text: "Assigned Courses", color: "#F5A524", link: "/notice" },
    { text: "Report", color: "#0072F5", link: "/result" },
    { text: "Account", color: "#17C964", link: "/admin" },
  ];
  return (
    <Layout>
      <div className="w-full min-h-[50vh] max-h-[70vh] homehero"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sectionG containerG">
        {heroItems.map((item, i) => {
          return item.link === "/admin" ? (
            <div key={i}>
              <Card
                isPressable
                isHoverable
                variant="bordered"
                className={`w-full min-h-[100px] flex items-center justify-center font-bold text-lg lg:text-2xl text-white`}
                style={{ background: item.color }}
                onClick={handler}
              >
                {item.text}
              </Card>
            </div>
          ) : (
            <Link key={i} href={item.link}>
              <Card
                isPressable
                isHoverable
                variant="bordered"
                className={`w-full min-h-[100px] flex items-center justify-center font-bold text-lg lg:text-2xl text-white`}
                style={{ background: item.color }}
              >
                {item.text}
              </Card>
            </Link>
          );
        })}
      </div>
      <Login props={{ visible, closeHandler, loginHandler }} />
    </Layout>
  );
};

export default Home;
