import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './views';
import events from './events'

import devtools from 'hyperapp-redux-devtools';

app({ state, actions, view, events,
  mixins: [devtools()]
 });
