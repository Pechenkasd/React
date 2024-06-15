import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage'
import AboutPage from './pages/aboutPage/AboutPage';
import TodosPage from './pages/todoPage/TodoPage';
import styles from './App.module.css'


const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <nav>
          <ul>
            <li>
              <Link to="/">Main Page</Link>
            </li>
            <li>
              <Link to="/about">About Page</Link>
            </li>
            <li>
              <Link to="/todos">Todos Page</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
