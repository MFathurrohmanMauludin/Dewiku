// store.ts
import create from 'zustand';

interface FavoriteState {
  favorite: string[];
  addFavorite: (name: string) => void;
  removeFavorite: (name: string) => void;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorite: JSON.parse(localStorage.getItem("favorites") || "[]"),

  addFavorite: (name: string) => {
    const { favorite } = get();
    if (!favorite.includes(name)) {
      const updatedFavorites = [...favorite, name];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      set({ favorite: updatedFavorites });
    }
  },

  removeFavorite: (name: string) => {
    const { favorite } = get();
    const updatedFavorites = favorite.filter(fav => fav !== name);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    set({ favorite: updatedFavorites });
  },
}));
