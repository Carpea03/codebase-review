import { create } from 'zustand'

const useContentStore = create((set) => ({
  menuState: 0,
  setMenuState: (menuState) => set({ menuState: menuState }),
}))

export default useContentStore
