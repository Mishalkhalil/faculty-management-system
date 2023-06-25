import Layout from "../Layout/Layout";

import { useState, useEffect } from "react";

const Result = () => {
  const [search, setSearch] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [report, setReport] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("schedule")) {
        setSchedule(JSON.parse(sessionStorage.getItem("schedule")));
      }
    }
  }, []);

  const handleGetReport = () => {
    const courses = schedule.filter((item) => item.instructor == search);
    if (courses.length) {
      setReport(courses);
    }
  };

  return (
    <Layout>
      <div className="containerG my-20">
        <h1 className="text-3xl mb-10 font-bold">Report</h1>
        <div className="my-10 max-w-[300px] grid grid-cols-1 gap-5">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="px-2 py-1 border rounded-md"
          />
          <button
            onClick={() => search && search.length >= 2 && handleGetReport()}
            className="bg-blue-600 text-white rounded-md px-3 py-1"
          >
            Get report
          </button>
        </div>
        <div>
          {report.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
              {report.map((item, i) => {
                console.log(item);
                return (
                  <div
                    key={i}
                    className="grid grid-cols-1 gap-2 p-3 border rounded-lg hover:shadow-xl"
                  >
                    <h2 className="text-3xl font-bold">{item.courseCode}.{item.section}</h2>
                    <p>Start Time: {item.startTime}</p>
                    <p>End Time: {item.endTime}</p>
                    <p>
                      Day: {item.day} | Instructor: {item.instructor}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : search ? (
            "No course scheduled with this initial!"
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default Result;
