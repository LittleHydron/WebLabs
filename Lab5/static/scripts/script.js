let cntOfAddedChildren = 0;
let screen = document.querySelector("#screen");
let screenEditing = document.querySelector("#screen-editing");
let summaryPower = document.querySelector("#summary-power");
let creatorNameForQuery = document.getElementById("input");
let typeForAdding = document.getElementById("type-field");
let powerForAdding = document.getElementById("power-field");
let numberForAdding = document.getElementById("number-field");
let nameForAdding = document.getElementById("name-field");
let typeForEditing = document.getElementById("type-edit-field");
let powerForEditing = document.getElementById("power-edit-field");
let numberForEditing = document.getElementById("number-edit-field");
let nameForEditing = document.getElementById("name-edit-field");
let homeContent = document.getElementById("home-content");
let addingContent = document.getElementById("adding-content");
let editingContent = document.getElementById("editing-content");
let workingScreen = screen;
let indexForChanging = -1;

const BASE_URL = 'http://127.0.0.1:5000/';

function findByCreatorName(arrayOfObjects){
    killChild();
    let name = creatorNameForQuery.value;
    creatorNameForQuery.value = "";
    clearScreen();
    currentArray = arrayOfObjects.filter((item)=>{return item.creatorName === name});
    displayContent(currentArray);
}

function sortByLamps(arrayOfObjects){
    killChild();
    arrayOfObjects.sort((a, b) => {
        return a.numOfLamps - b.numOfLamps;
    });
    clearScreen()
    displayContent(arrayOfObjects);
}

function killChild(){
    if (summaryPower !== null) {
        summaryPower.style.display = "none";
    }
}

function countByPower(arrayOfObjects){
    let cnt =  arrayOfObjects.reduce((result, element) => {
        return result + element.power;
    }, 0);
    if (summaryPower.style.display === "none") {
        summaryPower.style.display = "block";
        if (cntOfAddedChildren === 0) {
            summaryPower.insertAdjacentHTML("afterbegin", `
            <div><h4> Summary power: ${cnt} </h4></div>`);
            ++ cntOfAddedChildren;
        }
    }else{
        console.log("Killing a child");
        killChild();
    }
}

function fillEditingForm(index){
    typeForEditing.value = arrayOfObjects[index].type;
    powerForEditing.value = arrayOfObjects[index].power;
    numberForEditing.value = arrayOfObjects[index].numOfLamps;
    nameForEditing.value = arrayOfObjects[index].creatorName;
    indexForChanging = index;
}

function changeObject(){
    if (indexForChanging === -1){
        alert("You must choose a lighter to edit!");
        return;
    }
    let type = typeForEditing.value;
    let power = powerForEditing.value;
    let number = numberForEditing.value;
    let name = nameForEditing.value;
    if (type.length === 0 || power.length === 0 || number.length === 0 || name.length === 0){
        alert("All fields must be non-empty!");
    }else{
        if (parseInt(power) < 0 || parseInt(number) < 0){
            alert("Power and Number of lamps must be a positive integer!");
        }else{
            typeForEditing.value = "";
            powerForEditing.value = "";
            numberForEditing.value = "";
            nameForEditing.value = "";
            alert("Lighter was edited successfully!");
            arrayOfObjects[indexForChanging] = new Lighter(type, parseInt(power), parseInt(number), name);
            reset();
        }
    }
    indexForChanging = -1;
}

function displayContent(arrayOfObjects){
    if (arrayOfObjects.length === 0){
        let div = document.createElement("div");
        div.insertAdjacentHTML("afterbegin", `
            <div><h4> No data :( </h4></div>`);
        div.style.margin = "auto";
        div.style.width = "max-content";
        workingScreen.appendChild(div);
        return;
    }
    let index = 0;
    for (let element of arrayOfObjects){
        let div = document.createElement("div");
        if (editingContent.style.display !== "none"){
            div.id = "filling-" + (index ++);
        }
        div.innerHTML = `
            <table>
                <tr>
                    <td>Type: </td>
                    <td>${element.type}</td>
                </tr>
                <tr>
                    <td>Power: </td>
                    <td>${element.power}</td>
                </tr>
                <tr>
                    <td>Number of Lamps: </td>
                    <td>${element.numOfLamps}</td>
                </tr>
                <tr>
                    <td>Name of Creator: </td>
                    <td>${element.creatorName}</td>
                </tr>
            </table>
        `;
        workingScreen.appendChild(div);
    }
    if (editingContent.style.display !== "none"){
        for (let i=0; i<index; ++ i){
            let div = document.querySelector("#filling-" + i);
            div.addEventListener('click', (event)=>{
                fillEditingForm(i);
            });
        }
    }
}

function clearScreen(){
    cntOfAddedChildren = 0;
    while(workingScreen.firstChild){
        workingScreen.removeChild(workingScreen.lastChild);
    }
    if (homeContent.style.display !== "none"){
        screen.insertAdjacentHTML("afterbegin", `<section style="display: none; width: max-content; margin: auto;" id = "summary-power">

        </section>`);
        summaryPower = document.querySelector("#summary-power");
    }
}

function reset(){
    currentArray = [...arrayOfObjects];
    clearScreen();
    displayContent(currentArray);
}

function validateInput(){
    let type = typeForAdding.value;
    let power = powerForAdding.value;
    let number = numberForAdding.value;
    let name = nameForAdding.value;
    if (type.length === 0 || power.length === 0 || number.length === 0 || name.length === 0){
        alert("All fields must be non-empty!");
    }else{
        if (parseInt(power) < 0 || parseInt(number) < 0){
            alert("Power and Number of lamps must be positive integers!");
        }else{
            typeForAdding.value = "";
            powerForAdding.value = "";
            numberForAdding.value = "";
            nameForAdding.value = "";
            alert("Lighter was added successfully!");
            arrayOfObjects.push(new Lighter(type, parseInt(power), parseInt(number), name));
        }
    }
}

function switchToHome(){
    homeContent.style.display = "flex";
    addingContent.style.display = "none";
    editingContent.style.display = "none";
    workingScreen = screen;
    reset();
}

function switchToAdding(){
    homeContent.style.display = "none";
    addingContent.style.display = "block";
    editingContent.style.display = "none";
}

function switchToEditing(){
    homeContent.style.display = "none";
    addingContent.style.display = "none";
    editingContent.style.display = "flex";
    workingScreen = screenEditing;
    indexForChanging = -1;
    reset();
}

class Lighter{
    constructor(type, power, numOfLamps, creatorName){
        this.type = type;
        this.power = power;
        this.numOfLamps = numOfLamps;
        this.creatorName = creatorName;
    }
}

let arrayOfObjects = [
    new Lighter("fr", 12, 19, "Sasha"),
    new Lighter("qwert", 11, 1, "Buzz"),
    new Lighter("pokl", 10, 9, "Kokojamba"),
    new Lighter("akl", 120, 21, "Buzz"),
    new Lighter("fsg", 111, 113, "Borys"),
    new Lighter("fs", 9, 11, "Pavlo"),
    new Lighter("fs", 9, 0, "Buzz")
];

for (let lighter of arrayOfObjects){
    const params = {
        method: "POST",
        body: lighter
    };
    fetch(BASE_URL + 'lighter', params).then(()=>{
        console.log(lighter);
    });
}

let currentArray = [...arrayOfObjects];

switchToHome();