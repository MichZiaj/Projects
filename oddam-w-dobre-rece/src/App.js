import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router";
import "./scss/main.scss";
import Home from "./components/pages/Home_components/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Menu from "./components/common/Menu";

function App() {
  return (
      <BrowserRouter>
          <div className="content-container">
          <Menu />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/oddaj-rzeczy" element={<Home />} />
              <Route exact path="/logowanie" element={<Login />} />
              <Route exact path="/rejestracja" element={<Register />} />
              <Route exact path="/wylogowano" element={<Logout />} />
          </Routes>
          </div>
      </BrowserRouter>


  );
}

export default App;
