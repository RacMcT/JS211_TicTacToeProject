// Variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'

const handleClick = (element) => {

console.log(`The element you clicked on has an id:  ${element.id}`)

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}

// Places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

console.log(`*** The current marker is:  ${currentMarker}. ***`)
console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
 

document.getElementById(id).innerHTML = currentMarker
 
  changeMarker()
}

// Function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

// "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  const squares = document.getElementsByTagName("TD")
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {
  
    // log the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
}
