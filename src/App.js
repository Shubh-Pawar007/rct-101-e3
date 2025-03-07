import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
