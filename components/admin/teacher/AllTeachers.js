import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import TeachersCard from "./TeachersCard";

const AllTeachers = () => {
  const [paginatedIndex, setPaginatedIndex] = useState(0);
  const cardsPerPage = 8;
  const teachersContents = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {teachersContents
            .slice(paginatedIndex, paginatedIndex + cardsPerPage)
            .map((item, i) => {
              return <TeachersCard key={i} props={{ item }} />;
            })}
        </div>
        <div className="py-10">
          <Pagination
            // controls={false}
            color="primary"
            total={Math.ceil(teachersContents.length / cardsPerPage)}
            initialPage={1}
            onChange={(e) =>
              paginatedIndex !== 1 && setPaginatedIndex((e - 1) * cardsPerPage)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;
