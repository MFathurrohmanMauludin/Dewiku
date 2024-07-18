import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";

import ScrollToTop from "./utils/scrollTop";
import Header from "./components/header";
import Footer from "./components/footer";
import Syarat_Ketentuan from "./pages/Syarat&Ketentuan";
import DetailDewi from "./pages/DetailDewi";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/info-dewi" Component={DetailDewi} />
          <Route path="/syarat-&-ketentuan" Component={Syarat_Ketentuan} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
