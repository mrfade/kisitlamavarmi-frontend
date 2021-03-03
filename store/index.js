export const state = {
  statuses: [],
  cities: [],
  currentCity: {},
}

export const getters = {
  getStatusById: (state) => (id) => {
    return state.statuses.find((status) => status.id === id)
  },
  getCityById: (state) => (id) => {
    return state.cities.find((city) => city.code === id)
  },
}

export const mutations = {
  setStatuses(state, val) {
    state.statuses = val
  },

  setCities(state, val) {
    state.cities = val
  },

  setCurrentCity(state, val) {
    state.currentCity = val
  },
}

export const actions = {
  async clientInit({ dispatch, commit, state }) {
    // eslint-disable-next-line no-console
    console.log('client init end')

    const homeData = await this.$api.$get('/')

    commit('setStatuses', homeData.statuses)
    commit('setCities', homeData.cities)
  },
}
