import Layout from "../Layout/Layout";
import OfferedCourse from "../static/data/offeredCourses.json";

const Students = () => {
  return (
    <Layout>
      <div className="containerG my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {OfferedCourse.map((item, i) => {
            console.log(item);
            return (
              <div
                key={i}
                className="grid grid-cols-1 gap-3 p-5 rounded border hover:shadow-xl"
              >
                <div className="text-3xl font-bold">{item.courseCode}</div>
                <div>{item.courseTitle}</div>
                <div>Credits: {item.credits}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Students;
