export const increment = (state) => {
  state.count++;
}

let titles = [
  "Welcome to your Vue.js app!",
  "Hello Vue 2.0! ",
  "Hello World! ",
  "Hi JavaScript! ",
  "Hi HTML5! "
]
export const randomTitle = (state) => {
  let index = ~~(Math.random() * titles.length)
  state.msg = titles[index]
}
