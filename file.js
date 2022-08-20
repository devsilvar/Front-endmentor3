



document.querySelector(".A").onclick = function(){
    const circles = document.querySelector(".A");
    circles.style.backgroundColor="hsl(25, 97%, 53%)"; 
    circles.style.color="white";
    document.querySelector('.B').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.C').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.D').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.E').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.results').innerHTML = "You selected 1 out of 5";

}


document.querySelector(".B").onclick = function(){
    const circles = document.querySelector(".B");
    circles.style.backgroundColor="hsl(25, 97%, 53%)"; 
    circles.style.color="white";
    document.querySelector('.A').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.C').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.D').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.E').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.results').innerHTML = "You selected 2 out of 5";
}

document.querySelector(".C").onclick = function(){
    const circles = document.querySelector(".C");
    circles.style.backgroundColor="hsl(25, 97%, 53%)";
    circles.style.color="white"; 
    document.querySelector('.A').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.B').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.D').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.E').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.results').innerHTML = "You selected 3 out of 5";
}

document.querySelector(".D").onclick = function(){
    const circles = document.querySelector(".D");
    circles.style.backgroundColor="hsl(25, 97%, 53%)";
    circles.style.color="white"; 
    document.querySelector('.A').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.C').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.B').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.E').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.results').innerHTML = "You selected 4 out of 5";
}
document.querySelector(".E").onclick = function(){
    const circles = document.querySelector(".E");
    circles.style.backgroundColor="hsl(25, 97%, 53%)"; 
    circles.style.color="white"; 
    document.querySelector('.A').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.C').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.D').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.B').style.backgroundColor = "hsl(216, 12%, 23%)";
    document.querySelector('.results').innerHTML = "You selected 5 out of 5";
}

document.querySelectorAll(".circles").mouseover = function(){
    document.querySelector(".circles").style.backgroundColor = "hsl(217, 12%, 63%)"
};



document.querySelector("#btn").onclick = function(){
    document.querySelector("#btn").style.backgroundColor = "white";
    document.querySelector("#btn").style.color = "orange";
    document.querySelector("#btn").style.fontWeight = 900;

    setTimeout ((function(){  document.querySelector(".thanks-card").style.display = "block";
    document.querySelector(".card").style.display = "none";}), 200)

    

};