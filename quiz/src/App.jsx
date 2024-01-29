import { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import "./App.css";
import icon from "./assets/watch.png";
import Question from "./components/Question/Question";
import Score from "./components/Score/Score";
import QuizStart from "./components/QuizStart/QuizStart";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState([]);
  const [timer, setTimer] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);

  useEffect(() => async () => {
    await axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
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
      if (!answered && !showScore) {
        setScore([...score, false]);
        setSelectedAnswers([...selectedAnswers, "No Answer"]);
      }
      handleNextQuestion();
    }

    return () => {
      clearTimeout(timerId);
      setAnswered(false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, currentQuestion, answered, showScore, score, selectedAnswers]);

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
    <div className="p-4 bg-gray-600 min-h-screen flex items-center justify-center overflow-hidden">
      {!showQuiz ? (
        <QuizStart onStartQuiz={startQuiz} />
      ) : showScore ? (
        <Score
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
          selectedAnswers={selectedAnswers}
          correctAnswers={correctAnswers}
        />
      ) : (
        <Question
          question={{
            title: questions[currentQuestion]?.title,
            number: currentQuestion + 1,
            total: questions.length,
          }}
          options={questions[currentQuestion]?.body.split(" ").slice(0, 4)} // Cevap seçenekleri
          onAnswer={handleAnswerOptionClick}
          timer={timer}
          icon={icon}
        />
      )}
    </div>
  );
}

export default Quiz;
