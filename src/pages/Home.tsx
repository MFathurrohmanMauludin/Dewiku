// index.tsx
import DewiPopularSection from "../components/dewi-popular";
import DewiLainnya from "../components/dewi-lainnya";
import Hero from "../components/hero";
import Brands from "../components/brands";
import { useFavoriteStore } from "../utils/saveDewi";

const Home = () => {
  const { addFavorite, removeFavorite } = useFavoriteStore();

  return (
    <>
      <div id="main-content" />
      <Hero />
      <Brands />
      <DewiPopularSection control={{
        saveFavorite: addFavorite,
        deleteFavorite: removeFavorite,
      }} />
      <DewiLainnya control={{
        saveFavorite: addFavorite,
        deleteFavorite: removeFavorite,
      }} />
    </>
  );
};

export default Home;