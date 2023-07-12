import "../css/Last14Days.css";
import MainBar from "../elements/mainBar.js";

const Last14Days = () => {
  const yAxis = [400, 300, 200, 100, 0];
  const xAxis = [
    [100, "3Jun"],
    [150, "4Jun"],
    [150, "5Jun"],
    [250, "6Jun"],
    [275, "7Jun"],
    [200, "8Jun"],
    [250, "9Jun"],
    [125, "10Jun"],
    [275, "11Jun"],
    [300, "12Jun"],
    [350, "13Jun"],
    [400, "14Jun"],
  ];
  return (
    <div className="Last14Days">
      <div className="Last14Days_section1">
        <span>Last 14 Days Active Workers in Training</span>
        <span className="Last14Days_title">Last 14 Days</span>
      </div>
      <div className="Last14Days_barGraph">
        <div className="Last14Days_yAxis">
          {yAxis.map((value) => {
            return <span>{value}</span>;
          })}
        </div>
        <div className="Last14Days_bars">
          {xAxis.map((value) => {
            return (
              <div className="Last14Days_singleBar">
                <MainBar barHeight={value[0]} />
                <div className="Last14Days_xAxis">{value[1]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Last14Days;
