import { useState } from "react";

import Header from "./components/layout/Header";

import "./display/style/style.scss";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className="app">
      <Header darkmode={darkmode} />
    </div>
  );
};

export default App;
