export const increment = ({ commit }) => commit('increment')

// 状态事件传参数
export const randomTitle = ({ commit }, params) => commit('randomTitle', params)

export const loading = ({ commit }, payload) => commit('loading', payload)
