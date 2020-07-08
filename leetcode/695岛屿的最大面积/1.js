var maxAreaOfIsland = function(grid) {
  var sum1 = 0, sum2 = 0;
  let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[0].length; j++){
      if (grid[i][j] === 0) continue
      else sum++
    }
  }
};