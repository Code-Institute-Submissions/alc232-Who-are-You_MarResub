var questions = [{
    // goku
    "tint": "orange",
    "power": "strength",
    "cape": "no",
    "weather": "sunny",
    "money": "yes",
    "image": "https://i.pinimg.com/originals/ac/a4/6d/aca46d09a1badb457d44d039f2c4754d.jpg",
    "counter": 0
},
// Superman
{
    "tint": "red",
    "power": "Man if Steel",
    "cape": "yes",
    "weather": "sunny",
    "money": "no",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercave.com%2Fsuperman-cartoon-wallpapers&psig=AOvVaw0qmKy5nedU3qazSzrsBc1d&ust=1609282431766000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKD78bLi8e0CFQAAAAAdAAAAABAD",
    "counter": 0
},
// batman
{
    "tint": "black",
    "power": "money",
    "cape": "yes",
    "weather": "rain",
    "money": "yes",
    "image": "https://img.cinemablend.com/filter:scale/quill/6/b/0/8/9/2/6b08928dc1fb6884e189c7434125ba7f344407b7.jpg?mw=600",
    "counter": 0
},
// green lantern
{
    "tint": "green",
    "power": "ring",
    "cape": "no",
    "weather": "wind",
    "money": "yes",
    "image": "https://www.goodcomicstoread.com/wp-content/uploads/2020/01/green-lantern-678x381.jpg",
    "counter": 0
},
// thor
{
    "tint": "silver",
    "power": "hammer",
    "cape": "yes",
    "weather": "wind",
    "money": "yes",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomicvine.gamespot.com%2Fthor%2F4005-2268%2Fforums%2Fwould-you-watch-a-mighty-thor-cartoon-376272%2F&psig=AOvVaw3vqGo_406mWrCRBGCYt3Hn&ust=1609282571111000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjd9vPi8e0CFQAAAAAdAAAAABAD",
    "counter": 0
},
// captain america 
{
    "tint": "blue",
    "power": "shield",
    "cape": "no",
    "weather": "rain",
    "money": "yes",
    "image": "https://www.small-screen.co.uk/wp-content/uploads/2019/11/captain-america-marvel-comics-1050x450.jpg",
    "counter": 0
},
// black panther
{
    "tint": "grey",
    "power": "claws",
    "cape": "no",
    "weather": "sunny",
    "money": "yes",
    "image": "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
    "counter": 0
},
// wolverine
{
    "tint": "yellow",
    "power": "blades",
    "cape": "no",
    "weather": "Thunder",
    "money": "yes",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfPTaPq2n5nzQC-3UpQFBY8tYYywAAuZykg&usqp=CAU",
    "counter": 0
}
];
// button for submitting data
let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let power = document.getElementById("power").value;
    let cape = document.getElementById("cape").value;
    let weather = document.getElementById("weather").value;
    let money = document.getElementById("money").value;
    let tint = document.getElementById("tint").value;

    const resultData = showImage(power, cape, weather, money, tint);

    let output = document.getElementById("output");

    console.log(resultData);

    // display on page
    output.innerHTML=`<h2>${name} your superhero reccomedation is ${resultData}</h2>`;

    output.innerHTML += `<img style="width : 400px" src="${resultData.image}">`;

    // function to show images

    function showImage(p, c, w, m, t) {
         var result = [];
//    counterPower = 0;
//          counterCape = 0;
//          counterWeather = 0;
//          counterMoney = 0;
//          counterTint = 0;
        for (let i = 0; questions.length; i++) {
            if (questions[i]["power"] === p) {
                questions[i]["power"]++;
                result.push(questions[i]);
            }
            for (let i = 0; questions.length; i++) {
                if (questions[i]["cape"] === c) {
                    questions[i]["cape"]++;
                    result.push(questions[i]);
                }
                for (let i = 0; questions.length; i++) {
                    if (questions[i]["weather"] === w) {
                        questions[i]["weather"]++;
                        result.push(questions[i]);
                    }
                    for (let i = 0; questions.length; i++) {
                        if (questions[i]["money"] === m) {
                            questions[i]["money"]++;
                            result.push(questions[i]);
                        }
                        for (let i = 0; questions.length; i++) {
                        if (questions[i]["color"] === t) {
                            questions[i]["color"]++;
                            result.push(questions[i]);
                        }
                    }
                        return getHighestCounter(resultData);

                    }


                    // Gets object with highest counter
                    function getHighestCounter(data) {
                        return data.reduce(
                            (max, data) => (data.counter > max ? data.counter : max),
                            data[0]
                        );
                    }
                }
            }
        }
    }
});