import Vue from 'vue';

export default {
  methods: {
    handleClick() {
      console.log(this.data);
      // this.
    }
  },
  render(h) {
    return (
      <div on-click={this.handleClick}>sdfafas</div>
    )
  }
}
