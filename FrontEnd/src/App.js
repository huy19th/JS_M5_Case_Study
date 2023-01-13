import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
          
        </Route>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
