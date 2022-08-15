import React from 'react';
import { useGlobalContext } from './context';
const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form className="form-setup" onSubmit={handleSubmit}>
        <h2>Setup Quiz</h2>
        <div className="form-control">
          <label htmlFor="amount">nimber of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={quiz.amount}
            onChange={handleChange}
            className="form-input"
            min={1}
            max={50}
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">category</label>
          <select
            name="category"
            id="category"
            className="form-input"
            onChange={handleChange}
            value={quiz.category}
          >
            <option value="sports">sports</option>
            <option value="history">histor</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="difficulty">
            Difficulty 
          </label>
          <select name="difficulty" id="difficulty" onChange={handleChange} value={quiz.difficulty}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Difficult</option>
          </select>
        </div>

        {error && <p>can't generate questions please try another option</p>}
        <button className="submit-btn" type="submit">
          submit
        </button>
      </form>
    </section>
  );
};
export default SetupForm;
