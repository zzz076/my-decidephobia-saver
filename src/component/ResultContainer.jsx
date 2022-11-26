import React from 'react';

export default function ResultContainer() {
  return (
    <div className="result-container">
      <h1 className="result-title">懇請惠賜自己喜歡的食物一票</h1>
      <div className="result-input">水餃 當選</div>
      <div className="result-btns">
        <button className="result-btn confirm-btn">Yes</button>
        <button className="result-btn random-btn">reRandom</button>
      </div>
    </div>
  );
}
