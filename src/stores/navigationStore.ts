import { create } from 'zustand';

interface NavigationState {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentSection: 'home',
  setCurrentSection: (section) => set({ currentSection: section }),
}));
