//Set Board Image
//document.body.style.backgroundImage = '.RISKBoard800X533.jpg'
document.body.style.backgroundImage = '/images/PngItem_756554.png';


//Define constant game setup.
window.onload = function(){

// Define a Territory Matrix.
const territories = [
    {id:0, name:'Alaska', continent: 'North America', xpos:'5px', ypos:'750px', owner:'', numberOfTroops:0},
    {id:1, name:'NorthWest Territory', continent: 'North America', xpos:'15px', ypos:'750px', owner:'', numberOfTroops:0},
    {id:2, name:'Greenland', continent: 'North America', owner:'', xpos:'25px', ypos:'750px', numberOfTroops:0},
    {id:3, name:'Alberta', continent: 'North America', owner:'', xpos:'15px', ypos:'700px', numberOfTroops:0},
    {id:4, name:'Ontario', continent: 'North America', owner:'', xpos:'25px', ypos:'700px', numberOfTroops:0},
    {id:5, name:'Quebec', continent: 'North America', owner:'', xpos:'30px', ypos:'700px', numberOfTroops:0},
    {id:6, name:'Western United States', continent: 'North America', xpos:'25px', ypos:'650px', owner:'', numberOfTroops:0},
    {id:7, name:'Eastern United States', continent: 'North America', xpos:'35px', ypos:'650px', owner:'', numberOfTroops:0},
    {id:8, name:'Central America', continent: 'North America', xpos:'25px', ypos:'600px', owner:'', numberOfTroops:0},
    {id:9, name:'Iceland', continent: 'Europe', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:10, name:'Scandinavia', continent: 'Europe', xpos:'5px', ypos:'750px', owner:'', numberOfTroops:0},
    {id:11, name:'Ukraine', continent: 'Europe', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:12, name:'Great Britain', continent: 'Europe', xpos:'5px', ypos:'750px', owner:'', numberOfTroops:0},
    {id:13, name:'Northern Europe', continent: 'Europe', xpos:'5px', ypos:'750px', owner:'', numberOfTroops:0},
    {id:14, name:'Western Europe', continent: 'Europe', xpos:'5px', ypos:'750px', owner:'', numberOfTroops:0},
    {id:15, name:'Southern Europe', continent: 'Europe', xpos:'5px', ypos:'750px', owner:'', numberOfTroops:0},
    {id:16, name:'Ural', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:17, name:'Siberia', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:18, name:'Yakutsk', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:19, name:'Kamchatka', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:20, name:'Irkutsk', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:21, name:'Afghanistan', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:22, name:'China', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:23, name:'Mongolia', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:24, name:'Japan', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:25, name:'Middle East', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:26, name:'India', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:27, name:'Siam', continent: 'Asia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:28, name:'Venezuela', continent: 'South America', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:29, name:'Peru', continent: 'South America', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:30, name:'Brazil', continent: 'South America', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:31, name:'Argentina', continent: 'South America', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:32, name:'North Africa', continent: 'Africa', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:33, name:'Egypt', continent: 'Africa', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:34, name:'East Africa', continent: 'Africa', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:35, name:'Congo', continent: 'Africa', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:36, name:'South Africa', continent: 'Africa', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:37, name:'Congo', continent: 'Africa', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:38, name:'Indonesia', continent: 'Australia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:39, name:'New Guinea', continent: 'Australia', owner:'', xpos:'5px', ypos:'750px', numberOfTroops:0},
    {id:40, name:'Western Australia', continent: 'Australia', xpos:'5px', ypos:'750px', owner:'', numberOfTroops:0},
    {id:41, name:'Eastern Australia', continent: 'Australia', xpos:'5px', ypos:'750px', owner:'', numberOfTroops:0}
];

// Define and Locate Territory Buttons.
function createTerritoryButtons(){
    for(let i=0; i<territories.length; i++){
        const territoryButton = document.createElement('button');
        const troopButton = document.createElement('button');
        territoryButton.setAttribute('id', i);
        territoryButton.setAttribute('class', 'territory-button');
        // territoryButton.setAttribute('width', 75)
        // territoryButton.setAttribute('height', 50)
        troopButton.setAttribute('id', i);
        troopButton.setAttribute('class', 'troop-button');
        troopButton.setAttribute('textContent', territories[i].numberOfTroops);
        // troopButton.setAttribute('width', 100)
        // troopButton.setAttribute('height', 75)
        document.body.append(territoryButton, troopButton);
        //console.log(territoryButton.id)
    }
}

//Call the function to create the Territories.
createTerritoryButtons();
}

function fortify(){
    // Player 1 will push button on territory they want to move troops from.
    // Player 1 will then press button on territory they want to move troops to.
    // Player 1 will then select number of troops to move.
    // Turn Ends
}

function rollDice(){
    //Generate random number between 1 and 6.
    //Repeat process for number of dice rolled.
}

function attack(){
    // Player 1 will push button on territory they want to attack from.
    // Player 1 will then press button on territory they want to attack.
    // Player 1 will then select number of troops to attack (max 3).
    // Player 1 rolls dice.
    // Player being attacked selects number of defenders. (max 3)
    // Player being attacked rolls dice.
    // Results calculated and troop loss is determined.
    // If territory is lost, change color of Territory Button, draw card, and Fortify
    // If turn ends, move to Fortify.

}

function placeTroops(){
    // Player 1 will push button on territory they want to place the troops in.
    // # of troops will increase by 1.
    // If # of troops is > 0, repeat process.
    // Else, move to Player 2 if Player 2, 3, 4, etc. if those players have troops to place.
    // If no other players have troops to place, move on to attack phase.
}


function claimTerritories(){
    // Player 1 will push button on territory they choose.
    // Territory button color will change to match player's color.
    // # of troops will increase by 1.
    // Play will move on to Player 2, 3 , 4, etc.
    // Once all territories have been claimed, move to place rest of troops.
}


function gameSetup(){
    // Create input to select number of players.
    // Have users select color for each player.
    // Set number of troops received.
    // Move to territory claiming.
}


function main(){
    // const gameSetup = document.createElement('button');
    // gameSetup.addEventListener('click', gameSetupPopup)
    // Have a game setup popup appear after "Game Setup" button is pressed.

}


// function buttonAction(){
//     if (there are troops to be placed)
//     territoryButton.addEventListener('click', addTroops)
// }