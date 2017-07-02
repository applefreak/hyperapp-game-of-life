import { h } from 'hyperapp';

export default (props) => (
  <div class="cell" 
    onclick={() => props.toggleCell({id: {row: props.row, col: props.key}})}
    style={{'background-color': (props.state) ? '#f1684e' : ''}}
  ></div>
);
