export default {
  game: {
    init: ({cells}) => ({cells: Array(50).fill(Array(50).fill(0))})
  },
  cell: {
    toggle: ({cells} , _, { id: {row, col} } ) => {
      cells[row][col] = cells[row][col] === 1 ? 0 : 1
      return { cells }
    },
    set: ({ cells }, _, { id, val }) => {
      cells[id] = val
      return { cells }
    },
  }
};
