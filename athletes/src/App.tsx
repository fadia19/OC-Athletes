import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
