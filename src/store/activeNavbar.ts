import { create } from "zustand";

interface ActiveNavbarState {
  isActiveGallery: boolean;
  setIsActiveGallery: (isActive: boolean) => void;
}

export const useActiveNavbarStore = create<ActiveNavbarState>()((set) => ({
  isActiveGallery: false,
  setIsActiveGallery: (isActive) => set(() => ({ isActiveGallery: isActive })),
}));
