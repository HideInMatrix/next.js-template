import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AccessesState = {
  token: string;
  setToken: (newVal: string) => void;
};

const useAccessStore = create<AccessesState>()(
  persist(
    (set, get) => ({
      token: get()?.token || "",
      setToken: (newVal: any) => set((state: any) => ({ token: newVal })),
    }),
    {
      name: "token",
      storage: createJSONStorage(() => sessionStorage), // default localstorage
    }
  )
);

export default useAccessStore;
