import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { Home, NewPost } from './pages';
import { getPosts } from './state/Post/action';
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
