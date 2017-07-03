import { h } from 'hyperapp';

export default (props) => (
  <div class="cell" 
    onclick={() => props.toggleCell({row: props.row, col: props.key})}
    style={{'background-color': (props.state) ? '#01D0F8' : ''}}
  ></div>
);
