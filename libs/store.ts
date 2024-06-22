import create from "zustand";

interface CounterState {
  utilities: UtilitiesType;
  setUtilities: (value: any) => void;
}

const useStore = create<CounterState>((set) => ({
  // @ts-ignore
  utilities: "",
  setUtilities: (value) => set({ utilities: value }),
}));

export default useStore;
