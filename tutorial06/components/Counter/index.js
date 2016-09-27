import Vue from 'vue';

export default {
  data: function(){ // 数据
    return {
      counter: 5,
      todos: [
        'Learn javascript',
        'Learn ES6',
        'Learn VUE'
      ]
    }
  },
  computed: {
    evenOrOdd (){
      return this.counter % 2 == 0 ? 'Even' : 'Odd';
    }
  },
  methods: {
    handleClick() {
      console.log(this.counter, this.props);
      this.counter++;
    }
  },
  // h = this.$createElement h 参数是必需的
  render(h) {

    // 渲染列表
    var todolist = this.todos.map((value) => {
      return <li>{value}</li>;
    });
    return (
      // 单向绑定
      <div on-click={this.handleClick}>
        {this.counter}, count is { this.evenOrOdd }
        <ul>
          {todolist}
        </ul>
      </div>

    )
  }
}
