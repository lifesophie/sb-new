import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Homepage";
import About from "./components/About";
import Contacts from "./components/Contacts";
import CourseList from "./components/CourseList";
import Services from './components/Services';
import Course from './components/Course';
import OneCourse from './components/OneCourse';

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router  basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/course" element={<Course />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/courselist" element={<CourseList />} />
                <Route path="/onecourse/:id" element={<OneCourse />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
