import "../css/Analytics.css";
import Chart from "../elements/chart.js";
import trendUpGreen from "../elements/icons/trendUpGreen.svg";
import trendUpRed from "../elements/icons/trendUpRed.svg";

const Analytics = () => {
  const data = [
    {
      title: "In Training Workers",
      mainData: "3,354",
      subData: "234",
      color: "green",
    },
    {
      title: "Video Watch-Time (Hrs)",
      mainData: "2,433",
      subData: "435",
      color: "red",
    },
    {
      title: "% Workers Passing Quiz",
      mainData: "95%",
      subData: "24%",
      color: "green",
    },
    {
      title: "Avg. Days Taken",
      mainData: "6",
      subData: "3",
      color: "green",
    },
  ];
  return (
    <div className="Analytics">
      {data.map((obj) => {
        return (
          <div className="Analytics_box" key={obj.title}>
            <div className="Analytics_title">{obj.title}</div>
            <div className="Analytics_subDiv">
              <div className="Analytics_data">
                <div className="Analytics_mainData">{obj.mainData}</div>
                <div className="Analytics_subData">
                  <img
                    className="Analytics_trend"
                    src={obj.color === "green" ? trendUpGreen : trendUpRed}
                    alt="trend"
                  />
                  {obj.subData}
                </div>
              </div>
              <div className="Analytics_chart">
                <Chart graphColor={obj.color} />{" "}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Analytics;
