import "./App.css";
import { useContext } from "react";
import { DataContext } from "./contexts/DataContext";
import RecipieCard from "./components/RecipieCard";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipie from "./pages/Recipie";

function App() {
  const { recipiesData } = useContext(DataContext);

  console.log("recipiesData");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipie/:key" element={<Recipie />} />
      </Routes>
    </div>
  );
}

export default App;
