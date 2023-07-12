import "../css/Sidebar.css";
import logo from "../elements/logo/logo.svg";
import dashboardIcon from "../elements/icons/dashboardIcon.svg";
import trainingsIcon from "../elements/icons/trainingsIcon.svg";
import userIcon from "../elements/icons/userIcon.svg";
import analyticsIcon from "../elements/icons/analyticsIcon.svg";

const Sidebar = () => {
  const menu = [
    [trainingsIcon, "Trainings"],
    [userIcon, "Users"],
    [analyticsIcon, "Analytics"],
    [analyticsIcon, "My Account"],
    [analyticsIcon, "Support"],
  ];
  return (
    <div className="Sidebar">
      <div className="Sidebar_logo_box">
        <img src={logo} className="Sidebar_logo" alt="logo" />
      </div>
      <div className="Sidebar_overview">
        <img
          src={dashboardIcon}
          className="Sidebar_dashboard_icon"
          alt="icon"
        />
        <div className="Sidebar_dashboard_text">Dashboard</div>
      </div>
      {menu.map((array) => {
        return (
          <div key={array[1]} className="Sidebar_menu">
            <img src={array[0]} className="Sidebar_menu_icon" alt="icon" />
            <div className="Sidebar_menu_text">{array[1]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
