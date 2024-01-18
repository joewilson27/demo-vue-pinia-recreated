import { defineStore } from 'pinia'

export const useOtherStore = defineStore({
  id: "other",
  state: () => ({
    datas: []
  }),
  actions: {
    fetchOthers() {

      let newData = []

      const data1 = {
        id: 1,
        name: "Joe",
        gender: "Male",
        origin: "USA"
      }

      const data2 = {
        id: 2,
        name: "Alexandra",
        gender: "Female",
        origin: "England"
      }

      const data3 = {
        id: 3,
        name: "Wilson",
        gender: "Male",
        origin: "Canada"
      }

      const data4 = {
        id: 4,
        name: "Elizabeth",
        gender: "Female",
        origin: "Brazil"
      }

      newData.push(data1)
      newData.push(data2)
      newData.push(data3)
      newData.push(data4)

      this.datas = newData

    }
  },
  getters: {
    isCitizen: (state) => {
      /**
       * Getters are just computed properties behind the scenes, so it's not possible to pass any 
       * parameters to them. However, you can return a function from the getter to accept any arguments
      */
      return (origin) => "USA" === origin ? "Yes" : "No"
    }
  }
})