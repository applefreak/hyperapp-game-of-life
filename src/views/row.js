import { h } from 'hyperapp'
import Cell from './cell'

export default (props) => (
  <div class="row" data-row={props.row}>
    {props.state.map((cell, idx) => 
      <Cell key={idx} row={props.row} state={cell} toggleCell={props.toggleCell} />
    )}
  </div>
);
