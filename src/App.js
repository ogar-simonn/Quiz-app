import React from 'react';
import './index.css';
import { useGlobalContext } from './context';
import SetupForm from './setupForm';
import Loading from './loading';
import Modal from './Modal';

export default function App() {
  const { waiting, loading, questions, index, error, correct, nextQuestion, checkAnswer  } =
    useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];

  return (
    <main>
      <section className="quiz">
        <Modal />
        <p className="correct-answers">
          {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <h2
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>Next question </button>
      </section>
    </main>
  );
}
