import { create } from 'zustand'

const useContentStore = create((set) => ({
  menuState: 0,
  setMenuState: (menuState) => set({ menuState: menuState }),
  menuState2: 0,
  setMenuState2: (menuState2) => set({ menuState2: menuState2 }),
  menuState3: 0,
  setMenuState3: (menuState3) => set({ menuState3: menuState3 }),
  menuState4: 0,
  setMenuState4: (menuState4) => set({ menuState4: menuState4 }),
  menuState5: 0,
  setMenuState5: (menuState5) => set({ menuState5: menuState5 }),
}))

export default useContentStore
