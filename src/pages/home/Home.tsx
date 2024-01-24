import BarChartbox from "../../components/bar-chartbox/BarChartbox";
import BigChartbox from "../../components/big-chartbox/BigChartbox";
import Chartbox from "../../components/chartbox/Chartbox";
import PieChartbox from "../../components/pie-chartbox/PieChartbox";
import Topbox from "../../components/topbox/Topbox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox />
      </div>
      <div className="box box2">
        <Chartbox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Chartbox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartbox />
      </div>
      <div className="box box5">
        <Chartbox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <Chartbox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartbox />
      </div>
      <div className="box box8">
        <BarChartbox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartbox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
