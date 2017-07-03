import { h } from 'hyperapp'
import Board from './board'
import Controls from './controls'

export default (state, { game, cell, debug}) => (
  <div>
    <h1>Game of Life</h1>
    <Controls actions={game} started={state.started}/>
    <Board cells={state.cells} toggleCell={cell.toggle} />
    <div class="footer">
      <span>Powered by <a href="https://github.com/hyperapp/hyperapp">HyperApp</a></span>
      <a href="https://github.com/applefreak/hyperapp-game-of-life">SOURCE</a>
    </div>
  </div>
)
