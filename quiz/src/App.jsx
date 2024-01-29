import React, { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import "./App.css";
import icon from "./assets/1.png";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false); // Quiz'in gösterilip gösterilmeyeceğini kontrol et
  const [score, setScore] = useState([]);
  const [timer, setTimer] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const shuffledCorrectAnswers = res.data.slice(0, 10).map((q) => {
        return q.body
          .split(" ")
          .slice(0, 4)
          .sort(() => 0.5 - Math.random())[0];
      });
      setQuestions(res.data.slice(0, 10));
      setCorrectAnswers(shuffledCorrectAnswers);
    });
  }, [questions.length]);

  useEffect(() => {
    let timerId;
    if (timer > 0) {
      timerId = setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      if (!answered) {
        setScore([...score, false]);
        setSelectedAnswers([...selectedAnswers, "No Answer"]);
      }
      handleNextQuestion();
    }

    return () => {
      clearTimeout(timerId);
      setAnswered(false);
    };
  }, [timer, currentQuestion]);

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(30);
    } else {
      setShowScore(true);
    }
  };

  const handleAnswerOptionClick = (answer) => {
    setScore([...score, answer === correctAnswers[currentQuestion]]);
    setSelectedAnswers([...selectedAnswers, answer]);
    setAnswered(true);
    handleNextQuestion();
  };

  const restartQuiz = () => {
    setShowScore(false);
    setShowQuiz(false);
    setQuestions([]);
    setCurrentQuestion(0);
    setScore([]);
    setSelectedAnswers([]);
    setCorrectAnswers([]);
    setTimer(30);
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setTimer(30);
    setCurrentQuestion(0);
    setScore([]);
    setSelectedAnswers([]);
  };

  return (
    <div className="app p-4 bg-gray-600 min-h-screen flex items-center justify-center overflow-hidden">
      {!showQuiz ? (
        <div className="start-quiz-section">
          <div
            className="card-shine-effect flex-col text-center flex gap-10 items-center justify-center"
            style={{ width: "700px", height: "400px" }}
          >
            <h2 className="text-5xl flex-shrink-0 font-bold flex justify-around text-white">
              Welcome to the Quiz!
            </h2>

            <button
              onClick={startQuiz}
              className="bg-transparent border-2 border-white text-xl font-bold text-white rounded p-2 m-2 transition-all hover:text-[#09090B] hover:bg-white ease-in duration-300"
            >
              Start Quiz
            </button>
          </div>
        </div>
      ) : showScore ? (
        <div
          className="score-section card-shine-effect text-white flex-col text-center items-center justify-center"
          style={{ width: "700px", height: "650px" }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-4 text-start">
              Quiz Results:
              <br />
              You scored {score.filter(Boolean).length} / {questions.length}
            </h2>
            <button
              onClick={restartQuiz}
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
                {score.map((s, i) => (
                  <tr key={i} className="">
                    <td className="px-4 py-2">{i + 1}</td>
                    <td className="px-4 py-2">
                      {selectedAnswers[i] !== correctAnswers[i] ? (
                        <span className="rounded-full bg-red-600 text-md font-semibold py-1 px-4 text-white">
                          {selectedAnswers[i]}
                        </span>
                      ) : (
                        <span className="rounded-full bg-green-700 text-md font-semibold py-1 px-4 text-white">
                          {selectedAnswers[i]}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <span className="bg-green-700 text-white text-md py-1 px-4 font-semibold rounded-full">
                        {correctAnswers[i]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xl mt-4"></p>
        </div>
      ) : (
        <>
          <div
            className="question-section card-shine-effect flex-col items-center justify-center text-white"
            style={{ width: "700px", height: "600px" }}
          >
            <div className="question-count mb-16 font-bold text-3xl flex justify-between">
              <span>
                Question {currentQuestion + 1}/{questions.length}
              </span>
              <div className="timer-section ml-16 text-center justify-center items-center flex font-bold text-lg">
                <img src={icon} className="w-[24px] h-[24px] mr-4" alt="" />{" "}
                {timer}
              </div>
            </div>

            <div className="question-text font-semibold text-2xl border rounded-md p-2 mb-20">
              {questions[currentQuestion]?.title}
            </div>
            <div className="answer-section flex-col flex">
              {timer > 30
                ? questions[currentQuestion]?.body
                    .split(" ")
                    .slice(0, 4)
                    .map((answerOption, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerOptionClick(answerOption)}
                        className="bg-transparent border-2 border-white rounded-md tracking-wide text-xl font-semibold text-white p-2 m-2 text cursor-not-allowed"
                        disabled
                      >
                        {answerOption}
                      </button>
                    ))
                : questions[currentQuestion]?.body
                    .split(" ")
                    .slice(0, 4)
                    .map((answerOption, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerOptionClick(answerOption)}
                        className="bg-white text-[#09090B] tracking-wide text-xl font-semibold rounded p-2 m-2 text hover:bg-slate-300"
                      >
                        {answerOption}
                      </button>
                    ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
