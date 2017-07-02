import utils from '../utils'
import logic from '../logic'

export default {
  game: {
    init: () => ({cells: Array(50).fill(Array(50).fill(0))}),
    nextGen: ({ cells, started }, actions) => {
      if (started) {
        return {cells: logic.nextGen(cells)}
      } else return { cells }
    },
    start: ({ started, interval }, { game }) => {
      if (started) {
        window.clearInterval(interval)
        return {started: false, interval: null}
      } else {
        let interval = window.setInterval(game.nextGen, 120)
        return {started: true, interval}
      }
    }
  },
  cell: {
    toggle: (state , _, {row, col} ) => {
      let newState = utils.clone(state)
      newState.cells[row][col] = newState.cells[row][col] ? 0 : 1
      return newState
    },
    set: ({ cells }, _, { id, val }) => {
      cells[id] = val
      return { cells }
    },
  },
  debug: {
    logState: (state) => console.log('STATE:', state)
  }
};
