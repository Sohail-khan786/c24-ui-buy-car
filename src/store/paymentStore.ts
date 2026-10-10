// src/store/useCounterStore.js
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
interface paymentStoreState {
  paymentLinkId: string;
  setPaymentLinkId: (id: string) => void;
}

const usePaymentStore = create<paymentStoreState>()(
  persist(
    (set) => ({
      // Initial state
      paymentLinkId: "",

      // Actions to update state
      setPaymentLinkId: (id) => set({ paymentLinkId: id }),
    }),
    {
      //       // Unique name for the key in storage (must be unique)
      name: "paymentLinkId-storage",

      // Optional: defaults to localStorage if not specified
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default usePaymentStore;
