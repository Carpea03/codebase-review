import { create } from 'zustand'

const useContentStore = create((set) => ({
  menuState: 0,
  setMenuState: (menuState) => set({ menuState: menuState }),
  menuState2: 0,
  setMenuState2: (menuState2) => set({ menuState2: menuState2 }),
}))

export default useContentStore
