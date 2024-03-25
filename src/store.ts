import axios from "axios";
import { create } from "zustand";
import { DataType } from "./types";

type CountType = {
  count: number;
  data: DataType[] | null;
  setData: () => Promise<void>;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  double: (num: number) => void;
};

export const useCounter = create<CountType>((set) => ({
  count: 0,
  data: null,
  setData: async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=5");
      set({ data: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
    }
  },
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(() => ({ count: 0 })),
  double: (num) => set((state) => ({ count: state.count + num })),
}));
