import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import DinosPage from "./Pages/Dinos/Dinos";
import DinoDetailsPage from "./Pages/Dinos/DinoDetails";
import FamliesPage from "./Pages/Families/Families";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/dinosaurs" exact element={<DinosPage />} />
          <Route path="/dinosaurs/:slug" exact element={<DinoDetailsPage />} />
          <Route path="/families" exact element={<FamliesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
