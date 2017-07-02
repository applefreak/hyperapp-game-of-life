import { h } from 'hyperapp'
import Board from './board'
import Controls from './controls'

export default (state, { game, cell, debug}) => (
  <div>
    <h1>Game of Life</h1>
    <Controls actions={game} />
    <Board cells={state.cells} toggleCell={cell.toggle} />
    <button onclick={() => debug.logState()}>Debug</button>
  </div>
)
