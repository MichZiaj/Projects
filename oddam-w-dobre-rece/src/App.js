import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router";
import "./scss/main.scss";
import Home from "./components/pages/Home";
import PriceList from "./components/pages/Price-List";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/cennik" element={<PriceList />}/>
            <Route exact path="/kontakt" element={<Contact />}/>
            <Route exact path="/omnie" element={<About />}/>
            <Route exact path="/galeria" element={<Gallery />}/>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
