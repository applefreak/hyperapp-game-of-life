import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './views';
import events from './events'

app({ state, actions, view, events });
