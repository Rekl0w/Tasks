import PropsTypes from "prop-types";

const Question = ({ question, options, onAnswer, timer, icon }) => {
  return (
    <div
      className="question-section card-shine-effect flex-col items-center justify-center text-white"
      style={{ width: "700px", height: "600px" }}
    >
      <div className="question-count font-bold text-3xl flex justify-between">
        <span>
          Question {question.number}/{question.total}
        </span>
        <div className="timer-section ml-16 text-center justify-center items-center flex font-bold text-lg">
          <img src={icon} className="w-[24px] h-[24px] mr-4" alt="" /> {timer}
        </div>
      </div>
      <div className="flex flex-col justify-between h-full py-12 ">
        <div className="question-text font-semibold text-2xl border rounded-md p-2">
          {question.title}
        </div>
        <div className="answer-section flex-col flex">
          {timer > 20
            ? options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onAnswer(option)}
                  className="bg-transparent border-2 border-white rounded tracking-wide text-xl font-semibold text-white p-2 m-2 cursor-not-allowed"
                  disabled
                >
                  {option}
                </button>
              ))
            : options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onAnswer(option)}
                  className="bg-white border-2 border-white text-[#09090B] tracking-wide text-xl font-semibold rounded p-2 m-2 hover:bg-slate-300"
                >
                  {option}
                </button>
              ))}
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropsTypes.object.isRequired,
  options: PropsTypes.array.isRequired,
  onAnswer: PropsTypes.func.isRequired,
  timer: PropsTypes.number.isRequired,
  icon: PropsTypes.string.isRequired,
};

export default Question;
