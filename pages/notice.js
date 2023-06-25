import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
// import Schedule from "../static/data/schedule.json";

const Notice = () => {
  // data on load
  const [faculties, setFaculties] = useState([]);
  const [sections, setSections] = useState([1]);
  const [courses, setCourses] = useState([1]);
  const [schedule, setSchedule] = useState([]);
  // selected elements
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const [openSections, setOpenSections] = useState(false);
  const [openFaculties, setOpenFaculties] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setFaculties(JSON.parse(sessionStorage.getItem("teachers")));
      setCourses(JSON.parse(sessionStorage.getItem("courses")));
      setSchedule(JSON.parse(sessionStorage.getItem("schedule")));
    }
  }, []);

  useEffect(() => {
    if (selectedFaculty) {
      // faculty select
      // filter out all the courses from schedule with faculty initial
      // calculate all the credits of that faculty

      const facultyInitial = selectedFaculty.split("(")[1].split(")")[0];

      const newCourses = schedule.filter(
        (item) => item.instructor === facultyInitial
      );

      //   console.log(newCourses);

      let totalCredit = 0;

      newCourses.forEach((element) => {
        const tempCourse = courses.filter(
          (item) => item.courseCode === element.courseCode
        )[0];
        if (tempCourse) {
          totalCredit += tempCourse.credits;
        }
      });

      // faculties previous total credits for course
        //  totalCredit
        const creditsOfSelectedCourse = courses.filter(
            (item) => item.courseCode === selectedCourse
          )[0].credits;
  
          const newTotalCredit = totalCredit + creditsOfSelectedCourse;
  
          console.log(newTotalCredit);
  
          if (newTotalCredit > 11) {
            setOpenSubmit(false);
            setMessage({
              type: false,
              text: "Exceeding 11 credits!",
            });
          } else {
            setOpenSubmit(true);
          }
    }
  }, [selectedFaculty]);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }, [message]);

  return (
    <Layout>
      <div className="containerG my-20">
        <h1 className="text-4xl font-bold mb-10">Assign Courses </h1>
        <div>
          {faculties.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
              <div className="grid grid-cols-1 gap-2 my-3 p-3 border rounded-lg">
                <label htmlFor="course" className="font-semibold">
                  Select course to assign
                </label>
                <select
                  id="course"
                  className="min-w-[200px] border rounded-md p-1"
                  onChange={(e) => {
                    setSelectedCourse(e.target.value);
                    // find sections
                    const filteredItems = schedule.filter(
                      (item) => item.courseCode === e.target.value
                    );
                    let tempSections = [];
                    if (filteredItems.length) {
                      tempSections = filteredItems.map((item, i) => {
                        return item.section;
                      });
                    }

                    tempSections.length && setSections(tempSections);
                    tempSections.length && setOpenSections(true);
                  }}
                >
                  <option>...</option>
                  {courses.map((course, i) => {
                    return <option key={i}>{course.courseCode}</option>;
                  })}
                </select>
              </div>
              {openSections ? (
                <div className="grid grid-cols-1 gap-2 my-3 p-3 border rounded-lg">
                  <label htmlFor="section" className="font-semibold">
                    Select section to assign
                  </label>
                  <select
                    id="section"
                    className="min-w-[200px] border rounded-md p-1"
                    onChange={(e) => {
                      setSelectedSection(parseInt(e.target.value));
                      setOpenFaculties(true);
                    }}
                  >
                    <option>...</option>
                    {sections.map((section, i) => {
                      return <option key={i}>{section}</option>;
                    })}
                  </select>
                </div>
              ) : null}
              {openSections && openFaculties ? (
                <div className="grid grid-cols-1 gap-2 my-3 p-3 border rounded-lg">
                  <label htmlFor="course" className="font-semibold">
                    Select faculty to assign
                  </label>
                  <select
                    id="course"
                    className="min-w-[200px] border rounded-md p-1"
                    onChange={(e) => {
                      setSelectedFaculty(e.target.value);
                      //   setOpenSubmit(true);
                    }}
                  >
                    <option>...</option>
                    {faculties.map((faculty, i) => {
                      return <option key={i}>{faculty.name}</option>;
                    })}
                  </select>
                </div>
              ) : null}
              {openSections && openFaculties && openSubmit ? (
                <div className="p-3">
                  <button
                    className="bg-blue-600 text-white font-bold px-4 py-1 rounded-lg"
                    onClick={() => {
                      // schedules
                      // instructor

                      const facultyInitial = selectedFaculty
                        .split("(")[1]
                        .split(")")[0];

                      // get schedule
                      // find selected course form schedule
                      // update with new faculty initial
                      // set to session storage
                      const newSchedule = schedule.map((item) => {
                        if (
                          item.courseCode === selectedCourse &&
                          item.section === selectedSection
                        ) {
                          let tempSchedule = { ...item };
                          tempSchedule.instructor = facultyInitial;

                          return tempSchedule;
                        } else {
                          return item;
                        }
                      });

                      setSchedule(newSchedule);
                      sessionStorage.setItem(
                        "schedule",
                        JSON.stringify(newSchedule)
                      );

                      console.log(newSchedule);

                      setOpenSubmit(false);
                      setOpenFaculties(false);
                      setOpenSections(false);

                      setMessage({
                        type: true,
                        text: `Course ${selectedCourse} assigned to faculty ${selectedFaculty} with section ${selectedSection} successfully!`,
                      });

                      setSelectedFaculty(null);
                      setSelectedSection(null);
                      setSelectedCourse(null);
                    }}
                  >
                    Submit
                  </button>
                </div>
              ) : null}
              {message ? (
                <div
                  className={`px-3 py-1 rounded-lg text-white ${
                    message.type ? "bg-green-400" : "bg-red-400"
                  } my-5 mx-3`}
                >
                  {message.text}
                </div>
              ) : null}
            </div>
          ) : (
            <div>There is not faculties to assign course</div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Notice;
