const xPlayer = document.querySelector(".xplayer")
const oPlayer = document.querySelector(".oplayer")
const infoTile = document.querySelector("#infor-tile")
const listBlock = document.querySelectorAll(".ticBlock")
const btn = document.querySelector("#btn")
// current player 
let player = "x"

let isPauseGame = false
let isGameStart = false
let inputCells = ['', '', '',
                    '', '', '',
                    '', '', '']
// condition                    
const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
]
// add function for button select player
const getPlayer = (P) =>{
    if(isGameStart){
        return
    }
    player = P
    if(player == "x" ){
        xPlayer.classList.add("active")
        oPlayer.classList.remove("active")
    }else{
        oPlayer.classList.add("active")
        xPlayer.classList.remove("active")
    }
}

getPlayer(player)


listBlock.forEach((element,index) => {
    element.addEventListener("click",()=>{
        //start game
        isGameStart = true;

        if(isPauseGame || inputCells[index] != '' ){
            // stop game if game start 
            return
        }
        
        // add to input cell
        inputCells[index] = player
        // add css 
        listBlock[index].textContent =  player
        listBlock[index].style.color =  player ==="x" ? "#1875b2":"#a737ff"
        // checking winner with condition
        if(!checkWinner(player)){
            // change player
            changePlayer()
        }
        
    })
});


const changePlayer = () =>{
    current  = player =="x" ? "o" : "x"
    // get arr "" in inputCells
    let newList = []
    inputCells.forEach((item,index)=>{
        if(item == ''){
            newList.push(index)
        }
    })
    // get random position
    let position = newList[Math.floor(Math.random() * newList.length) + 0]
    // check length
    if(newList.length == 0){
        return
    }

    inputCells[position] = current
    listBlock[position].textContent = current
    listBlock[position].style.color =  current ==="x" ? "#1875b2":"#a737ff"

    checkWinner(current)
}

const checkWinner = (player) =>{
    // winner
    for (const [a,b,c] of winConditions) {
        if( inputCells[a] === player  && inputCells[b] === player && inputCells[c] === player){
            // set ui for winner
            infoTile.textContent =  player.toLocaleUpperCase() + " WIN"
            listBlock[a].style.background = " #2A2343";
            listBlock[b].style.background = " #2A2343";
            listBlock[c].style.background = " #2A2343";
            // set btn reset 
            btnHandel()
            // pauseGame
            isPauseGame = true 
            return true 
        }
    }

    // draw
    const check = inputCells.every(item=> item != "")
    if(check){
        infoTile.textContent = "Draw"
        // set btn reset 
        btnHandel()
        // pauseGame
        isPauseGame = true
    }
}

const btnHandel =()=>{
    btn.style.display = "block"
    btn.addEventListener("click",()=>{
            listBlock.forEach((element,index) => {
                element.textContent = ""
            });
            inputCells.forEach((item,index)=>{
                inputCells[index] = ""
                listBlock[index].style.background = " #17122A";
            })
            infoTile.textContent = "Choose"
            isPauseGame = false
            isGameStart = false
            btn.style.display = "none"
    })
}

