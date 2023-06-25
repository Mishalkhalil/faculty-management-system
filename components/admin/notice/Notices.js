import ButtonG from "../../ButtonG";
import { useState } from "react";
import { Badge, Button } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import NoticesCard from "./NoticesCard";
import NoticesTable from "./NoticesTable";
import AddNotice from "./AddNotice";

const Notices = () => {
  const NoticesContents = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  const [selectedTab, setSeletedTab] = useState("Notices");
  const setNotices = () => {
    setSeletedTab("Notices");
  };
  const setManage = () => {
    setSeletedTab("Manage");
  };
  const setAddNew = () => {
    setSeletedTab("Add new");
  };
  return (
    <div>
      <div className="pb-5">
        <Button.Group>
          <ButtonG
            text="Notices"
            color={selectedTab === "Notices" ? "primary" : "primaryBorder"}
            func={setNotices}
          />
          <ButtonG
            text="Manage"
            color={selectedTab === "Manage" ? "primary" : "primaryBorder"}
            func={setManage}
          />
          <ButtonG
            text="Add new"
            color={selectedTab === "Add new" ? "primary" : "primaryBorder"}
            func={setAddNew}
          />
        </Button.Group>
        <Badge variant="flat" color="error" size="xs" className="pl-2">
            Developing
          </Badge>
      </div>
      {selectedTab === "Notices" ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {NoticesContents.map((item, i) => {
              return <NoticesCard key={i} props={{ item }} />;
            })}
          </div>
          <div className="py-10">
            <Pagination loop color="primary" total={10} initialPage={6} />
          </div>
        </div>
      ) : null}
      {selectedTab === "Manage" ? (
        <div>
          <NoticesTable />
        </div>
      ) : null}
      {selectedTab === "Add new" ? (
        <div>
          <AddNotice />
        </div>
      ) : null}
    </div>
  );
};

export default Notices;
