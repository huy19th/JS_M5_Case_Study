import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Playlists from "./pages/Playlists";
import PlaylistMain from "./components/Content/PlaylistContent/PlaylistMain";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SeeAll from "./pages/SeeAll";
import Profile from "./pages/Profile"
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path='/search' >
            <Route index element={<Search />} />
          </Route>
          <Route path="/SeeAll/:title" element={<SeeAll />} />
          <Route path='/playlists'>
            <Route index element={<Playlists />} />
            <Route path=':playlistId' element={<PlaylistMain />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/profile" element={<Profile/>} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App
