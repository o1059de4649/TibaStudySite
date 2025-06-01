import React, { use, useState } from 'react';
import './App.css';
import LessonJSFieldExplore from './Lesson/LessonJSFieldExplore';
import Lesson from './Common/Lesson';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LessonSelecter from './LessonSelecter';
import Header from './Common/Header';
import LessonJSFieldTest from './Lesson/LessonJSFieldTest';
import CodeSandBox from './Lesson/CodeSandBox';
import LessonJSFunctionExplore from './Lesson/LessonJSFunctionExplore';
import SideMenu from './Common/SideMenu';
import { Box } from '@mui/material';

function App() {
  const [codeSandBoxFlg, setCodeSandBoxFlg] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Header checked={codeSandBoxFlg} onToggle={(value) => {setCodeSandBoxFlg(value)}} />
        <Box sx={{ marginTop: "64px" }}></Box>
        <Routes>
          <Route path="/" element={<Lesson codeSandboxFlg={false} title='📚 目次 📚'content={<LessonSelecter />}/>} />
          <Route path="/CodeSandBox" element={<Lesson codeSandboxFlg={codeSandBoxFlg} title='CodeSandBox'content={<CodeSandBox />}/>} />
          <Route path="/LessonJSFieldExplore" element={<Lesson codeSandboxFlg={codeSandBoxFlg} title='📖 JavaScript の変数入門'content={<LessonJSFieldExplore />}/>} />
          <Route path="/LessonJSFieldTest" element={<Lesson codeSandboxFlg={codeSandBoxFlg} title='【実演】JavaScriptの変数'content={<LessonJSFieldTest />}/>} />
          <Route path="/LessonJSFunctionExplore" element={<Lesson codeSandboxFlg={codeSandBoxFlg} title='📖 JavaScriptの関数入門'content={<LessonJSFunctionExplore />}/>} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
