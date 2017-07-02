import { h } from 'hyperapp'

export default ({ actions, started }) => (
  <div class="controls">
    <div class="btn" onclick={actions.start}>{(started ? 'Pause' : 'Start')}</div>
    <div class="btn" onclick={actions.init}>Reset</div>
  </div>
)