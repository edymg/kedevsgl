import { create } from "zustand";

interface MessageState {
  message: {};
  changeField: (message: {}) => void;
  resetMessage: () => void;
}
const initialValue = {
  fullname: "",
  country: "Peru",
  phoneNumber: "",
  email: "",
  location: "",
  message: "Hola equipo de Kedevs, quiero ...",
};

export const useDefaultMessage = create<MessageState>()((set) => ({
  message: initialValue,
  changeField: (message) => set((state) => ({ message: message })),
  resetMessage: () => set((state) => ({ message: initialValue })),
}));
