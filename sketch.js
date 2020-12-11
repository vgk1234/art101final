let friendA = 0;
let friendB = 0;
let friendC = 0;

document.getElementById("submit-btn").addEventListener("click", results);

function results() { 

    document.getElementById("prompt1").style.display = "none";
    document.getElementById("prompt2").style.display = "none";
    document.getElementById("prompt3").style.display = "none";
    document.getElementById("prompt4").style.display = "none";
    document.getElementById("prompt5").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";

    if (friendA > friendB && friendA > friendC) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendA-Sam.png" width="300" height ="300"> <br> <b>You would connect well with Sam!</b> <br> <p>This person often likes to simply talk to people in order to connect with them and is willing to engage in any way that involves excitement and energy! They’ll send you a zoom link to meet you at 7 PM on Saturday.</p>'
    } else if (friendB > friendA && friendB > friendC) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendB-Jordan.png" width="300" height ="300"> <br> <b>You would connect well with Jordan!</b> <br> <p> This person is very lowkey and chill; they are really invested in tech / gaming / geek culture and most often bond through online methods. They will be sending a direct message this evening. Check your social media if you can!</p>'
    } else if (friendC > friendA && friendC > friendB) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendC-Taylor.png" width="300" height ="300"> <br> <b>You would connect well with Taylor!</b> <br> <p>This person loves forming close friendships and is ready to help anyone needed; they occasionally act as a sibling figure to their friends. They’ll give you a phone call at 5 PM.</p>'
    } else if (friendA == friendB && friendA > friendC) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendA-Sam.png" width="300" height ="300"> <br> <b>You would connect well with Sam!</b> <br> <p>This person often likes to simply talk to people in order to connect with them and is willing to engage in any way that involves excitement and energy! They’ll send you a zoom link to meet you at 7 PM on Saturday.</p>'
    } else if (friendB == friendC && friendB > friendA) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendB-Jordan.png" width="300" height ="300"> <br> <b>You would connect well with Jordan!</b> <br> <p> This person is very lowkey and chill; they are really invested in tech / gaming / geek culture and most often bond through online methods. They will be sending a direct message this evening. Check your social media if you can!</p>'
    } else if (friendC == friendA && friendC > friendB) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendC-Taylor.png" width="300" height ="300"> <br> <b>You would connect well with Taylor!</b> <br> <p>This person loves forming close friendships and is ready to help anyone needed; they occasionally act as a sibling figure to their friends. They’ll give you a phone call at 5 PM.</p>'
    } else if (friendA == friendC && friendA > friendB) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendA-Sam.png" width="300" height ="300"> <br> <b>You would connect well with Sam!</b> <br> <p>This person often likes to simply talk to people in order to connect with them and is willing to engage in any way that involves excitement and energy! They’ll send you a zoom link to meet you at 7 PM on Saturday.</p>' 
    } else if (friendB == friendC && friendB > friendC) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendB-Jordan.png" width="300" height ="300"> <br> <b>You would connect well with Jordan!</b> <br> <p> This person is very lowkey and chill; they are really invested in tech / gaming / geek culture and most often bond through online methods. They will be sending a direct message this evening. Check your social media if you can!</p>'
    } else if (friendC == friendA && friendC > friendB) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendC-Taylor.png" width="300" height ="300"> <br> <b>You would connect well with Taylor!</b> <br> <p>This person loves forming close friendships and is ready to help anyone needed; they occasionally act as a sibling figure to their friends. They’ll give you a phone call at 5 PM.</p>'        
    }

}
