import "../css/mainBar.css";

const SmallBar = ({ barHeight, totalHeight }) => {
  const value1 = (totalHeight / 160) * 10;
  const value2 = (barHeight / 160) * 10;
  const padding = 10 - value1;
  return (
    <div style={{ paddingTop: `${padding}rem` }} className="SmallBar">
      <div style={{ height: `${value1}rem` }} className="SmallBar_back">
        <div
          style={{ height: `${value2}rem` }}
          className="SmallBar_front"
        ></div>
      </div>
    </div>
  );
};

export default SmallBar;
