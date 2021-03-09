import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

const ulSquares = document.querySelector("ul.squares")
for(let i = 0; i < 11; i++){
  const li = document.createElement("li");
  ulSquares.appendChild(li);
  const random = (min,max) => Math.random() * (max - min) + min;
  const size = Math.floor(random(10,120));
  const position = random(1,99)
  const delay = random(5,0.1);
  const duration = random(24,12);

  li.style.width = `${size}px`
  li.style.height = `${size}px`
  li.style.bottom = `-${size}px`
  li.style.left = `${position}%`
  li.style.animationDelay = `${delay}s`
  li.style.animationDuration = `${duration}s`
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`
}


ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator/>
  </div>,
  document.getElementById('root')
);
reportWebVitals();
