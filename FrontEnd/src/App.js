import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from "./pages/Main";
import LatestSong from "./components/Main/LatestSong";
import ListSong from "./components/Main/ListSong";
import Home from './pages/Home';
import Login from './pages/Login';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<LatestSong/>}></Route>
          <Route index element={<ListSong/>}></Route>

        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
