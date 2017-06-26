import { h } from 'hyperapp'
import Cell from './cell'

export default ({ cells, toggleCell }) => (
  <div>
    <div class="board">
      {cells.map((cellState, idx) => 
        <Cell key={idx} state={cellState} toggleCell={toggleCell} />
      )}
    </div>
  </div>
)
