import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import DinosPage from "./Pages/Dinos/Dinos";
import DinoDetailsPage from "./Pages/Dinos/DinoDetails";
import FamliesPage from "./Pages/Families/Families";
import DigSitesPage from "./Pages/DigSites/DigSites";
import DietsPage from "./Pages/Diets/Diets";
import HabitatsPage from "./Pages/Habitats/Habitats";
import DietDetailsPage from "./Pages/Diets/DietDetails";
import HabitatDetailsPage from "./Pages/Habitats/HabitatDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/dinosaurs" exact element={<DinosPage />} />
          <Route path="/dinosaurs/:slug" exact element={<DinoDetailsPage />} />
          <Route path="/families" exact element={<FamliesPage />} />
          <Route path="/dig-sites" exact element={<DigSitesPage />} />
          <Route path="/diets" exact element={<DietsPage />} />
          <Route path="/diets/:dietName" exact element={<DietDetailsPage />} />
          <Route path="/habitats" exact element={<HabitatsPage />} />
          <Route path="/habitats/:habitatName" exact element={<HabitatDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
