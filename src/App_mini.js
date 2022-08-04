import React, {useState, useEffect} from 'react'
// npm i react-router-dom
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Layout from './Layout'

const App = () => {
 const [search, setSearch] = useState();
  return (
    <Router >
        <Header title="React myBlog" />
        <Nav />
        <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="post" element={<NewPost />} />
            <Route path="/post/:id" element={<PostPage />} /> 
            <Route path="about" element={<About />} /> 
            <Route path="*" element={<Missing />} /> 
        </Routes>
        <Footer />
    </Router >
  )
}

export default App