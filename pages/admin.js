import WithPrivateRoute from "../hoc/WithPrivateRoute";
import { Badge, Card, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Teachers from "../components/admin/teacher/Teachers";
import Layout from "../Layout/Layout";
import Students from "../components/admin/student/Students";
import Notices from "../components/admin/notice/Notices";
import CloseIcon from "../components/icons/CloseIcon";
import MenuIcon from "../components/icons/MenuIcon";

const Admin = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Teachers");
  const sideNavContents = [
    "Teachers",
    "Students",
    "Notice",
    "Results",
    "Gallary",
  ];
  

  useEffect(() => {
    setShowMenu(false);
  }, [selectedTab]);

  

  return (
    <WithPrivateRoute>
      <Layout>
        <div className="containerG sectionG grid grid-cols-12 gap-5 relative">
          <div className="fixed right-0 top-[110px] containerGr z-[10] block md:hidden">
            <div className="p-3 backdrop-blur-lg rounded-lg  border">
              <MenuIcon fill="#6d6d6d" size="20" className="cursor-pointer" onClick={() => setShowMenu(true)}/>
            </div>
          </div>
          <div
            className={`col-span-3 h-screen px-3 py-2 md:p-0 rounded-lg fixed md:sticky top-[100px] right-0 z-[10] md:z-0 backdrop-blur-sm md:backdrop-blur-[0] bg-none transition ease-in-out delay-150 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            } md:translate-x-0`}
          >
            <div className="block md:hidden w-full flex items-center justify-end pb-5">
              <CloseIcon fill="#6d6d6d" size="20" className="cursor-pointer" onClick={() => setShowMenu(false)}/>
            </div>
            <ul>
              {sideNavContents.map((item, i) => {
                return (
                  <li key={i}>
                    <LiCard
                      text={item}
                      setSelectedTab={setSelectedTab}
                      selectedTab={selectedTab}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-9">
            {selectedTab === "Teachers" ? <Teachers /> : null}
            {selectedTab === "Students" ? <Students /> : null}
            {selectedTab === "Notice" ? <Notices /> : null}
            {selectedTab === "Results" ? (
              <div>
                <Badge
                  variant="flat"
                  color="primary"
                  size="xs"
                  className="pl-2"
                >
                  Comming soon...
                </Badge>
              </div>
            ) : null}
            {selectedTab === "Gallary" ? (
              <div>
                <Badge
                  variant="flat"
                  color="primary"
                  size="xs"
                  className="pl-2"
                >
                  Comming soon...
                </Badge>
              </div>
            ) : null}
          </div>
        </div>
      </Layout>
    </WithPrivateRoute>
  );
};

export default Admin;

const LiCard = ({ text, setSelectedTab, selectedTab }) => {
  return (
    <Card
      isHoverable
      variant={selectedTab === text ? "flat" : "bordered"}
      css={{ mw: "400px" }}
      className="cursor-pointer"
    >
      <Text className="w-full px-2 py-3" onClick={() => setSelectedTab(text)}>
        {text}
        {["Results", "Gallary"].includes(text) ? (
          <Badge variant="flat" color="primary" size="xs" className="pl-2">
            Comming soon...
          </Badge>
        ) : null}
        {["Students", "Notice"].includes(text) ? (
          <Badge variant="flat" color="error" size="xs" className="pl-2">
            Developing
          </Badge>
        ) : null}
      </Text>
    </Card>
  );
};
