import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, NewPost } from './pages';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import Register from './pages/Register';
import UpdatePost from './pages/UpdatePost';
class App extends Component {
  render() {
    return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/signin" element={<Login />} />
         <Route path="/signup" element={<Register />} />
         <Route path="/newpost" element={<NewPost/>}/>
         <Route path="posts/:id" exact element={<PostDetails/>}/>
         <Route path="update/:id" exact element={<UpdatePost/>}/>
      </Routes>
    );
  }
}

export default App;
