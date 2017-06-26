import { h } from 'hyperapp'

export default ({ actions }) => (
  <div class="controls">
    <div class="btn">Start</div>
    <div class="btn" onclick={actions.init}>Reset</div>
  </div>
)