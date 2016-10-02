import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import './style.css';

export default {
  computed: mapGetters([
    'evenOrOdd',
    'isOdd',
    'counter',
    'recentHistory'
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
        Clicked: { this.counter } times, count is { this.evenOrOdd }.
        <button on-click={ this.increment }>+</button>
        <button on-click={ this.decrement }>-</button>
        <button on-click={ this.incrementIfOdd }>Increment if odd</button>
        <button on-click={ this.incrementAsync }>Increment Async</button>
        <div>
          <div>Recent History (last 5 entries): { this.recentHistory }</div>
        </div>
      </div>
    )
  }
}
