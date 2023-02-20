//!Pac Man Game
//All MVP in green
//*Any additions in light green
function init(){
//!Elements
//the pac man
//each ghost, which will ultimately need a separate id for (a) the design / picture and
//(b) for the 'randomised' movements
//Pac Man and ghosts will actually be classes added to squares in response to click events
//^just highlighting them here for my own thinking
//start button
//*reset button?
//the squares on the board, so that they can respond to click events
//spans for points and lives that are visible to the user, and update throughout the game
//wall - one giant array which lists all the squares that are not accessible and then you can set that as an if statement in movement

const pacman = document.querySelector('.pacman')
const genericGhost = document.querySelector('.ghost')
const grid = document.querySelector('.grid')
const width = 25
const height = 25
const cellCount = width * height
const allSquaresArray = []
const notWallArray = []
const wall = document.querySelector('.wall')
const startButton = document.querySelector('#startbutton')

//add spans for points / lives
//add food and super food classes

let cell
let currentPosition = 462
let ghostPosition = 237

for(let i = 0; i < cellCount; i++) {
  console.log('Cell created')
  cell = document.createElement('div')
  cell.classList.add('cell')
  cell.classList.add('wall')
  cell.innerText = i
  cell.dataset.index = i
  grid.appendChild(cell)
  allSquaresArray.push(cell)
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
  }
  if (cell.dataset.index == 266){
    removeWall()
  }
  if (cell.dataset.index == 273){
    addWall()
  }
  if (cell.dataset.index >= 275 && cell.dataset.index <= 283){
    removeWall()
  }
  if (cell.dataset.index >= 291 && cell.dataset.index <= 299){
    removeWall()
  }
  if (cell.dataset.index >= 300 && cell.dataset.index <= 305){
    addWall()
  }
  if (cell.dataset.index == 308){
    removeWall()
  }
  if (cell.dataset.index == 316){
    removeWall()
  }
  if (cell.dataset.index >= 319 && cell.dataset.index <= 330){
    addWall()
  }
  if (cell.dataset.index >= 344 && cell.dataset.index <= 349){
    addWall()
  }
  if (cell.dataset.index >= 333 && cell.dataset.index <= 341){
    removeWall()
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
  if (cell.dataset.index >= 456 && cell.dataset.index <= 468){
    removeWall()
  }
  if (cell.dataset.index >= 470 && cell.dataset.index <= 473){
    removeWall()
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

function removeWall(){
  cell.classList.remove('wall')
  notWallArray.push(cell)
}

function addWall(){
  cell.classList.add('wall')
  //notWallArray.replace('cell.dataset.index', '')
}

function pacmanStart(){
    cell.classList.add('pacman')
    currentPosition = cell.dataset.index
    console.log(currentPosition)
  }

//!Variables
//number of points
let points = 0
//number of lives
let lives = 3
//ghosts timer
let ghostTimer
//*differentiated ghost timers for different characters?
//random number, declared so it's a global variable
let randomNumber
//may need more variables to refer to the different intervals 
//*so that they can be modified for level up?
//additional timer for food power up?
let foodTimer

//!Executions
//startGame()
function startGame(){
  setInterval(ghostMovement, 1500)
}
  //timer begins for movement of ghosts
  //triggers ghostMovement()
  //*Queen battle theme starts playing?

//wall()
//will need to be done by current position, not e
function hitsWall(e){
  if (e.target.classList.contains('wall') && e.target.classList.contains('pacman')){
    console.log('You shall not pass!')
  }
}
  //if player / ghost hits wall, turn a different way (for ghost, regenerate random number)

//ghostMovement()
function ghostMovement(){
  randomNumber = Math.ceil(Math.random() * 4)
  console.log(randomNumber)
  console.log(ghostPosition)
  if (randomNumber === 1 && !allSquaresArray[(ghostPosition + 1)].classList.contains('wall')){
    ghostPosition++
    ghostDisappear()
    ghostAppear(ghostPosition)
    if (!allSquaresArray[(ghostPosition + 1)].classList.contains('wall')){
      ghostPosition++
    }
  } else if (randomNumber === 1 && ghostPosition === 299){
    ghostPosition = ghostPosition - (width - 1)
  } else if (randomNumber === 2 && !allSquaresArray[(ghostPosition - 1)].classList.contains('wall')){
    ghostPosition--
    ghostDisappear()
    ghostAppear(ghostPosition)
    if (!allSquaresArray[(ghostPosition - 1)].classList.contains('wall')){
      ghostPosition--
    }
  } else if (randomNumber === 2 && ghostPosition === 275){
    ghostPosition = ghostPosition + (width - 1)
  } else if (randomNumber === 3 && !allSquaresArray[(ghostPosition - width)].classList.contains('wall')){
    ghostPosition -= width
  } else if (randomNumber === 4 && !allSquaresArray[(ghostPosition + width)].classList.contains('wall')){
    ghostPosition += width
  } else {
    ghostPosition = ghostPosition
    ghostMovement()
  }
  console.log(ghostPosition)
  ghostDisappear()
  ghostAppear(ghostPosition)
}
  //random number called, which must be constrained to 1-4, and this will then select 
  //the ghost's next move (i.e. 1-up, 2-down, 3-left, 4-right)
  //if ghost hits wall, they can't be allowed to go any further and random number must be regenerated
  //need to stop them just reversing back the way that they came, so they go down if they hit a wall, for example
  //triggers ghostDisappear()
  //triggers ghostAppear()
  //ghosts begin to move in ghostAppear()
  //*trigger individual ghost movements ()

//ghostDisappear()
function ghostDisappear(){
  for (i = 0; i < cellCount; i++){
    allSquaresArray[i].classList.remove('ghost')
    }
}
  //class with previous ghost image removed, using ? to ensure that it doesn't break the code

//ghostAppear()
function ghostAppear(ghostPosition){
  allSquaresArray[ghostPosition].classList.add('ghost')
  pacmanDies()
}
  //class with ghost image added to the random square selected
  //checks if possible to land on any given square
  //trigger pacmanDies()

//pacmanMovement()
function pacmanMoves(e){
  const right = 39
  const left = 37
  const up = 38
  const down = 40
  console.log(currentPosition)
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
  console.log(currentPosition)
  pacmanRemove()
  pacmanAdd(currentPosition)
}
  //use identifiers to check if player has clicked up, right, left, down (let variables)
  //sequence of if clauses for pacman image to be added to / removed from 
  //trigger pacmanRemove()
  //trigger pacmanAdd()
  //the appropriate selected squares 
  //checks if possible to land on any given square
  //trigger pacmanFed()
  //trigger pacmanWins()

//pacmanRemove()
function pacmanRemove(){
  for (i = 0; i < cellCount; i++){
  allSquaresArray[i].classList.remove('pacman')
  }
  //remove pacman class from previous square
}
//pacmanAdd()
function pacmanAdd(currentPosition){
  allSquaresArray[currentPosition].classList.add('pacman')
}
  //add pacman class to new square

//pacmanFed()
function pacmanFed(e){
  if (e.target.classList.contains('food')){
    points ++
    //change points span
  }
  if (e.target.classList.contains('superfood')){
    points++
    //change points span
    ghostWeakened()
  }
}
  //if pacman lands on a square with food, number of points increases
  //if pacman lands on a square with superfood, trigger ghostsWeakened()

//ghostWeakened()
function ghostWeakened(){}
  //ghosts gain a new class that makes them flash
  //if pacman lands on a square with a ghost, then the ghost goes back to the ghost holder
  //pacman gets points (more each ghost he eats)
  //setInterval on this being the case, because the ghosts must go back to being normal
  //trigger ghostReturning()
  //*if pacman lands on square with ghost, play another one bites the dust clip

//ghostReturning()
function ghostReturning(){}
  //clear ghostWeakened() interval
  //remove flashing class
  //ghosts gain new class that makes them pulse blue / white
  //can still be eaten by pacman
  //shorter timeInterval on this one - maybe setTimeout?
  //*if pacman lands on square with ghost, play another one bites the dust clip

//pacmanWins()
function pacmanWins(){
  for (let i = 0; i < cellCount; i++){
    if (cell.classList.contains(!'food') && cell.classList.contains(!'superfood')){
      levelUp()
    }
  }
}
  //if pacman gets all food, then trigger levelUp()

//pacmanDies()
function pacmanDies(){
  if (allSquaresArray[currentPosition].classList.contains('ghost')){
    lives --
    gameReset()
  }
}
  //if pacman and ghost on the same square
  //pacman loses a life
  //current score displayed to user
  //games resets (gamereset())
  //*plays 'play the game' extract or 'under pressure'

//gameReset()
function gameReset(){}
  //timer cleared
  //ghosts and pacman images cleared from all squares and returned to starting point
  //life must remain the same as when pacman died, so that they can continue to count down 
  //until game over

//*levelUp()
  //*ghost time intervals decrease (so speeding up)
  //*if level > 3, ghostWeakened() no longer triggered by the superfood

//*blinkyGo()
  //*aggressively placed in top right hand corner, approaches pacman when in proximity
  //*takes the shortest route to pacman

//*pinkyGo()
  //*top left hand corner, ambushes when pacman is near
  //*must move towards pacman, but not always the shortest route, sometimes winding

//*inkyGo()
  //*patrols bottom right hand corner, only chasing pacman if he is near

//*clydeGo()
  //*random bottom left wandering, when chasing will just move randomly

//*ghostFrightened()
  //*all move away from pacman when pacman can eat them, scattering

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
//player clicks play, game begins --> 'startGame()'
startButton.addEventListener('click', startGame)

//player touches keys (keydown events to allow for faster pacman movement) --> 'pacmanMovement()'
document.addEventListener('keydown', pacmanMoves)


}
window.addEventListener('DOMContentLoaded', init)