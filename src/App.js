import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/base/header/Header";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/base/footer/Footer";
import Submit from "./components/pages/submit/Submit";
import Admin from "./components/pages/admin/Admin";
import Sender from "./components/pages/admin/Sender"; // Sender 컴포넌트를 import

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Banner />
                <Skills />
                <Projects />
                <Contact />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route path="/submit" element={<Submit />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/send" element={<Sender />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
