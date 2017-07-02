import { h } from 'hyperapp'
import Row from './row'

export default ({ cells, toggleCell }) => (
  <div>
    <div class="board">
      {cells.map((row, idx) => 
        <Row key={idx} row={idx} state={row} toggleCell={toggleCell} />
      )}
    </div>
  </div>
)
