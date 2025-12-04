import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./display/style/style.scss";

import Header from "./components/layout/Header";

import Work from "./components/routes/public/Work";
import Events from "./components/routes/public/Events";
import Blog from "./components/routes/public/Blog";
import Contact from "./components/routes/public/Contact";

import WorkItem from "./components/routes/public/WorkItem";
import BlogItem from "./components/routes/public/BlogItem";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className="app">
      <Header darkmode={darkmode} />
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkItem />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogItem />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
