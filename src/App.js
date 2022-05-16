import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Header from "./Components/Header";
import CockTailHome from "./Pages/CockTailHome";
function App() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  // useEffect(() => {}, []);
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<CockTailHome />} />
      </Routes>
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
