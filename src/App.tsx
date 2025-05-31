import React from 'react';
import './App.css';
import FieldLessonJS from './Lesson/FieldLessonJS';
import Lesson from './Common/Lesson';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LessonSelecter from './LessonSelecter';
import Header from './Common/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Lesson title='📚 目次 📚'content={<LessonSelecter />}/>} />
          <Route path="/FieldLessonJS" element={<Lesson title='📖 JavaScript の変数入門'content={<FieldLessonJS />}/>} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
