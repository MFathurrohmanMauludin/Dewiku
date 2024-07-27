import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";

import ScrollToTop from "./utils/scrollTop";
import Header from "./components/header";
import Footer from "./components/footer";
import Syarat_Ketentuan from "./pages/Syarat&Ketentuan";
import DetailDewi from "./pages/DetailDewi";
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "./utils/i18n";
import DewiPopularAll from "./pages/DewiPopularAll";
import DewiAnotherAll from "./pages/DewiAnotherAll";
import DewiSearch from "./pages/DewiSearch";
import SaveFavorite from "./pages/SaveFavorite";

const App = () => {
  const { t } = useTranslation(['language']);
  
  useEffect(() => {
    document.title = t('title'); // Set your desired title here
    return () => {
      // Optionally, you can reset the title when the component unmounts
      document.title = "Welcome 🤝 - Let's create technology that changes life in the world";
    };
  }, [t]); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/info-dewi" Component={DetailDewi} />
          <Route path="/favorit" Component={SaveFavorite} />
          <Route path="/syarat-&-ketentuan" Component={Syarat_Ketentuan} />
          <Route path="/desa-wisata-populer" Component={DewiPopularAll}/>
          <Route path="/desa-wisata-lainnya" Component={DewiAnotherAll}/>
          <Route path="/cari-desa-wisata" Component={DewiSearch}/>
        </Routes>
        <Footer />
        </I18nextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
