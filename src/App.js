import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import CockTailHome from "./Pages/CockTailHome";
import Footer from "./Components/Footer";
import Cocktail from "./Pages/Cocktail";
import SearchResult from "./Pages/searchResult";
import SingleCocktail from "./Pages/singleCocktail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CockTailHome />} />
        <Route path="cocktail" element={<Cocktail />}>
          <Route index element={<SearchResult />} />
          <Route path=":id" element={<SingleCocktail />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
