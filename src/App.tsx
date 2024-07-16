import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";

import ScrollToTop from "./utils/scrollTop";
import Header from "./components/header";
import Footer from "./components/footer";
import InfoDewi from "./components/info-dewi";
import Syarat_Ketentuan from "./pages/Syarat&Ketentuan";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/info-dewi" Component={InfoDewi} />
          <Route path="/syarat-&-ketentuan" Component={Syarat_Ketentuan} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
