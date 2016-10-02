import Vue from 'vue';
import Counter from './components/Counter';
import store from './store';

// 样式
var styles = {
  fontSize: '16px',
  color: 'red',
  backgroundColor: '#93d8f4'
};

var vm = new Vue({
  store,
  // el: '#app', // 使用 $mount 代替
  data: {
    msg: 'Hello JSX'
  },
  methods: {
    hello () {
      alert('Hello Vue 2.0')
    }
  },
  render (h) {
    const data = {
      attrs: {
        id: 'container' // 属性
      },
      on: { // DOM 事件 监听
        click: (e, data) => {
          console.log('click');
        },
        mouseup: () => {
          console.log('mouseup');
        },
        mousedown: () => {
          console.log('mousedown');
        },
        touchstart: () => {
          console.log('touchstart');
        }
      },
      hook: { // 钩子
        insert: () => {
          console.log('insert dom')
        }
      }
    }
    return (
      <div class="container" style={styles} href="#" {...data}>
        <Counter></Counter>
        {/* Hello Vue 2.0 jsx */}
      </div>
    )
  }
})

vm.$mount("#app")
