import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';

const header = () => {
  return (
    <header className="header">
      <h1> Othman Abdolhalim </h1>
    </header>
  )
}
const footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/othman-abdolhalim-36b2731ba/" target="_blank" rel='noreferrer'>Linkedin</a>
      <a href="https://github.com/Othmaann" target="_blank" rel='noreferrer'>Github</a>
    </footer>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {header()}
    <App />
    {footer()}
  </React.StrictMode>
);