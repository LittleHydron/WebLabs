function findByCreatorName(arrayOfObjects){
    killChild();
    let name = document.getElementById("input").value;
    document.getElementById("input").value = "";
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

let cntOfAddedChildren = 0;
let summary_power = document.querySelector("#summary-power");

function killChild(){
    if (summary_power !== null) {
        summary_power.style.display = "none";
    }
}

function countByPower(arrayOfObjects){
    let cnt =  arrayOfObjects.reduce((result, element) => {
        return result + element.power;
    }, 0);
    if (summary_power.style.display === "none") {
        summary_power.style.display = "block";
        if (cntOfAddedChildren === 0) {
            summary_power.insertAdjacentHTML("afterbegin", `
            <div><h4> Summary power: ${cnt} </h4></div>`);
            ++ cntOfAddedChildren;
        }
    }else{
        console.log("Killing a child");
        killChild();
    }
}

function displayContent(arrayOfObjects){
    if (arrayOfObjects.length === 0){
        let div = document.createElement("div");
        div.insertAdjacentHTML("afterbegin", `
            <div><h4> No data :( </h4></div>`);
        div.style.margin = "auto";
        div.style.width = "max-content";
        screen.appendChild(div);
        return;
    }
    for (let element of arrayOfObjects){
        let div = document.createElement("div");
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
        screen.appendChild(div);
    }
}

function clearScreen(){
    cntOfAddedChildren = 0;
    while(screen.firstChild){
        screen.removeChild(screen.lastChild);
    }
    screen.insertAdjacentHTML("afterbegin", `<section style="display: none; width: max-content; margin: auto;" id = "summary-power">

        </section>`);
    summary_power = document.querySelector("#summary-power");
}

function reset(){
    currentArray = [...arrayOfObjects];
    clearScreen();
    displayContent(currentArray);
}

class Lighter{
    constructor(type, power, numOfLamps, creatorName){
        this.type = type;
        this.power = power;
        this.numOfLamps = numOfLamps;
        this.creatorName = creatorName;
    }

    toString(){
        return "type: " + this.type +
            " <p> power: " + this.power + " <p> number of Lamps: " +
            this.numOfLamps + " <p> creator: " + this.creatorName + "}";
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

let currentArray = [...arrayOfObjects];

let screen = document.querySelector("#screen");

displayContent(arrayOfObjects);