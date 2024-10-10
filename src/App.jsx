import { HashRouter, Route, Routes } from "react-router-dom";
import CountryPage from "./ui/Country Page/CountryPage";
import Home from "./ui/Home/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
