import React, { useState } from "react";
import './test.css';

function SurveyForm() {
  const [answer, setAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleQuestionChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">What is your favorite color?</label>
          <select
            className="form-control"
            value={answer}
            onChange={handleQuestionChange}
          >
            <option value="">Select...</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Conditional modals */}
      {showModal && answer === "red" && (
        <div className="modal-bg">
          <div className="modal">
            You chose Red. Why do you like Red?
          </div>
        </div>
      )}

      {showModal && answer === "green" && (
        <div className="modal-bg">
          <div className="modal">
            You chose Green. Why do you like Green?
          </div>
        </div>
      )}

      {showModal && answer === "blue" && (
        <div className="modal-bg">
          <div className="modal">
            You chose Blue. Why do you like Blue?
          </div>
        </div>
      )}
    </div>
  );
}

export default SurveyForm;
