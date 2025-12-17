// store.ts
import { create } from "zustand";

type VrDebugState = {
  lastPress?: {
    hand: string;
    buttons: number[];
  };
  setLastPress: (data: VrDebugState["lastPress"]) => void;
};

export const useVrDebugStore = create<VrDebugState>((set) => ({
  lastPress: undefined,
  setLastPress: (data) => set({ lastPress: data }),
}));
