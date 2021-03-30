let questions = [
    {
        "color": "orange",
        "character": "Goku",
        "power": "strength",
        "cape": "no",
        "weather": "sunny",
        "money": "yes",
        "image": "https://i.pinimg.com/originals/ac/a4/6d/aca46d09a1badb457d44d039f2c4754d.jpg",
        "counter": 0
    },
    {
        "color": "red",
        "character": "Superman",
        "power": "Man of Steel",
        "cape": "yes",
        "weather": "sunny",
        "money": "no",
        "image": "https://wallpaperaccess.com/full/1897373.jpg",
        "counter": 0
    },
    {
        "color": "black",
        "character": "Batman",
        "power": "money",
        "cape": "yes",
        "weather": "rain",
        "money": "yes",
        "image": "https://img.cinemablend.com/filter:scale/quill/6/b/0/8/9/2/6b08928dc1fb6884e189c7434125ba7f344407b7.jpg?mw=600",
        "counter": 0
    },
    {
        "color": "green",
        "character": "Green Lantern",
        "power": "ring",
        "cape": "no",
        "weather": "wind",
        "money": "yes",
        "image": "https://www.goodcomicstoread.com/wp-content/uploads/2020/01/green-lantern-678x381.jpg",
        "counter": 0
    },
    {
        "color": "silver",
        "character": "Thor",
        "power": "hammer",
        "cape": "yes",
        "weather": "wind",
        "money": "yes",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioaFessMeo0mcS7nwD3OrVw2ry-1iXyDuhQ&usqp=CAU",
        "counter": 0
    },
    {
        "color": "blue",
        "character": "Captain America",
        "power": "shield",
        "cape": "no",
        "weather": "rain",
        "money": "yes",
        "image": "https://www.small-screen.co.uk/wp-content/uploads/2019/11/captain-america-marvel-comics-1050x450.jpg",
        "counter": 0
    },
    {
        "color": "grey",
        "character": "Black Panther",
        "power": "claws",
        "cape": "no",
        "weather": "sunny",
        "money": "yes",
        "image": "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
        "counter": 0
    },
    {
        "color": "yellow",
        "character": "Wolverine",
        "power": "blades",
        "cape": "no",
        "weather": "Thunder",
        "money": "yes",
        "image": "https://fastly.syfy.com/sites/syfy/files/2020/02/stl149580.jpg",
        "counter": 0
    }
];

// button for submitting data
let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    // get the values from the DOM
    var name = document.getElementById("name").value;
    var power = document.getElementById("power").value;
    var cape = document.getElementById("cape").value;
    var weather = document.getElementById("weather").value;
    var money = document.getElementById("money").value;
    
    var resultData = showImage(power);
    console.log(resultData);
    var output = document.getElementById("output");
    // var imagesDisplay = document.getElementById('resultImage');
    // display on page
    for(let i = 0; i < resultData.length; i++){

        output.innerHTML += `<h2>${name} your superhero recomendation is ${resultData[i].character}</h2><img style="width : 100%" src="${resultData[i].image}">`;
        console.log(resultData[i]);
    }

// function to show images
function showImage(power, money, weather, cape) { 
    var result = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i]["power"] === power){
            questions[i]["counter"]++;
            result.push(questions[i]);
        }
        if (questions[i]["cape"] === cape) {
            questions[i]["counter"]++;
            result.push(questions[i]);
        }
        if (questions[i]["weather"] === weather) {
            questions[i]["counter"]++;
            result.push(questions[i]);
        }
        if (questions[i]["money"] === money) {
            questions[i]["counter"]++;
            result.push(questions[i]);
        }
    }
     return getHighestCounter(result);
     
}

// Gets object with highest counter
function getHighestCounter(data) {
    return(removeDuplicateObjectFromArray(data, 'character'));
}
function removeDuplicateObjectFromArray(array, key) {
  var check = new Set();
  return array.filter(obj => !check.has(obj[key]) && check.add(obj[key]));
}
});