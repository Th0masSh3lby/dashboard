import "../css/chart.css";

const Chart = ({ graphColor }) => {
  const style = { background: `linear-gradient(${graphColor}, white)` };
  const axis = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="Chart">
      <div className="Chart_Graph" style={style}>
        {/*MT in className - MondayTuesday */}
        <div className="Chart_MT">
          <div className="Chart_MT_block"></div>
          <div className="Chart_MT_triangle"></div>
        </div>
        <div className="Chart_TW">
          <div className="Chart_TW_block"></div>
          <div className="Chart_TW_triangle"></div>
        </div>
        <div className="Chart_WTh"></div>
        <div className="Chart_ThF"></div>
        <div className="Chart_FS">
          <div className="Chart_FS_block"></div>
          <div className="Chart_FS_triangle"></div>
        </div>
        <div className="Chart_SS">
          <div className="Chart_SS_block"></div>
          <div className="Chart_SS_triangle"></div>
        </div>
      </div>
      <div className="Chart_Axis">
        {axis.map((coord) => {
          return (
            <span key={"Chart." + { coord }} className="Chart_coords">
              {coord}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
