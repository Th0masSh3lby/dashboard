import "../css/MonthlyActivity.css";
import arrowUp from "../elements/icons/arrowUp.svg";
import ListLine from "../elements/listLine";

const MonthlyActivity = () => {
  const data = [
    ["course a", "23 Workers Took This Course This Week"],
    ["course b", "253 Workers Took This Course This Week"],
    ["course c", "253 Workers Took This Course This Week"],
    ["course d", "253 Workers Took This Course This Week"],
  ];
  return (
    <div className="MonthlyActivity">
      <div className="MonthlyActivity_title">Monthly Training Activity</div>
      <div className="MonthlyActivity_subTitle">
        <img src={arrowUp} alt="icon" className="arrowUp" />
        <span>16% more enrollees this month</span>
      </div>
      <div className="MonthlyActivity_main">
        <div className="MonthlyActivity_mainContent">
          <ListLine />
          <div>
            {data.map((array) => {
              return (
                <div key={array[0]} className="MonthlyActivity_course">
                  <div className="MonthlyActivity_courseTitle">{array[0]}</div>
                  <div className="MonthlyActivity_courseDes">{array[1]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyActivity;
