
const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : end - limit

  return state.history
    .slice(begin, end)
    .toString()
    .replace(/,/g , ', ')
}

export const evenOrOdd = state => state.count % 2 === 0 ? 'even' : 'odd'

export const isOdd = state => state.count % 2 === 0 ? false : true

export const counter = state => {
  return state.count
}
