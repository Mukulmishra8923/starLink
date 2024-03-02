import { BrowserRouter,Route,Routes } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import './App.css';

import RocketPage from "./Pages/RocketsPage/RocketPage";
import PopUp from "./components/popUp/PopUp";
import Slider from "./components/slider/Slider";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
           <Route path="/"  element={<Dashboard/>}/>
           <Route path="/rockets"  element={<RocketPage/>}/>
           <Route path="/slider"  element={<Slider/>}/>
           <Route path="*"  element={<h1>Page not found</h1>}/>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
