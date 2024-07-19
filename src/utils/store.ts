import {create} from 'zustand'

interface LanguageState {
  isLanguage: string;
  setLanguage: (language: string) => void;
}

const useStore = create<LanguageState>((set) => ({
  isLanguage: 'id',
  setLanguage: (language) => set({ isLanguage: language }),
}));

export default useStore;
