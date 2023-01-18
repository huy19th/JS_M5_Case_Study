import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import BottomBar from "./components/BottomBar";
import Home2 from "./pages/Home";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Collection from "./pages/Collection";


function App() {
  return (
    <Router>
      <div className="main-container">
        <SideBar />
        <Content />
      </div>
      <BottomBar />

    </Router>
  );
}

function App2() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home2 />}>
          <Route index element={<Main />} />
          <Route path='/search' element={<Search />} />
          <Route path='/collection' element={<Collection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App2;
