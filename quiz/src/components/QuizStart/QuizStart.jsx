import PropsTypes from "prop-types";

const QuizStart = ({ onStartQuiz }) => {
  return (
    <div
      className="card-shine-effect flex-col text-center flex gap-10 items-center justify-center"
      style={{ width: "700px", height: "400px" }}
    >
      <h2 className="text-5xl flex-shrink-0 font-bold flex justify-around text-white">
        Welcome to the QuizApp!
      </h2>
      <button
        onClick={onStartQuiz}
        className="bg-transparent border-2 border-white text-xl font-bold text-white rounded p-2 m-2 transition-all hover:text-[#09090B] hover:bg-white ease-in duration-300"
      >
        Start Quiz
      </button>
    </div>
  );
};

QuizStart.propTypes = {
  onStartQuiz: PropsTypes.func.isRequired,
};

export default QuizStart;
