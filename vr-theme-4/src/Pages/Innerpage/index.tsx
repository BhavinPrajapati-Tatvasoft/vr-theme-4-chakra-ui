import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Innerpage = () => {
  return (
    <>
      <Helmet>
        <title>Innerpage</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main-content">Innerpage</div>
      </div>
    </>
  );
};

export default Innerpage;
