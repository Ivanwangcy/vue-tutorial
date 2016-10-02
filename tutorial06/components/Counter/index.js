import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import './style.css';

export default {
  computed: mapGetters([
    'evenOrOdd',
    'isOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  render(h) {
    return (
      <div class={{ odd: this.isOdd }} style={{ padding: '20px' }}>
        Clicked: { this.$store.state.count } times, count is { this.evenOrOdd }.
        <button on-click={ this.increment }>+</button>
        <button on-click={ this.decrement }>-</button>
        <button on-click={ this.incrementIfOdd }>Increment if odd</button>
        <button on-click={ this.incrementAsync }>Increment Async</button>
      </div>
    )
  }
}
