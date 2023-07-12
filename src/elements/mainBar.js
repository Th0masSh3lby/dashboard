import "../css/mainBar.css";

const mainBar = ({ barHeight }) => {
  const value = (barHeight / 400) * 12;
  return (
    <div className="mainBar">
      <div className="mainBar_back">
        <div style={{ height: `${value}rem` }} className="mainBar_front"></div>
      </div>
    </div>
  );
};

export default mainBar;
