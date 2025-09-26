import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Intake from "./pages/Intake";
import Client from "./pages/Client";
import ClientDetails from "./pages/ClientDetails";
import Team from "./pages/Team";
import Agenda from "./pages/Agenda";
import Report from "./pages/Report";
import About from "./pages/About";
// import Route from "./pages/Route";
import NoPage from "./pages/NoPage";
import { createContext } from "react";
import ReactSwitch from "react-switch";

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/intake" element={<Intake />} />
            <Route path="/client" element={<Client />} />
            <Route path="/client/:id" element={<ClientDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/report" element={<Report />} />
            <Route
              path="/about"
              element={<About heroImage={"../public/img/hero.jpg"} />}
            />
            {/* <Route path="/routes" element={<Routes />} /> */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
        {/* <div className="toggle">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
