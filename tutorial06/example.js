import Vue from 'vue';

var vm = new Vue({
  el: '#app',
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
        id: 'hehe'
      },
      on: {
        click: () => {
          console.log('click')
        }
      },
      props: {
        innerHTML: 'hihihi'
      },
      hook: {
        insert: () => {
          console.log('insert')
        }
      }
    }
    return <div class="container" style="font-size: 25px" href="hoho" {...data}>Hello Vue 2.0 jsx </div>
    // return (
    //   <div id="hi">
    //     <span
    //       class={{ a: true, b: true }}
    //       style={{fontSize: '15px'}}
    //       on-click={this.hello}
    //       {...data}>
    //       {this.msg}
    //     </span>
    //   </div>
    // )
  }
})
