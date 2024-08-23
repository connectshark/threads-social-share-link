import { defineStore, acceptHMRUpdate } from 'pinia'

export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
  }),
  getters: {
  },
  actions: {
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDefaultStore, import.meta.hot))
}