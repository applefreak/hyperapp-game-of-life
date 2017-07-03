import { h } from 'hyperapp'

export default ({ actions, started }) => (
  <div class="controls">
    <div class="btn" onclick={actions.start}
    style={{'background-color': (started) ? '#fc993c' : '#00D96F'}}
    >{(started ? 'Pause' : 'Start')}</div>
    <div class="btn" onclick={actions.init}
    style={{'background-color': '#ff006c'}}
    >Reset</div>
  </div>
)