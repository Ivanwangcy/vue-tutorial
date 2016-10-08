import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'count'
  ]),
  methods: mapActions([
    'increment'
  ]),
  render(h){
    return (
      <div>
        <p style={{fontSize: '35px', color: 'pink', margin: '0'}}>{ this.count }</p>
        <i class="fa fa-thumbs-o-up fa-5x" on-click={this.increment}></i>
      </div>
    )
  }
}
