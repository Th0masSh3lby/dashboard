import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Analytics from "./components/Analytics";
import ChapterWise from "./components/ChapterWise";
import Last14Days from "./components/Last14Days";
import MonthlyActivity from "./components/MonthlyActivity";
import QuizPassing from "./components/QuizPassing";
import DailyTraining from "./components/DailyTraining";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Analytics />
      <div className="MiddleSection">
        <ChapterWise />
        <Last14Days />
      </div>
      <div className="LastSection">
        <MonthlyActivity />
        <QuizPassing />
        <DailyTraining />
      </div>
    </div>
  );
}

export default App;
