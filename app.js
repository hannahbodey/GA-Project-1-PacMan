//!Pac Man Game
//All MVP in green
//*Any additions in light green

function init(){
//!Elements

//*reset button?

//Can I now get rid of some of these constants?
const pacman = document.querySelector('.pacman')
//const genericGhost = document.querySelector('.ghost')
const blinky = document.querySelector('.blinky')
const pinky = document.querySelector('.pinky')
const inky = document.querySelector('.inky')
const clyde = document.querySelector('.clyde')
const grid = document.querySelector('.grid')
const width = 25
const height = 25
const cellCount = width * height
const allSquaresArray = []
const notWallArray = []
const foodArray = []
const wall = document.querySelector('.wall')
const startButton = document.querySelector('#startbutton')
const levelSpan = document.querySelector('#currentlevel')
const pointsSpan = document.querySelector('#currentscore')
const livesSpan = document.querySelector('#currentlives')
const body = document.querySelector('body')
const para = document.querySelectorAll('p')
const continueButton = document.querySelector('#continuebutton')
const title = document.querySelector('#title')
const titleText = document.querySelector('h1')
const pPicture = document.querySelector('#p')
const startSound = document.querySelector('#startsound')

let cell
let currentPosition = 462

function startScreen(){
  body.classList.add('body')
  para.forEach(item => item.classList.add('nodisplay'))
  continueButton.classList.add('nodisplay')
  startButton.classList.add('pulsetwo')
  startButton.classList.add('startbutton')
  title.classList.add('starttitle')
  titleText.classList.add('starttitle')
}

startScreen()

function setBoard(){
  for(let i = 0; i < cellCount; i++) {
    cell = document.createElement('div')
    cell.classList.add('cell')
    cell.classList.add('wall')
    //cell.innerText = i
    cell.dataset.index = i
    grid.appendChild(cell)
    allSquaresArray.push(cell)
    if (cell.dataset.index == 265){
      addBlinky()
    }
    if (cell.dataset.index == 259){
      addPinky()
    }
    if (cell.dataset.index == 315){
      addInky()
    }
    if (cell.dataset.index == 309){
      addClyde()
    }
    if (cell.dataset.index >= 26 && cell.dataset.index <= 36){
      removeWall()
    }
    if (cell.dataset.index >= 38 && cell.dataset.index <= 48){
      removeWall()
    }
    if (((cell.dataset.index % width) + 24 === width) && (cell.dataset.index > 1)) {//&& (cell.dataset.index < 226) && (cell.dataset.index > 275) && (cell.dataset.index < 300) && (cell.dataset.index < 325) && (cell.dataset.index > 352)){
      removeWall()
    }
    if (((cell.dataset.index % width) + 19 === width) && (cell.dataset.index > 6) && (cell.dataset.index < 532)){
      removeWall()
    }
    if (((cell.dataset.index % width) + 14 === width) && (cell.dataset.index > 12) && (cell.dataset.index < 160)){
      removeWall()
    } 
    if (((cell.dataset.index % width) + 12 === width) && (cell.dataset.index > 14) && (cell.dataset.index < 162)){
      removeWall()
    }
    if (((cell.dataset.index % width) + 7 === width) && (cell.dataset.index > 18) && (cell.dataset.index < 544)){
      removeWall()
    }
    if (((cell.dataset.index % width) + 2 === width) && (cell.dataset.index > 47)){
      removeWall()
    }
      if (((cell.dataset.index % width) + 14 === 0) && (cell.dataset.index < 162)){
      removeWall()
    } 
    if (cell.dataset.index >= 101 && cell.dataset.index <= 123){
      removeWall()
    }
    if (cell.dataset.index == 101){
      removeFood()
      addSuperFood()
    }
    if (cell.dataset.index == 123){
      removeFood()
      addSuperFood()
    }
    if (cell.dataset.index >= 151 && cell.dataset.index <= 156){
      removeWall()
    }
    if (cell.dataset.index >= 158 && cell.dataset.index <= 161){
      removeWall()
    }
    if (cell.dataset.index >= 163 && cell.dataset.index <= 166){
      removeWall()
    }
    if (cell.dataset.index >= 168 && cell.dataset.index <= 173){
      removeWall()
    }
    if (cell.dataset.index >= 219 && cell.dataset.index <= 223){
      addWall()
    }
    if (cell.dataset.index >= 233 && cell.dataset.index <= 241){
      removeWall()
      removeFood()
    }
    if (cell.dataset.index == 133){
      removeWall()
    }
    if (cell.dataset.index == 136){
      addWall()
    }
    if (cell.dataset.index == 138){
      addWall()
    }
    if (cell.dataset.index == 141){
      removeWall()
    }
    if (cell.dataset.index == 158){
      removeWall()
    }
    if (cell.dataset.index == 166){
      removeWall()
    }
    if (cell.dataset.index == 176){
      addWall()
    }
    if (cell.dataset.index == 186){
      removeWall()
    }
    if (cell.dataset.index == 188){
      removeWall()
    }
    if (cell.dataset.index == 198){
      addWall()
    }
    if (cell.dataset.index == 201){
      addWall()
    }
    if (cell.dataset.index == 226){
      addWall()
    }
    if (cell.dataset.index == 211){
      removeWall()
    }
    if (cell.dataset.index == 213){
      removeWall()
    }
    if (cell.dataset.index == 223){
      addWall()
    }
    if (cell.dataset.index == 248){
      addWall()
    }
    if (cell.dataset.index == 251){
      addWall()
    }
    if (cell.dataset.index == 258){
      removeWall()
      removeFood()
    }
    if (cell.dataset.index == 266){
      removeWall()
      removeFood()
    }
    if (cell.dataset.index == 273){
      addWall()
    }
    // if (cell.dataset.index >= 259 && cell.dataset.index <= 265){
    //   removeWall()
    //   addBunker()
    // }
    // if (cell.dataset.index >= 284 && cell.dataset.index <= 290){
    //   removeWall()
    //   addBunker()
    // }
    // if (cell.dataset.index >= 309 && cell.dataset.index <= 315){
    //   removeWall()
    //   addBunker()
    // }
    if (cell.dataset.index >= 275 && cell.dataset.index <= 283){
      removeWall()
    }
    if (cell.dataset.index == 283){
      removeFood()
    }
    if (cell.dataset.index >= 291 && cell.dataset.index <= 299){
      removeWall()
    }
    if (cell.dataset.index == 291){
      removeFood()
    }
    if (cell.dataset.index >= 300 && cell.dataset.index <= 305){
      addWall()
    }
    if (cell.dataset.index == 308){
      removeWall()
      removeFood()
    }
    if (cell.dataset.index == 316){
      removeWall()
      removeFood()
    }
    if (cell.dataset.index >= 319 && cell.dataset.index <= 330){
      addWall()
    }
    if (cell.dataset.index >= 344 && cell.dataset.index <= 349){
      addWall()
    }
    if (cell.dataset.index >= 333 && cell.dataset.index <= 341){
      removeWall()
      removeFood()
    }
    if (cell.dataset.index == 351){
      addWall()
    }
    if (cell.dataset.index == 358){
      removeWall()
    }
    if (cell.dataset.index == 366){
      removeWall()
    }
    if (cell.dataset.index == 373){
      addWall()
    }
    if (cell.dataset.index == 376){
      addWall()
    }
    if (cell.dataset.index == 398) {
      addWall()
    }
    if (cell.dataset.index == 383){
      removeWall()
    }
    if (cell.dataset.index == 391){
      removeWall()
    }
    if (cell.dataset.index >= 402 && cell.dataset.index <= 411){
      removeWall()
    }
    if (cell.dataset.index >= 413 && cell.dataset.index <= 422){
      removeWall()
    }
    if (cell.dataset.index == 436){
      removeWall()
    }
    if (cell.dataset.index == 438){
      removeWall()
    }
    if (cell.dataset.index == 461){
      removeWall()
    }
    if (cell.dataset.index == 462){
      pacmanStart()
    }
    if (cell.dataset.index == 463){
      removeWall()
    }
    if (cell.dataset.index >= 451 && cell.dataset.index <= 454){
      removeWall()
    }
    if (cell.dataset.index == 451){
      removeFood()
      addSuperFood()
    }
    if (cell.dataset.index >= 456 && cell.dataset.index <= 468){
      removeWall()
    }
    if (cell.dataset.index >= 470 && cell.dataset.index <= 473){
      removeWall()
    }
    if (cell.dataset.index == 473){
      removeFood()
      addSuperFood()
    }
    if (cell.dataset.index == 476){
      addWall()
    }
    if (cell.dataset.index == 479){
      removeWall()
    }
    if (cell.dataset.index == 483){
      removeWall()
    }
    if (cell.dataset.index == 495){
      removeWall()
    }
    if (cell.dataset.index == 498){
      addWall()
    }
    if (cell.dataset.index == 491){
      removeWall()
    }
    if (cell.dataset.index >= 501 && cell.dataset.index <= 506){
      removeWall()
    }
    if (cell.dataset.index >= 508 && cell.dataset.index <= 511){
      removeWall()
    }
    if (cell.dataset.index >= 513 && cell.dataset.index <= 516){
      removeWall()
    }
    if (cell.dataset.index >= 518 && cell.dataset.index <= 523){
      removeWall()
    }
    if (cell.dataset.index == 531){
      addWall()
    }
    if (cell.dataset.index == 536){
      removeWall()
    }
    if (cell.dataset.index == 538){
      removeWall()
    }
    if (cell.dataset.index == 543){
      addWall()
    }
    if (cell.dataset.index == 561){
      removeWall()
    }
    if (cell.dataset.index == 563){
      removeWall()
    }
    if (cell.dataset.index >= 577 && cell.dataset.index <= 597){
      removeWall()
    }
    if (cell.dataset.index > 600){
      addWall()
    }
  }
}

function removeWall(){
  cell.classList.remove('wall')
  notWallArray.push(cell)
  cell.classList.add('food')
  foodArray.push(cell)
}

function addWall(){
  cell.classList.add('wall')
  cell.classList.remove('food')
  // if (notWallArray.includes(cell)){
  //   notWallArray.splice(cell)
  // }
}

function pacmanStart(){
  cell.classList.add('pacman')
  currentPosition = cell.dataset.index
  console.log(currentPosition)
  }

function addBlinky(){
  cell.classList.add('blinky')
}

function addPinky(){
  cell.classList.add('pinky')
}

function addInky(){
  cell.classList.add('inky')
}

function addClyde(){
  cell.classList.add('clyde')
}

//need to check and sort array additions / changes
function removeFood(){
  cell.classList.remove('food')
  if (foodArray.includes(cell)){
    foodArray.splice(cell)
  }
}

function addSuperFood(){
  cell.classList.add('superfood')
}

function pacmanBackToStart(){
  currentPosition = 462
  allSquaresArray[currentPosition].classList.add('pacman')
}
//let ghostPosition = 237
let blinkyPosition = 265
function blinkyStart(){
  blinkyPosition = 265
  allSquaresArray[blinkyPosition].classList.add('blinky')
}
let pinkyPosition = 259
function pinkyStart(){
  pinkyPosition = 259
  allSquaresArray[pinkyPosition].classList.add('pinky')
}
let inkyPosition = 315
function inkyStart(){
  inkyPosition = 315
  allSquaresArray[inkyPosition].classList.add('inky')
}
let clydePosition = 309
function clydeStart(){
  clydePosition = 309
  allSquaresArray[clydePosition].classList.add('clyde')
}

//!Variables
let points = 0
let lives = 3
livesSpan.innerText = lives
let randomNumber
//let ghostIdentity
let ghostsWeak
let ghostsStronger
let ghostsStrong
let blinkyGoStart
let pinkyGoStart
let inkyGoStart
let clydeGoStart

//!Executions
function startGame(){
  setBoard()
  para.forEach(item => item.classList.remove('nodisplay'))
  document.addEventListener('keydown', pacmanMoves)
  blinkyGoStart = setInterval(blinkyGo, 1500)
  pinkyGoStart = setInterval(pinkyGo, 1500)
  inkyGoStart = setInterval(inkyGo, 1500)
  clydeGoStart = setInterval(clydeGo, 1500)
  document.querySelector('#startbutton').disabled = true
  title.classList.remove('starttitle')
  title.classList.add('titleresize')
  titleText.classList.add('nodisplay')
  startButton.classList.add('nodisplay')
  pPicture.classList.add('nodisplay')
  levelSpan.innerText = '1'
  highestScore()
  startSound.play()
}

function continueGame(){
  document.querySelector('#continuebutton').disabled = true
  document.addEventListener('keydown', pacmanMoves)
  blinkyGoStart = setInterval(blinkyGo, 1500)
  pinkyGoStart = setInterval(pinkyGo, 1500)
  inkyGoStart = setInterval(inkyGo, 1500)
  clydeGoStart = setInterval(clydeGo, 1500)
}
  //*Queen battle theme starts playing?

  //*blinkyGo()
  //*aggressively placed in top right hand corner, approaches pacman when in proximity
  //*takes the shortest route to pacman
  function blinkyGo(){
  randomNumber = Math.ceil(Math.random() * 4)
  //blinkyPosition = 259
  //ghostIdentity = 'blinky'
  // ghostMovement()
  if (randomNumber === 1 && !allSquaresArray[(blinkyPosition + 1)].classList.contains('wall')){
    blinkyPosition++
    // blinkyDisappear()
    // blinkyAppear(blinkyPosition)
    // if (!allSquaresArray[(blinkyPosition + 1)].classList.contains('wall')){
    //   blinkyPosition++
    // }
  } else if (randomNumber === 1 && blinkyPosition === 299){
    blinkyPosition = blinkyPosition - (width - 1)
  } else if (randomNumber === 2 && !allSquaresArray[(blinkyPosition - 1)].classList.contains('wall')){
    blinkyPosition--
    // blinkyDisappear()
    // blinkyAppear(blinkyPosition)
    // if (!allSquaresArray[(blinkyPosition - 1)].classList.contains('wall')){
    //   blinkyPosition--
    // }
  } else if (randomNumber === 2 && blinkyPosition === 275){
    blinkyPosition = blinkyPosition + (width - 1)
  } else if (randomNumber === 3 && !allSquaresArray[(blinkyPosition - width)].classList.contains('wall')){
    blinkyPosition -= width
    // blinkyDisappear()
    // blinkyAppear(blinkyPosition)
    // if (!allSquaresArray[(blinkyPosition - width)].classList.contains('wall')){
    //   blinkyPosition -= width
    // }
  } else if (randomNumber === 4 && !allSquaresArray[(blinkyPosition + width)].classList.contains('wall')){
    blinkyPosition += width
    // blinkyDisappear()
    // blinkyAppear(blinkyPosition)
    // if (!allSquaresArray[(blinkyPosition + width)].classList.contains('wall')){
    //   blinkyPosition += width
    // }
  } else {
    blinkyPosition = blinkyPosition
    blinkyGo()
  }
  blinkyDisappear()
  blinkyAppear(blinkyPosition)
}

function blinkyDisappear(){
  for (let i = 0; i < cellCount; i++){
    allSquaresArray[i].classList.remove('blinky')
  }
}

function blinkyAppear(blinkyPosition){
  allSquaresArray[blinkyPosition].classList.add('blinky')
  pacmanDies()
}

//*pinkyGo()
  //*top left hand corner, ambushes when pacman is near
  //*must move towards pacman, but not always the shortest route, sometimes winding
  function pinkyGo(){
    randomNumber = Math.ceil(Math.random() * 4)
    // pinkyPosition = ghostPosition
    //ghostMovement()
  if (randomNumber === 1 && !allSquaresArray[(pinkyPosition + 1)].classList.contains('wall')){
    pinkyPosition++
    // pinkyDisappear()
    // pinkyAppear(pinkyPosition)
    // if (!allSquaresArray[(pinkyPosition + 1)].classList.contains('wall')){
    //   pinkyPosition++
    // }
  } else if (randomNumber === 1 && pinkyPosition === 299){
    pinkyPosition = pinkyPosition - (width - 1)
  } else if (randomNumber === 2 && !allSquaresArray[(pinkyPosition - 1)].classList.contains('wall')){
    pinkyPosition--
    // pinkyDisappear()
    // pinkyAppear(pinkyPosition)
    // if (!allSquaresArray[(pinkyPosition - 1)].classList.contains('wall')){
    //   pinkyPosition--
    // }
  } else if (randomNumber === 2 && pinkyPosition === 275){
    pinkyPosition = pinkyPosition + (width - 1)
  } else if (randomNumber === 3 && !allSquaresArray[(pinkyPosition - width)].classList.contains('wall')){
    pinkyPosition -= width
    // pinkyDisappear()
    // pinkyAppear(pinkyPosition)
    // if (!allSquaresArray[(pinkyPosition - width)].classList.contains('wall')){
    //   pinkyPosition -= width
    // }
  } else if (randomNumber === 4 && !allSquaresArray[(pinkyPosition + width)].classList.contains('wall')){
    pinkyPosition += width
    // pinkyDisappear()
    // pinkyAppear(pinkyPosition)
    // if (!allSquaresArray[(pinkyPosition + width)].classList.contains('wall')){
    //   pinkyPosition += width
    // }
  } else {
    pinkyPosition = pinkyPosition
    pinkyGo()
  }
  pinkyDisappear()
  pinkyAppear(pinkyPosition)
}

function pinkyDisappear(){
  for (let i = 0; i < cellCount; i++){
    allSquaresArray[i].classList.remove('pinky')
  }
}

function pinkyAppear(pinkyPosition){
  allSquaresArray[pinkyPosition].classList.add('pinky')
  pacmanDies()
}
//*inkyGo()
  //*patrols bottom right hand corner, only chasing pacman if he is near
  function inkyGo(){
    randomNumber = Math.ceil(Math.random() * 4)
    //inkyPosition = 259
    //ghostIdentity = 'inky'
    // ghostMovement()
    if (randomNumber === 1 && !allSquaresArray[(inkyPosition + 1)].classList.contains('wall')){
      inkyPosition++
      // inkyDisappear()
      // inkyAppear(inkyPosition)
      // if (!allSquaresArray[(inkyPosition + 1)].classList.contains('wall')){
      //   inkyPosition++
      // }
    } else if (randomNumber === 1 && inkyPosition === 299){
      inkyPosition = inkyPosition - (width - 1)
    } else if (randomNumber === 2 && !allSquaresArray[(inkyPosition - 1)].classList.contains('wall')){
      inkyPosition--
      // inkyDisappear()
      // inkyAppear(inkyPosition)
      // if (!allSquaresArray[(inkyPosition - 1)].classList.contains('wall')){
      //   inkyPosition--
      // }
    } else if (randomNumber === 2 && inkyPosition === 275){
      inkyPosition = inkyPosition + (width - 1)
    } else if (randomNumber === 3 && !allSquaresArray[(inkyPosition - width)].classList.contains('wall')){
      inkyPosition -= width
      // inkyDisappear()
      // inkyAppear(inkyPosition)
      // if (!allSquaresArray[(inkyPosition - width)].classList.contains('wall')){
      //   inkyPosition -= width
      // }
    } else if (randomNumber === 4 && !allSquaresArray[(inkyPosition + width)].classList.contains('wall')){
      inkyPosition += width
      // inkyDisappear()
      // inkyAppear(inkyPosition)
      // if (!allSquaresArray[(inkyPosition + width)].classList.contains('wall')){
      //   inkyPosition += width
      // }
    } else {
      inkyPosition = inkyPosition
      inkyGo()
    }
    inkyDisappear()
    inkyAppear(inkyPosition)
  }
  
  function inkyDisappear(){
    for (let i = 0; i < cellCount; i++){
      allSquaresArray[i].classList.remove('inky')
    }
  }
  
  function inkyAppear(inkyPosition){
    allSquaresArray[inkyPosition].classList.add('inky')
    pacmanDies()
  }


//*clydeGo()
  //*random bottom left wandering, when chasing will just move randomly
  function clydeGo(){
    randomNumber = Math.ceil(Math.random() * 4)
    //clydePosition = 259
    //ghostIdentity = 'clyde'
    // ghostMovement()
    if (randomNumber === 1 && !allSquaresArray[(clydePosition + 1)].classList.contains('wall')){
      clydePosition++
      // clydeDisappear()
      // clydeAppear(clydePosition)
      // if (!allSquaresArray[(clydePosition + 1)].classList.contains('wall')){
      //   clydePosition++
      // }
    } else if (randomNumber === 1 && clydePosition === 299){
      clydePosition = clydePosition - (width - 1)
    } else if (randomNumber === 2 && !allSquaresArray[(clydePosition - 1)].classList.contains('wall')){
      clydePosition--
      // clydeDisappear()
      // clydeAppear(clydePosition)
      // if (!allSquaresArray[(clydePosition - 1)].classList.contains('wall')){
      //   clydePosition--
      // }
    } else if (randomNumber === 2 && clydePosition === 275){
      clydePosition = clydePosition + (width - 1)
    } else if (randomNumber === 3 && !allSquaresArray[(clydePosition - width)].classList.contains('wall')){
      clydePosition -= width
      // clydeDisappear()
      // clydeAppear(clydePosition)
      // if (!allSquaresArray[(clydePosition - width)].classList.contains('wall')){
      //   clydePosition -= width
      // }
    } else if (randomNumber === 4 && !allSquaresArray[(clydePosition + width)].classList.contains('wall')){
      clydePosition += width
      // clydeDisappear()
      // clydeAppear(clydePosition)
      // if (!allSquaresArray[(clydePosition + width)].classList.contains('wall')){
      //   clydePosition += width
      // }
    } else {
      clydePosition = clydePosition
      clydeGo()
    }
    clydeDisappear()
    clydeAppear(clydePosition)
  }
  
  function clydeDisappear(){
    for (let i = 0; i < cellCount; i++){
      allSquaresArray[i].classList.remove('clyde')
    }
  }
  
  function clydeAppear(clydePosition){
    allSquaresArray[clydePosition].classList.add('clyde')
    pacmanDies()
  }

function pacmanMoves(e){
  const right = 39
  const left = 37
  const up = 38
  const down = 40
  if (e.keyCode === right && !allSquaresArray[(currentPosition + 1)]?.classList.contains('wall')){
    currentPosition++
  } else if (e.keyCode === right && currentPosition === 299){
    currentPosition = currentPosition - (width - 1)
  } else if (e.keyCode === left && !allSquaresArray[(currentPosition - 1)].classList.contains('wall')){
    currentPosition--
  } else if (e.keyCode === left && currentPosition === 275){
    currentPosition = currentPosition + (width - 1)
  } else if (e.keyCode === up && !allSquaresArray[(currentPosition - width)].classList.contains('wall')){
    currentPosition -= width
  } else if (e.keyCode === down && !allSquaresArray[(currentPosition + width)].classList.contains('wall')){
    currentPosition += width
  } else {
    currentPosition = currentPosition
  }
  pacmanRemove()
  pacmanAdd(currentPosition)
  pacmanFed(currentPosition)
  pacmanDies()
}

function pacmanRemove(){
  for (let i = 0; i < cellCount; i++){
  allSquaresArray[i].classList.remove('pacman')
  }
}

function pacmanAdd(currentPosition){
  allSquaresArray[currentPosition].classList.add('pacman')
}

function pacmanFed(currentPosition){
  if (allSquaresArray[currentPosition].classList.contains('food')){
    points ++
    pointsSpan.innerText = points
    allSquaresArray[currentPosition].classList.remove('food')
  }
  if (allSquaresArray[currentPosition].classList.contains('superfood')){
    points++
    pointsSpan.innerText = points
    allSquaresArray[currentPosition].classList.remove('superfood')
    ghostsWeak = setInterval(ghostWeakened, 100)
    ghostsStronger = setTimeout(ghostReturning, 2500)
    setTimeout(ghostsStrengthened, 5000)
  }
  if(points > 200){
    pacmanWins(0)
  }
}

function ghostWeakened(){
  removeScaredGhost()
  allSquaresArray[blinkyPosition].classList.add('scaredghost')
  allSquaresArray[pinkyPosition].classList.add('scaredghost')
  allSquaresArray[inkyPosition].classList.add('scaredghost')
  allSquaresArray[clydePosition].classList.add('scaredghost')
  if (currentPosition === blinkyPosition){
    points = points + 200
    blinkyStart()
    removeScaredGhost()
    bitesTheDust()
  }
  if (currentPosition === pinkyPosition){
    points = points + 200
    pinkyStart()
    removeScaredGhost()
    bitesTheDust()
  }
  if (currentPosition === inkyPosition){
    points = points + 200
    inkyStart()
    removeScaredGhost()
    bitesTheDust()
  }
  if (currentPosition === clydePosition){
    points = points + 200
    clydeStart()
    removeScaredGhost()
    bitesTheDust()
  }
}

function bitesTheDust(){
  const bitesDust = document.querySelector('#bitesthedust')
  bitesDust.play()
  //startSound.pause()
}

function removeScaredGhost(){
  for (i = 0; i < cellCount; i++){
    allSquaresArray[i].classList.remove('scaredghost')
    allSquaresArray[i]?.classList.remove('pulse')
    }
}

function ghostReturning(){
  ghostsStrong = setInterval(ghostReturn, 200)
}

function ghostReturn(){
  removeScaredGhost()
  allSquaresArray[blinkyPosition].classList.add('scaredghost', 'pulse')
  allSquaresArray[pinkyPosition].classList.add('scaredghost', 'pulse')
  allSquaresArray[inkyPosition].classList.add('scaredghost', 'pulse')
  allSquaresArray[clydePosition].classList.add('scaredghost', 'pulse')
  if (currentPosition === blinkyPosition){// (allSquaresArray[currentPosition].classList.contains('pacman') && allSquaresArray[currentPosition].classList.contains('blinky')){
    points = points + 200
    blinkyStart()
    removeScaredGhost()
    bitesTheDust()
  }
  if (currentPosition === pinkyPosition){//(allSquaresArray[currentPosition].classList.contains('pacman') && allSquaresArray[currentPosition].classList.contains('pinky')){
    points = points + 200
    pinkyStart()
    removeScaredGhost()
    bitesTheDust()
  }
  if (currentPosition === inkyPosition){//(allSquaresArray[currentPosition].classList.contains('pacman') && allSquaresArray[currentPosition].classList.contains('inky')){
    points = points + 200
    inkyStart()
    removeScaredGhost()
    bitesTheDust()
  }
  if (currentPosition === clydePosition){//(allSquaresArray[currentPosition].classList.contains('pacman') && allSquaresArray[currentPosition].classList.contains('clyde')){
    points = points + 200
    clydeStart()
    removeScaredGhost()
    bitesTheDust()
  }
}

function ghostsStrengthened(){
  clearInterval(ghostsWeak)
  clearInterval(ghostsStronger)
  clearInterval(ghostsStrong)
  removeScaredGhost()
}
  //pacman gets points (more each ghost he eats)
  //*trigger scared ghost behaviour

function pacmanWins(sum){
  for (let i = 0; i < cellCount; i++){
    if (allSquaresArray[i].classList.contains('food')){
      sum = sum
    } else if (allSquaresArray[i].classList.contains('superfood')){
      sum = sum
    } else 
    if (!allSquaresArray[i].classList.contains('food')){
      sum++
    } else if (!allSquaresArray[i].classList.contains('superfood')){
      sum++
    }
    if (sum === cellCount){
      alert(`You win! Final Score: ${points} \nTime to Level Up!`)
      if (levelSpan.innerText = '1'){
        levelUpOne()
      } else if (levelSpan.innerText = '2'){
        levelUpTwo()
      } else if (levelSpan.innerText = '3'){
        alert(`You beat the monsters. Congratulations!`)
      }
    }
  }
}

//Probably can actually take out the && statement from the first set of if statements
function pacmanDies(){
  if (allSquaresArray[blinkyPosition].classList.contains('scaredghost')){
    if (currentPosition === blinkyPosition && allSquaresArray[blinkyPosition].classList.contains('scaredghost')){
      lives = lives
    } 
    if (currentPosition === pinkyPosition && allSquaresArray[pinkyPosition].classList.contains('scaredghost')){
      lives = lives
    } 
    if (currentPosition === inkyPosition && allSquaresArray[inkyPosition].classList.contains('scaredghost')){
      lives = lives
    } 
    if (currentPosition === clydePosition && allSquaresArray[clydePosition].classList.contains('scaredghost')){
      lives = lives
    }
  } else{
    if (currentPosition === blinkyPosition){
      lives--
      livesSpan.innerText = lives
      gameReset()
    } 
    if (currentPosition === pinkyPosition){
      lives--
      livesSpan.innerText = lives
      gameReset()
    } 
    if (currentPosition === inkyPosition){
      lives--
      livesSpan.innerText = lives
      gameReset()
    } 
    if (currentPosition === clydePosition){
      lives--
      livesSpan.innerText = lives
      gameReset()
    }
  }
}
  

  //*plays 'play the game' extract or 'under pressure'

function gameReset(){
  alert(`Lose a life! \nLives remaining: ${lives} \nCurrent score: ${points}`)
  clearInterval(blinkyGoStart)
  clearInterval(pinkyGoStart)
  clearInterval(inkyGoStart)
  clearInterval(clydeGoStart)
  resetCharacters()
  continueButton.classList.remove('nodisplay')
  document.querySelector('#continuebutton').disabled = false
  if (lives === 0){
    alert(`You're dead, game over! \nTotal score: ${points}`)
    startSound.pause()
  }
}

function resetCharacters(){
  for (let i = 0; i < cellCount; i++){
    allSquaresArray[i].classList.remove('pacman', 'blinky', 'pinky', 'inky', 'clyde')
    // allSquaresArray[i].classList.remove('blinky')
    // allSquaresArray[i].classList.remove('pinky')
    // allSquaresArray[i].classList.remove('inky')
    // allSquaresArray[i].classList.remove('clyde')
    }
  blinkyStart()
  pinkyStart()
  inkyStart()
  clydeStart()
  pacmanBackToStart()
  // resetFoodBoard()
}
  //timer cleared
  //ghosts and pacman images cleared from all squares and returned to starting point
  //life must remain the same as when pacman died, so that they can continue to count down 
  //until game over

//*levelUp()
  //*ghost time intervals decrease (so speeding up)
  //*if level > 3, ghostWeakened() no longer triggered by the superfood
function levelUpOne(){
  clearInterval(blinkyGoStart)
  clearInterval(pinkyGoStart)
  clearInterval(inkyGoStart)
  clearInterval(clydeGoStart)
  resetCharacters()
  document.addEventListener('keydown', pacmanMoves)
  blinkyGoStart = setInterval(blinkyGo, 1000)
  pinkyGoStart = setInterval(pinkyGo, 1000)
  inkyGoStart = setInterval(inkyGo, 1000)
  clydeGoStart = setInterval(clydeGo, 1000)
  levelSpan.innerText = '2'
}

function levelUpTwo(){
  clearInterval(blinkyGoStart)
  clearInterval(pinkyGoStart)
  clearInterval(inkyGoStart)
  clearInterval(clydeGoStart)
  resetCharacters()
  document.addEventListener('keydown', pacmanMoves)
  blinkyGoStart = setInterval(blinkyGo, 500)
  pinkyGoStart = setInterval(pinkyGo, 500)
  inkyGoStart = setInterval(inkyGo, 500)
  clydeGoStart = setInterval(clydeGo, 1000)
  levelSpan.innerText = '3'
}

function highestScore(){
  const highScore = 'highScores'
  let highestScore = localStorage.getItem(highScore)
  console.log(highestScore)
  // 
  // const numberHighScores = 0
  // const highScoreString = localStorage.getItem(highScore);
  // const highScores = JSON.parse(highScoreString) ?? [];
  // function checkHighScore(score) {
  //   const highScores = JSON.parse(localStorage.getItem(highScore)) ?? [];
  //   const lowestScore = highScores[ - 1]?.score ?? 0;
    
  //   if (score > lowestScore) {
  //     saveHighScore(score, highScores); // TODO
  //     showHighScores(); // TODO
}

//•need to add a complete game over points reset etc.
//*ghostFrightened()
  //*all move away from pacman when pacman can eat them, scattering

//*ghostsChase()
//*if ghostIdentity =, then...
//!Page load
//*boardDelay()
  //*start screen on setInterval so that it transitions into the game itself after a few seconds so you can click start

//boardAppears()
  //creates board layout
//pacman and ghosts assigned to starter squares
  //pacmanStart()

  // let startCell = cell.getAttribute('data-index', 462)
  // startCell.classList.add('pacman')

    //assigned to square one at bottom
  //ghostStart()
    //assigned to ghost bunker

//!Events
startButton.addEventListener('click', startGame)
continueButton.addEventListener('click', continueGame)
}

window.addEventListener('DOMContentLoaded', init)