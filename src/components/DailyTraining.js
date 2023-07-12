import "../css/DailyTraining.css";
import SmallBar from "../elements/SmallBar.js";

const DailyTraining = () => {
  const yAxis = [160, 120, 80, 40, 0];
  const xAxis = [
    [30, "S", 60],
    [60, "M", 110],
    [50, "T", 90],
    [65, "W", 120],
    [50, "T", 90],
    [70, "F", 135],
    [50, "S", 90],
    [30, "M", 60],
    [55, "T", 95],
    [50, "W", 90],
  ];

  return (
    <div className="DailyTraining">
      <div className="DailyTraining_section1">
        <span>Daily Training Completions</span>
        <span className="DailyTraining_title">Last 7 Days</span>
      </div>
      <div className="DailyTraining_barGraph">
        <div className="DailyTraining_back">
          <div className="DailyTraining_line"></div>
          <div className="DailyTraining_line1"></div>
          <div className="DailyTraining_line2"></div>
          <div className="DailyTraining_line3"></div>
          <div className="DailyTraining_line4"></div>
        </div>
        <div className="DailyTraining_yAxis">
          {yAxis.map((value) => {
            return <span>{value}</span>;
          })}
        </div>
        <div className="DailyTraining_bars">
          {xAxis.map((value) => {
            return (
              <div className="DailyTraining_singleBar">
                <SmallBar barHeight={value[0]} totalHeight={value[2]} />
                <div className="DailyTraining_xAxis">{value[1]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DailyTraining;
