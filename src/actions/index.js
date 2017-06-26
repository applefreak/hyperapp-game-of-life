export default {
  game: {
    init: ({cells}) => ({cells: Array(2500).fill(0)})
  },
  cell: {
    toggle: ({ cells }, _, { id } ) => {
      cells[id] = cells[id] ? 0 : 1
      return { cells }
    },
    set: ({ cells }, _, { id, val }) => {
      cells[id] = val
      return { cells }
    },
  }
};
