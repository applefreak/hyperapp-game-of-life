import { h } from 'hyperapp'
import Board from './board'
import Controls from './controls'

export default (state, { game, cell, debug}) => (
  <div>
    <h1>Game of Life</h1>
    <Controls actions={game} started={state.started}/>
    <Board cells={state.cells} toggleCell={cell.toggle} />
  </div>
)
