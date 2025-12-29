import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <Link to={"/dinosaurs"} className="title">
        <h1 className="">Dinosaurs</h1>
      </Link>
            <Link to={"/families"} className="title">
        <h1 className="">Families</h1>
      </Link>
    </div>
  );
};

export default HomePage;
