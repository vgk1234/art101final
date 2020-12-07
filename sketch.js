let friendA = 0;
let friendB = 0;
let friendC = 0;

document.getElementById("submit-btn").addEventListener("click", results);

function results() {    
    if (friendA > friendB && friendA > friendC) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendA-Sam.png" width="300" height ="300"> <br> <b>You would connect well with Sam!</b> <br> <p>This person often likes to simply talk to people in order to connect with them and is willing to engage in any way that involves excitement and energy!</p>'
    } else if (friendB > friendA && friendB > friendC) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendB-Jordan.png" width="300" height ="300"> <br> <b>You would connect well with Jordan!</b> <br> <p> This person is very lowkey and chill; they really are invested in tech / gaming / geek culture and most often bond through online methods.</p>'
    } else if (friendC > friendA && friendC > friendB) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendC-Taylor.png" width="300" height ="300"> <br> <b>You would connect well with Taylor!</b> <br> <p>This person loves forming close friendships and is ready to help anyone needed; they occasionally act as a sibling figure to their friends.</p>'
    } else if (friendA == friendB && friendA > friendC) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendA-Sam.png" width="300" height ="300"> <br> <b>You would connect well with Sam!</b> <br> <p>This person often likes to simply talk to people in order to connect with them and is willing to engage in any way that involves excitement and energy!</p>'
    } else if (friendB == friendC && friendB > friendA) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendB-Jordan.png" width="300" height ="300"> <br> <b>You would connect well with Jordan!</b> <br> <p> This person is very lowkey and chill; they really are invested in tech / gaming / geek culture and most often bond through online methods.</p>'
    } else if (friendC == friendA && friendC > friendB) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendC-Taylor.png" width="300" height ="300"> <br> <b>You would connect well with Taylor!</b> <br> <p>This person loves forming close friendships and is ready to help anyone needed; they occasionally act as a sibling figure to their friends.</p>'
    } else if (friendA == friendC && friendA > friendB) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendA-Sam.png" width="300" height ="300"> <br> <b>You would connect well with Sam!</b> <br> <p>This person often likes to simply talk to people in order to connect with them and is willing to engage in any way that involves excitement and energy!</p>' 
    } else if (friendB == friendC && friendB > friendC) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendB-Jordan.png" width="300" height ="300"> <br> <b>You would connect well with Jordan!</b> <br> <p> This person is very lowkey and chill; they really are invested in tech / gaming / geek culture and most often bond through online methods.</p>'
    } else if (friendC == friendA && friendC > friendB) {
        document.getElementById("results").innerHTML =
        '<img src = "Assets/FriendC-Taylor.png" width="300" height ="300"> <br> <b>You would connect well with Taylor!</b> <br> <p>This person loves forming close friendships and is ready to help anyone needed; they occasionally act as a sibling figure to their friends.</p>'        
    }
}
