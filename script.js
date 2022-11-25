var theNFLstat = [{
        City: string,
        Name: string,
        Date:string,
        AwayTeam: string,
        Hometeam: string,
        Homepoint: string,
        AwayPoint: string,
    }, ]
    [{
            City: "Arizona",
            Name: "Arizona Cardinal",
            Date: "March 7",
            AwayTeam: "Falcon",
            Hometeam: "Cardinals",
            Homepoint: "78",
            AwayPoint: "45"
        },
        {
            City: "Atlanta",
            Name: "Falcons",
            Date: "March 7",
            AwayTeam: "Minnesota Vikings",
            Hometeam: "Falcons",
            Homepoint: "23",
            AwayPoint: "8"
        },
        {
            City: "N/S Carolinas",
            Name: "Carolina Panther",
            Date: "March 7",
            AwayTeam: "Minnesota Vikings",
            Hometeam: "Panther",
            Homepoint: "45",
            AwayPoint: "8"
        },
        {
            City: "Chicago",
            Name: "Chicago Bears",
            Date: "March 7",
            AwayTeam: "Dallas Cowboys",
            Hometeam: "Chicago Bears",
            Homepoint: "78",
            AwayPoint: "8"
        },
        {
            City: "Dallas",
            Name: "Dallas Cowboys",
            Date: "March 7",
            AwayTeam: "Chicago Bears",
            Hometeam: "Dallas Cowboys",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: "Detroits",
            Name: "Detroit Lions",
            Date: "March 7",
            AwayTeam: "Chicago Bears",
            Hometeam: "Detroit Lions",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: "Jacksonville",
            Name: "Jacksonville Jaguars",
            Date: "March 7",
            AwayTeam: "Chicago Bears",
            Hometeam: "Jacksonville Jaguars",
            Homepoint: "90",
            AwayPoint: "87"
        },

        {
            City: "GreenBay",
            Name: "Green Bay Packers",
            Date: "March 7",
            AwayTeam: "Detroit Lions",
            Hometeam: "Green Bay Packers",
            Homepoint: "90",
            AwayPoint: "87"
        },

        {
            City: " Los Angeles",
            Name: " Los Angeles Rams",
            Date: "March 7",
            AwayTeam: "Detroit Lions",
            Hometeam: " Los Angeles Rams",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: " Los Angeles",
            Name: " Los Angeles Rams",
            Date: "March 7",
            AwayTeam: "Detroit Lions",
            Hometeam: " Los Angeles Rams",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: "Minnesota",
            Name: "Minnesota Vikings",
            Date: "March 7",
            AwayTeam: "Detroit Lions",
            Hometeam: "Minnesota",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: "New Orleans",
            Name: "New Orleans Saints",
            Date: "March 7",
            AwayTeam: "Detroit Lions",
            Hometeam: "New Orleans Saints",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: "New York",
            Name: "New York Giants",
            Date: "March 7",
            AwayTeam: "Detroit Lions",
            Hometeam: "New York Giants",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: "Denver",
            Name: "Denver Broncos",
            Date: "March 7",
            AwayTeam: "Detroit Lions",
            Hometeam: "Denver Broncos",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: "Houston ",
            Name: "Houston Texan",
            Date: "March 7",
            AwayTeam: "Detroit Lions",
            Hometeam: "Houston Texan",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: "Miami ",
            Name: " Miami Dolphins ",
            Date: "March 7",
            AwayTeam: "Detroit Lions",
            Hometeam: " Miami Dolphins ",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: "Tennessee",
            Name: " Tennessee Titans",
            Date: "March 7",
            AwayTeam: "Detroit Lions",
            Hometeam: " Tennessee Titans",
            Homepoint: "90",
            AwayPoint: "87"
        },
        {
            City: "Buffalo",
            Name: " Buffalo Bills",
            Date: "March 7",
            AwayTeam: "Miami Dolphins",
            Hometeam: "Buffalo Bills",
            Homepoint: "90",
            AwayPoint: "87"
        }
    ]
document.getElementById("gameButton").addEventListener("click", myFunction);
document.getElementByClassName("addBtn").addEventListener("click", myFunction);
document.getElementsByClassName("updateBtn").addEventListener("click", myFunction);

function AddGame(); {
    div.getElementsByClassName("flex-container").addEventListener("click", AddGameFunction);
}
    function Update();{
    div.getElementsByClassName("flex-container").addEventListener("click", UpdateFunction);
}
var updateNFL = [{
    tempwins: any,
    templose: any,
    date: any,
    hometeam: any,
    awayteam: any,
    awaypoint: any,
    homepoint: any,
}, ]
var updateWinsLoses = {
    tempwins: number,
    templose: number,
}
function Update() {
    let theflex = ""
    var i
    for (i = 0; theflex.length; i++)
        if (i > 0);
    theflex = "<option>";
}
document.getElementByClassName("updateBtn").addEventListener("click", NFLFunction);

function AddGame() {
    let theflex = ""
    var i
    for (i = 0; theflex.length; i++)
        if (i > 0);
    theflex = "<option>";
}
document.getElementById("addBtn").addEventListener("click", NFLFunction); {
    var tempwins = document.createElement("wins");
    var temploses = document.createElement("loses");
}
var tempdate = document.querySelector("date");
var hometeam = document.querySelector("Hometeam");
var awayteam = document.querySelector("awayteam");
var homepoint = document.querySelector("homepoint");
var awaypoint = document.querySelector(".awaypoint");

var NFL = document.createElement("game").innerHTML = [{
    thisDate: tempdate,
    AwayTeam: awayteam,
    Hometeam: hometeam,
    Homepoint: homepoint,
    AwayPoint: awaypoint
}]
let el;
let userInput;
let input = document.getElementById("date");
let id = 0;
let nums = [];

function AddGame() {
    id++;
    el = document.createElement("li");
    el.style.listStyle = "none";
    el.id = id;
    list.appendChild(el);
    el.innerHTML = input.value;
    nums.push(id);
    console.log(nums);
    console.log(el);
    input.value = "";
    input.focus();
}
document.getElementById("addBtn")

function AddGame() {
    id++;
    el = document.createElement("li");
    el.style.listStyle = "none";
    el.id = id;
    list.append(el);
    el.innerHTML = input.value;

    nums.push(id);
    console.log(nums);
    console.log(el);
    input.value = "";
    input.focus();
}

function Update() {
    id++;
    el = document.createElement("li");
    el.style.listStyle = "none";
    el.id = id;
    list.appendChild(el);
    el.innerHTML = input.value;
    nums.push(id);
    console.log(nums);
    console.log(el);
    input.value = "";
    input.focus();
}
document.getElementById("updateBtn");
let mylist = document.getElementById("list");
let theid = 0;
let thenums = [];

function Update() {
    id++;
    el = document.createElement("li");
    el.style.listStyle = "none";
    el.id = id;
    list.append(el);
    el.innerHTML = input.value;

    nums.push(id);
    console.log(nums);
    console.log(el);
    input.value = "";
    input.focus();
}

//try another way to add starting with an existing li
//then create other li dynamically
// function addEl() {
//   let dest = document.querySelector("li");
// }

function Update() {
    el.update();
    console.log("Wins:" + el + " update")
       console.log("Loses:" + el + " update")    
    input.focus();
}
// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");

var i;
for (i = 0; i < flex - container.length; i++); {}
flex - container[i].onclick;

function AddGame(); {

    var div = this.parentElement;

    div.style.display = "flex";
    div.style.flex - direction;
    "column";
}


// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

    if (ev.target.tagName === 'LI') {

        ev.target.classList.toggle('checked');

    }

}, false);

// Create a new list item when clicking on the "Add" button

function newElement() {}
var li = document.createElement("li");

var inputValue = document.getElementById("listBox").value;

var t = document.createTextNode(inputValue);

li.appendChild(t);

if (inputValue === '') {

} else {

    document.getElementById("listBox").appendChild(li);

}

document.getElementById("listBox").value = "";


var div = document.createElement("DIV");

var txt = document.createTextNode("\u00D7");

div.className = "flex-container";

div.appendChild(txt);

li.appendChild(div);



// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

    if (ev.target.tagName === 'LI') {

        ev.target.classList.toggle('checked');

    }

}, false);

// Create a new list item when clicking on the "Add" button

function AddGame() {}
var li = document.createElement("li");

var inputValue = document.getElementById("item").value;

var t = document.createTextNode(inputValue);

li.appendChild(t);

if (inputValue === '') {

    openurl("https://raw.githubusercontent.com/Wolfmanbunnydeer/NFLstatsteam/Wolfmanbunnydeer/array.js");

} else {

    document.getElementById("list").appendChild(li);

}

document.getElementById("listBox").value = "";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
$('#MinimumToday').attr('min', today);

var NFLteam =
    document.getElementById("hometeam");

function myFunction() {
    var x = document.getElementById("mySelect");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + x.options[i].text + "<br>";
    }

    document.getElementById("gameOutput").innerHTML = txt;
}

function myFunction() {

    // Create a p element:
    const para = document.createElement("flex");

    // Append text node to the p element:
    para.appendChild(node);

    // Append the p element to the body:
    document.getElementById("gameDIV").innerHTML(para);
}
function createNFLItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
document.getElementById("gameButton").addEventListener("click", myFunction);

function Update() {
    let theflex = ""
    var i
    for (i = 0; theflex.length; i++)
        if (i > 0);
    theflex = "<option>"
}
document.getElementById("gameButton").addEventListener("click", UpdateFunction);

function Update() {
    var theNFLstat = ""
    for (let i = 0; i < theNFLstat.length; i++) {
        for (let j = 0; j <= i; j++) {

            theNFLstat = theNFLstat + "<br>" +"<h2>" +"<div>";
        }
        document.getElementById("gameOutput").innerHTML = theNFLstat;
    }
    document.getElementByTagName("h2", "div", "flex-container", "option");
}
var stat =
    document.getElementById("gameButton").addEventListener("click", gameFunction);

function gameFunction() {
    let MyArray = document.getElementById("gameDiv").value;
    var i
}
for (i = 0; i < MyArray; i++) {
    MyArray += "&myArray=" + MyArray[i];
}
var flex = document.createElement("mySelect");

var StatinputValue = document.getElementById("mySelect").value;

var teamStat = ""
for (i = 0; i < teamStat.length; i++) {
    StatinputValue = ""
}
document.getElementById("gameDiv").value = "";

var NFL = (temploses, tempwins, date, hometeam, homepoint, awaypoint, awayteam);
forEach(element => updateNFLteam);
for (let index = 0; index < array.length; index++)
    document.getElementsByTagName = array[index];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
while (condition);
(forEachelement);
updateNFLapp.use(express.static('public')); {
    index: flex
};
var i = 0;
const element = array[index]; {}
}
//Create element const
const grid = document.getElementById('grid');
const flexbox = document.createElement('flexbox');
let theNFLstat = [];

flexBox = flexBox.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredNFL = theNFLstat.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayNFL(filteredNFL);
});

const loadNFLstat = async() => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/Wolfmanbunnydeer/NFLstatsteam/Wolfmanbunnydeer/array.js');
        theNFLstat = await res.json();
        displayNFL(theNFLstat);
    } catch (err) {
        console.error(err);
    }
};

const displayNFL = (NFL) => {
    const htmlString = NFL
        .map((character) => {
            return `
            <div class ="flex-container">
            <select id="mySelect">
                <h2>${NFL.name}</h2>
                <p>Wins: ${NFL.wins}</p>
                <p>Loses: ${NFL.loses}</p>
                <p>Date: ${NFL.Date}</p>
                <p>Hometeam: ${NFL.Hometeam}</p>
                <p>Homepoint: ${NFL.Date}</p>
                <p>Awayteam: ${NFL.Date}</p>
                <p>Awaypoint: ${NFL.Date}</p>
                <img src="${NFL.image}"></img>
            </li>
        `;
        })
        .join('');
    NFLstatList.innerHTML = htmlString;
};

loadNFLstat();
