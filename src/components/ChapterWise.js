import "../css/ChapterWise.css";

const ChapterWise = () => {
  const data = [
    ["#0D62FF", "Finished Training"],
    ["rgba(51, 51, 51)", " Chapter A"],
    ["#8400D5", "Chapter B"],
    ["#425F57", "Chapter C"],
    ["#ED1C24", "Haven't Started Yet"],
  ];
  return (
    <div className="ChapterWise">
      <div className="ChapterWise_title">Chapter Wise Status</div>
      <div className="ChapterWise_pie">
        <div className="ChapterWise_seperator1"></div>
        <div className="ChapterWise_seperator2"></div>
        <div className="ChapterWise_seperator3"></div>
        <div className="ChapterWise_seperator4"></div>
        <div className="ChapterWise_seperator5"></div>
        <div className="ChapterWise_polygon"></div>
        <div className="ChapterWise_innerCircle">
          <div className="ChapterWise_pieTitle">
            <span>Finished</span> <span>Training</span>
          </div>
        </div>
        <span className="ChapterWise_data1">22%</span>
        <span className="ChapterWise_data2">20%</span>
        <span className="ChapterWise_data3">7%</span>
        <span className="ChapterWise_data4">22%</span>
        <span className="ChapterWise_data5">34%</span>
      </div>
      <div className="ChapterWise_lastSection">
        {data.map((array) => {
          return (
            <div className="ChapterWise_lastDiv">
              <div
                style={{ backgroundColor: array[0] }}
                className="ChapterWise_dot"
              ></div>
              <div className="ChapterWise_text">{array[1]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterWise;
