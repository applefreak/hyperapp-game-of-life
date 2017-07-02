import utils from '../utils'
import logic from '../logic'

export default {
  game: {
    init: () => ({cells: Array(50).fill(Array(50).fill(0))}),
    nextGen: ({ cells }) => ({cells: logic.nextGen(cells)})
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
