import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';


export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  render(h) {
    return (
      <div class={{ a: true, b: true , c: false}}>
        Clicked: { this.$store.state.count } times, count is { this.evenOrOdd }.
        <button on-click={ this.increment }>+</button>
        <button on-click={ this.decrement }>-</button>
        <button on-click={ this.incrementIfOdd }>Increment if odd</button>
        <button on-click={ this.incrementAsync }>Increment Async</button>
      </div>
    )
  }
}
