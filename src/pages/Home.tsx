import React from "react";
import DewiPopularSection from "../components/dewi-popular";
import DewiLainnya from "../components/dewi-lainnya";
import Hero from "../components/hero";
import Brands from "../components/brands";

interface Props {}

interface State {
  favorite: string[];
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      favorite: this.loadFavorites(),
    };
  }

  // Load favorites from local storage
  loadFavorites = (): string[] => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  };

  // Save favorites to local storage
  saveFavorites = (favorites: string[]) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  handleFavorite = (name: string) => {
    // Check if the name is valid and not already in the favorites list
    if (name && !this.state.favorite.includes(name)) {
      this.setState(
        (prevState) => {
          const updatedFavorites = [...prevState.favorite, name];
          return { favorite: updatedFavorites };
        },
        () => {
          this.saveFavorites(this.state.favorite);
        }
      );
    }
  };

  removeFavorite = (name: string) => {
    this.setState(
      (prevState) => {
        const updatedFavorites = prevState.favorite.filter(fav => fav !== name);
        return { favorite: updatedFavorites };
      },
      () => {
        this.saveFavorites(this.state.favorite);
      }
    );
  };

  render() {

    return (
      <>
        <div id="main-content" />
        <Hero />
        <Brands />
        <DewiPopularSection control={{
          saveFavorite: this.handleFavorite,
          deleteFavorite: this.removeFavorite
        }}  />
        <DewiLainnya control={{
          saveFavorite: this.handleFavorite,
          deleteFavorite: this.removeFavorite
        }}  />
      </>
    );
  }
}

export default Home;
