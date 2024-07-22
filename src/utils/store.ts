import {create} from 'zustand'

interface ScrollState {
  isScroll: boolean;
  setScroll: (Scroll: boolean) => void;
}

const useStore = create<ScrollState>((set) => ({
  isScroll: false,
  setScroll: (scroll) => set({ isScroll: scroll }),
}));

export default useStore;
