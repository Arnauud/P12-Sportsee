import React from 'react';
import cal from '../../../assets/calories-icon.svg';
import protein from '../../../assets/protein-icon.svg';
import carb from '../../../assets/carbs-icon.svg';
import lipide from '../../../assets/fat-icon.svg';

function MacroNutrient({ calories, proteines, glucides, lipides }) {
  return (
    <section className='dashboard-macro'>
    <div className="macro-nutrient-container">
      <div className="macro-container">
        <img className='micro-icon' src={cal} alt="micro-nutrient icon" />
        <div className="text-container">
          <h4 className="mirco-text">{calories}kCal</h4>
          <p>Calories</p>
        </div>
      </div>
      <div className="macro-container">
        <img className='micro-icon' src={protein} alt="micro-nutrient icon" />
        <div className="text-container">
          <h4 className="mirco-text">{proteines}g</h4>
          <p>Protéines</p>
        </div>
      </div>
      <div className="macro-container">
        <img className='carbs-icon' src={carb} alt="micro-nutrient icon" />
        <div className="text-container">
          <h4 className="mirco-text">{glucides}g</h4>
          <p>Glucides</p>
        </div>
      </div>
      <div className="macro-container">
        <img className='micro-icon' src={lipide} alt="micro-nutrient icon" />
        <div className="text-container">
          <h4 className="mirco-text">{lipides}g</h4>
          <p>Lipides</p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default MacroNutrient;
