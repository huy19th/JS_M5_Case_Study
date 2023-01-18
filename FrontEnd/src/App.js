import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Collection from "./pages/Collection";
import SubSection from './components/Content/CollectionContent/SubSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path='/search' element={<Search />} />
          <Route path='/collection' element={<Collection />}>
            <Route path='podcast' element={<SubSection title={"Podcast"} />} />
            <Route path='artist' element={<SubSection title={"Artist"} />} />
            <Route path='albums' element={<SubSection title={"Album"} />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
