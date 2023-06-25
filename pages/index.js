import { Card, Image, useTheme } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Login from "../components/login/login";
import Layout from "../Layout/Layout";

const winD = typeof window !== "undefined";

const Home = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const handler = () => {
    const loggedin =
      winD && sessionStorage.getItem("loggedin") === "yes" ? true : false;
    if (loggedin) {
      router.push("/admin");
    } else {
      setVisible(true);
    }
  };
  const closeHandler = () => {
    setVisible(false);
  };
  const loginHandler = () => {
    winD && sessionStorage.setItem("loggedin", "yes", 2);
    router.push("/admin");
    setVisible(false);
  };

  const heroItems = [
    { text: "Teachers", color: "#F31260", link: "/teachers" },
    { text: "Students", color: "#7828C8", link: "/students" },
    { text: "Admin", color: "#17C964", link: "/admin" },
    { text: "Notice", color: "#F5A524", link: "/notice" },
    { text: "Result", color: "#0072F5", link: "/result" },
    { text: "Gallary", color: "#F31260", link: "/gallary" },
  ];
  return (
    <Layout>
      <div className="w-full min-h-[50vh] max-h-[70vh] homehero"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sectionG containerG">
        {heroItems.map((item, i) => {
          return item.text === "Admin" ? (
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
