import React from "react";
import ReactDOM from "react-dom";
import HeadingImport from "./HeadingJSX"

let currentDate = new Date();
let currentSecs = currentDate.getSeconds();
let currentMinutes = currentDate.getMinutes();
let hour24 = currentDate.getHours();
let currentDay = currentDate.getDate();
let currentYear = currentDate.getFullYear();
let ampm;
let hour12;

const months = [
  "Jan","February","March","April","May","June",
  "July","August","September","October","November","December"
];

let monthName = months[currentDate.getMonth()];
let monthNumber = currentDate.getMonth() + 1;
// getMonth() returns Month from 0.
console.log(monthNumber);

if (hour24 === 0) { // 00 Hrs
  hour12 = 12;
  ampm = "AM";
}
else if (hour24 >= 1 && hour24 <= 12) { // 1 to 12 Hrs
  hour12 = hour24;
  ampm = "AM";
}
else if (hour24 > 12) { // 13 to 24 Hrs
  hour12 = hour24 - 12;
  ampm = "PM";
}

// function HeadingComponent() {
//   return <h1 className="heading">Name : {myInfo.firstName} {myInfo.lastName}.</h1>;
// }

ReactDOM.render(
  <div>
    <HeadingImport />
    <h2>Time - {hour12} : {currentMinutes} : {currentSecs} {ampm}</h2>
    <h2>Date - {currentDay} {monthName}, {currentYear} OR {currentDay} / {monthNumber} / {currentYear}</h2>
    <ul>
      <li>C# Programming Language</li>
      <li>JavaScript ES6</li>
      <li>HTML</li>
    </ul>
  </div>,
  document.getElementById("root"));
// Above line is not JavaScript, but JavaScript Syntax Extensions. Inside the "react" module, there is a JavaScript compiler called Babel.
// Babel is able to take Next Generation JS like ES6, 7, 8 and transpile it down to a version of JS that every browser can understand.

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals