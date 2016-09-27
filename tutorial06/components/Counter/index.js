import Vue from 'vue';

export default {
  data: function(){
    return {counter: 5}
  },
  methods: {
    handleClick() {
      console.log(this.counter, this.props);
      this.counter++;
    }
  },
  render(h) {
    return (
      <div on-click={this.handleClick}>{this.counter}</div>
    )
  }
}
