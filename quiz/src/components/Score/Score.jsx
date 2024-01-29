import PropTypes from "prop-types";

const Score = ({
  score,
  totalQuestions,
  selectedAnswers,
  correctAnswers,
  onRestart,
}) => {
  return (
    <div
      className="score-section card-shine-effect text-white flex-col text-center items-center justify-center"
      style={{ width: "700px", height: "600px" }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 text-start">
          Quiz Results:
          <br />
          You scored {score.filter(Boolean).length} / {totalQuestions}
        </h2>
        <button
          onClick={onRestart}
          className="border-2 border-white rounded text-white p-2 m-2 hover:bg-white transition-all hover:text-[#09090B] ease-in duration-300"
        >
          Restart Quiz
        </button>
      </div>
      <div className="mb-2">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Question</th>
              <th className="px-4 py-2">Your answer</th>
              <th className="px-4 py-2">Correct answer</th>
            </tr>
          </thead>
          <tbody>
            {selectedAnswers.map((answer, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  {answer !== correctAnswers[index] ? (
                    <span className="rounded-full bg-red-600 text-md font-semibold py-1 px-4 text-white">
                      {answer}
                    </span>
                  ) : (
                    <span className="rounded-full bg-green-700 text-md font-semibold py-1 px-4 text-white">
                      {answer}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2">
                  <span className="bg-green-700 text-white text-md py-1 px-4 font-semibold rounded-full">
                    {correctAnswers[index]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  selectedAnswers: PropTypes.array.isRequired,
  correctAnswers: PropTypes.array.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default Score;
