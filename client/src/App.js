import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, NewPost } from './pages';
class App extends Component {
  render() {
    return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/newpost" element={<NewPost/>}/>
      </Routes>
    );
  }
}

export default App;
