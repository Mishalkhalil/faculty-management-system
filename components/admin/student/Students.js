import ButtonG from "../../ButtonG";
import { useState } from "react";
import { Badge, Button } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import StudentsCard from "./StudentsCard";
import StudentsTable from "./StudentsTable";
import AddStudent from "./AddStudent";

const Students = () => {
  const StudentsContents = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  const [selectedTab, setSeletedTab] = useState("Students");
  const setStudents = () => {
    setSeletedTab("Students");
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
            text="Students"
            color={selectedTab === "Students" ? "primary" : "primaryBorder"}
            func={setStudents}
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
      {selectedTab === "Students" ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {StudentsContents.map((item, i) => {
              return <StudentsCard key={i} props={{ item }} />;
            })}
          </div>
          <div className="py-10">
            <Pagination loop color="primary" total={10} initialPage={6} />
          </div>
        </div>
      ) : null}
      {selectedTab === "Manage" ? (
        <div>
          <StudentsTable />
        </div>
      ) : null}
      {selectedTab === "Add new" ? (
        <div>
          <AddStudent />
        </div>
      ) : null}
    </div>
  );
};

export default Students;
