if (cell.dataset.index >= 0 && cell.dataset.index <= 24){
  addWall(cell)
}
if (cell.dataset.index % width === 0){
  addWall(cell)
}
if (cell.dataset.index >= 600 && cell.dataset.index <= 624){
  addWall(cell)
}
if (cell.dataset.index % width === width - 1){
  addWall(cell)
} 
if (cell.dataset.index >= 52 && cell.dataset.index <= 55){
  addWall(cell)
}
if (cell.dataset.index >= 57 && cell.dataset.index <=60){
  addWall(cell)
}
if (cell.dataset.index == 62){
  addWall(cell)
}
if (cell.dataset.index >= 64 && cell.dataset.index <=67){
  addWall(cell)
}
if  (cell.dataset.index >= 69 && cell.dataset.index <=72){
  addWall(cell)
}
if (cell.dataset.index >= 77 && cell.dataset.index <= 80){
  addWall(cell)
}
if (cell.dataset.index >= 82 && cell.dataset.index <= 85){
  addWall(cell)
}
if (cell.dataset.index == 87) {
  addWall(cell)
}
if (cell.dataset.index >= 89 && cell.dataset.index <= 92){
  addWall(cell)
}
if (cell.dataset.index >= 94 && cell.dataset.index <= 97){
  addWall(cell)
}
if (cell.dataset.index >= 102 && cell.dataset.index <= 105){
  addWall(cell)
}
if (cell.dataset.index >= 107 && cell.dataset.index <= 110){
  addWall(cell)
}
if (cell.dataset.index == 112) {
  addWall(cell)
}
if (cell.dataset.index >= 114 && cell.dataset.index <= 117){
  addWall(cell)
}
if (cell.dataset.index >= 119 && cell.dataset.index <= 122){
  addWall(cell)
}
if (cell.dataset.index >= 152 && cell.dataset.index <= 155){
  addWall(cell)
}
if (cell.dataset.index == 157){
  addWall(cell)
}
if (cell.dataset.index >= 159 && cell.dataset.index <= 165){
  addWall(cell)
}
if (cell.dataset.index == 167){
  addWall(cell)
}
if (cell.dataset.index >= 169 && cell.dataset.index <= 172){
  addWall(cell)
}
if (cell.dataset.index >= 177 && cell.dataset.index <= 180){
  addWall(cell)
}
if (cell.dataset.index == 182){
  addWall(cell)
}
if (cell.dataset.index >= 184 && cell.dataset.index <= 190){
  addWall(cell)
}
if (cell.dataset.index == 192){
  addWall(cell)
}
if (cell.dataset.index >= 194 && cell.dataset.index <= 197){
  addWall(cell)
}
if (cell.dataset.index == 207){
  addWall(cell)
}
if (cell.dataset.index == 212){
  addWall(cell)
}
if (cell.dataset.index == 217){
  addWall(cell)
}
if (cell.dataset.index >= 226 && cell.dataset.index <=230){
  addWall(cell)
}
if (cell.dataset.index >= 232 && cell.dataset.index <= 235){
  addWall(cell)
}
if (cell.dataset.index == 237){
  addWall(cell)
}
if (cell.dataset.index >= 239 && cell.dataset.index <= 242){
  addWall(cell)
}
if (cell.dataset.index >= 244 && cell.dataset.index <= 248){
  addWall(cell)
}
if (cell.dataset.index >= 251 && cell.dataset.index <= 255){
  addWall(cell)
}
if (cell.dataset.index == 257){
  addWall(cell)
}
if (cell.dataset.index == 262){
  addWall(cell)
}
if (cell.dataset.index == 267){
  addWall(cell)
}
if (cell.dataset.index >= 269 && cell.dataset.index <= 273){
  addWall(cell)
}
}

function addWall(cell){
  cell.classList.add('wall')
  console.log('wall')
  wallArray.push(cell.dataset.index)
  console.log(wallArray)
}