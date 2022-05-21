import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CockTailHome from "./Pages/CockTailHome";
import Footer from "./Components/Footer";
import Cocktail from "./Pages/Cocktail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CockTailHome />} />
        <Route path="cocktail" element={<Cocktail />}></Route>
        <Route path="*" element={<div>Error Page</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
// // "homepage": "https://alexchika.github.io/kodecamptaskfive",
// React_Router tutorial
// import { Outlet, Link } from "react-router-dom";
// export default function App() {
//   return (
//     <div>
//       <h1>Bookkeeper</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem",
//         }}
//       >
//         <Link to="/invoices">Invoices</Link> |{" "}
//         <Link to="/expenses">Expenses</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }
