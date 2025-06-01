import React from 'react';
import './App.css';
import LessonJSFieldExplore from './Lesson/LessonJSFieldExplore';
import Lesson from './Common/Lesson';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LessonSelecter from './LessonSelecter';
import Header from './Common/Header';
import LessonJSFieldTest from './Lesson/LessonJSFieldTest';
import CodeSandBox from './Lesson/CodeSandBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Lesson title='📚 目次 📚'content={<LessonSelecter />}/>} />
          <Route path="/CodeSandBox" element={<Lesson title='CodeSandBox（砂場）'content={<CodeSandBox />}/>} />
          <Route path="/LessonJSFieldExplore" element={<Lesson title='📖 JavaScript の変数入門'content={<LessonJSFieldExplore />}/>} />
          <Route path="/LessonJSFieldTest" element={<Lesson title='【実演】JavaScriptの変数'content={<LessonJSFieldTest />}/>} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
