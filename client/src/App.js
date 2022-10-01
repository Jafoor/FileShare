import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, NewPost } from './pages';
import PostDetails from './pages/PostDetails';
class App extends Component {
  render() {
    return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/newpost" element={<NewPost/>}/>
         <Route path="posts/:id" exact element={<PostDetails/>}/>
      </Routes>
    );
  }
}

export default App;
