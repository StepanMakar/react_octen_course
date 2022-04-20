
import './App.css';
import {CarForm} from "./components/CarForm/CarForm";
import Cars from "./components/Cars/Cars";
import {useState} from "react";

function App() {
    const[newCar, setNewCar] = useState(null)
  return (
    <div>
 <CarForm setNewCar={setNewCar}/>
        <hr/>
        <Cars newCar={newCar}/>
    </div>

  );
}

export default App;
