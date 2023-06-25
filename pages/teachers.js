import Layout from "../Layout/Layout";
import Faculties from "../static/data/faculties.json";
import TeachersCard from "../components/admin/teacher/TeachersCard";
const Teachers = () => {
  console.log(Faculties);
  return (
    <Layout>
      <div className="containerG sectionG">
        <h2 className="text-xl lg:text-2xl font-bold pb-10">Faculties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
          {Faculties.map((item, i) => {
            return <TeachersCard key={i} props={{ item }} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Teachers;
