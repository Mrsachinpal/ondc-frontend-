import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAppStore = create(persist((set) => ({
  dopen: true,
  updateOpen: (dopen) => set({ dopen }),
}), { name: "my_app_store" }));

export default useAppStore;


// import create from 'zustand';
// import { persist } from 'zustand/middleware';

// Define your store configuration
// import {persist} from 'zustand/middleware'
//  import create from 'zustand'

// let appStore = (set) => ({
//     dopen: true,
//     updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
// });

// // Apply the persist middleware to your store configuration
// appStore = persist(appStore, { name: "my_app_store" });

// // Create the store instance using create
// export const useAppStore = create (appStore);


