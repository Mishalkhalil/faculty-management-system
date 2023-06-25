import Layout from "../Layout/Layout";
import Schedule from "../static/data/schedule.json";

const Gallary = () => {
  console.log(Schedule);
  return (
    <Layout>
      <div className="containerG">
        <h1 className="my-20 text-3xl font-bold">Schedules</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {Schedule.map((item, i) => {
            console.log(item);
            return (
              <div
                key={i}
                className="grid grid-cols-1 gap-3 p-5 rounded border hover:shadow-xl"
              >
                <h1 className="text-2xl font-bold">{item.courseCode}</h1>
                <h3>{item.section}</h3>
                <h2>{item.instructor}</h2>
                <p>{item.startTime}</p>
                <p>{item.endTime}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Gallary;
