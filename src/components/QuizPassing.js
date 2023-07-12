import "../css/QuizPassing.css";

const QuizPassing = () => {
  return (
    <div className="QuizPassing">
      <div className="QuizPassing_title">Quiz Passing %</div>
      <div className="QuizPassing_circle1">
        <div className="QuizPassing_circle2"></div>
      </div>
      <div className="QuizPassing_data">
        <div className="QuizPassing_data1">
          <div className="QuizPassing_data1Dot"></div>
          <div className="QuizPassing_dataInfo">
            <div className="QuizPassing_dataTitle">passed</div>
            <div className="QuizPassing_dataDes">1423 Workers</div>
          </div>
        </div>
        <div className="QuizPassing_data1">
          <div className="QuizPassing_data2Dot"></div>
          <div className="QuizPassing_dataInfo">
            <div className="QuizPassing_dataTitle">failed</div>
            <div className="QuizPassing_dataDes">134 Workers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPassing;
