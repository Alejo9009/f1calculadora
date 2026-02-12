import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isRacing, setIsRacing] = useState(false);

  const handleNumber = (num) => {
    setDisplay(display === '0' ? num.toString() : display + num);
  };

  const handleOperator = (op) => {
    setDisplay(display + op);
    setEquation(display + op);
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
      setEquation(display + ' = ' + result);
      setIsRacing(true);
      setTimeout(() => setIsRacing(false), 500);
    } catch (error) {
      setDisplay('ERROR');
      setEquation('PIT STOP FAILURE');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const buttons = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C', '⌫']
  ];

  const handleButtonClick = (btn) => {
    if (btn === 'C') clear();
    else if (btn === '⌫') setDisplay(display.slice(0, -1) || '0');
    else if (btn === '=') calculate();
    else if (['÷', '×', '-', '+'].includes(btn)) {
      let op = btn;
      if (btn === '÷') op = '/';
      if (btn === '×') op = '*';
      handleOperator(op);
    } else handleNumber(btn);
  };

  return (
    <div className={`${styles.calculator} ${isRacing ? styles.racing : ''}`}>
      <div className={styles.telemetry}>
        <div className={styles.revLights}>
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className={`${styles.revLight} ${i < display.length % 13 ? styles.active : ''}`}
            ></div>
          ))}
        </div>
        
        <div className={styles.display}>
          <div className={styles.equation}>{equation}</div>
          <div className={styles.mainDisplay}>{display}</div>
        </div>
        
        <div className={styles.speedTrap}>
          <span>SPEED: {Math.min(display.length * 50, 350)} km/h</span>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${Math.min(display.length * 14, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className={styles.buttonGrid}>
        {buttons.flat().map((btn, index) => (
          <button
            key={index}
            className={`
              ${styles.button} 
              ${btn === '=' ? styles.raceButton : ''}
              ${btn === 'C' ? styles.steeringWheel : ''}
              ${btn === '⌫' ? styles.drs : ''}
            `}
            onClick={() => handleButtonClick(btn)}
          >
            {btn === 'C' ? '🔄' : btn}
          </button>
        ))}
      </div>
    </div>
  );
}