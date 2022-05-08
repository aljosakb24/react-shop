import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Single from "./pages/Single";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/single" element={<Single />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
