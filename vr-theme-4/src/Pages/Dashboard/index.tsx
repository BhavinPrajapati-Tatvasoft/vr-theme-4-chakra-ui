import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        {/* Main content Start */}
        <div className="main-content"></div>
        {/* Main content End */}
      </div>
    </>
  );
};
export default Dashboard;
