const calculateNeighbours = (cells, y, x) => {
  const width = cells[0].length
  const height = cells.length
  let total = (cells[y][x] !== 0) ? -1 : 0;
  for (let h = -1; h <= 1; h++) {
    for (let w = -1; w <= 1; w++) {
      if (cells
        [(height + (y + h)) % height]
        [(width + (x + w)) % width] !== 0) {
          total++;
      }
    }
  }
  return total;
}

export default {
  nextGen: (cells) => {
    const res = []
    const height = cells.length
    const width = cells[0].length
    for (let h = 0; h < height; h++) {
      const inner = []
      for (let w = 0; w < width; w++) {
        let neighbors = calculateNeighbours(cells, h, w)
        if (cells[h][w] === 1) {
          if (neighbors < 2 || neighbors > 3) inner.push(0)
          else if (neighbors === 2 || neighbors === 3) inner.push(1)
        } else {
          if (neighbors === 3) inner.push(1)
          else inner.push(0)
        }
      }
      res.push(inner)
    }
    return res
  }
}
