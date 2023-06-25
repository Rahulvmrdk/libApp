import logo from './logo.svg';
import './App.css';
import { AppBar } from '@mui/material';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewBooks from './components/ViewBooks';
import AddBooks from './components/AddBooks';

function App() {
  return (
    <div className="App">
      {/* <AppBar/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewBooks/>}/>
        <Route path='/add' element={<AddBooks data={{BookName:'',author:'',language:'',genre:'',bookNum:'' }}method='post'/>}/>
      </Routes>
    </div>
  );
}

export default App;
