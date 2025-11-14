import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import DinosPage from "./Pages/Dinos/Dinos";
import DinoDetailsPage from "./Pages/Dinos/DinoDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/dinosaurs" exact element={<DinosPage />} />
          <Route path="/dinosaurs/:slug" exact element={<DinoDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
