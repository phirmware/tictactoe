var player1 = document.getElementsByTagName("button")[0];
var player2 = document.getElementsByTagName("button")[1];
var box = document.querySelectorAll("div");
var container = [
    "yellow",
    "red"
]


var box1 = document.getElementsByClassName("first");

//box1
player1.addEventListener("click",function(){
    box[1].addEventListener("click" , function(){
        box[1].style.background = container[0];
    })
})

player2.addEventListener("click" , function(){
    box[1].addEventListener("click", function(){
        box[1].style.background = container[1];
    })
})

//box2
player1.addEventListener("click",function(){
    box[2].addEventListener("click" , function(){
        box[2].style.background = container[0];
    })
})

player2.addEventListener("click" , function(){
    box[2].addEventListener("click", function(){
        box[2].style.background = container[1];
    })
})

//box3
player1.addEventListener("click",function(){
    box[3].addEventListener("click" , function(){
        box[3].style.background = container[0];
    })
})

player2.addEventListener("click" , function(){
    box[3].addEventListener("click", function(){
        box[3].style.background = container[1];
    })
})

//box4
player1.addEventListener("click",function(){
    box[4].addEventListener("click" , function(){
        box[4].style.background = container[0];
    })
})

player2.addEventListener("click" , function(){
    box[4].addEventListener("click", function(){
        box[4].style.background = container[1];
    })
})

//box5
player1.addEventListener("click",function(){
    box[5].addEventListener("click" , function(){
        box[5].style.background = container[0];
    })
})

player2.addEventListener("click" , function(){
    box[5].addEventListener("click", function(){
        box[5].style.background = container[1];
    })
})

//box6
player1.addEventListener("click",function(){
    box[6].addEventListener("click" , function(){
        box[6].style.background = container[0];
    })
})

player2.addEventListener("click" , function(){
    box[6].addEventListener("click", function(){
        box[6].style.background = container[1];
    })
})

//box7
player1.addEventListener("click",function(){
    box[7].addEventListener("click" , function(){
        box[7].style.background = container[0];
    })
})

player2.addEventListener("click" , function(){
    box[7].addEventListener("click", function(){
        box[7].style.background = container[1];
    })
})

//box8
player1.addEventListener("click",function(){
    box[8].addEventListener("click" , function(){
        box[8].style.background = container[0];
    })
})

player2.addEventListener("click" , function(){
    box[8].addEventListener("click", function(){
        box[8].style.background = container[1];
    })
})

//box9
player1.addEventListener("click",function(){
    box[9].addEventListener("click" , function(){
        box[9].style.background = container[0];
        
    })
})

player2.addEventListener("click" , function(){
    box[9].addEventListener("click", function(){
        box[9].style.background = container[1];
    })
})

//var firstPlayer = prompt("player1");
//var secondPlayer = prompt("player2");

//player1.textContent = firstPlayer;
//player2.textContent = secondPlayer;




//play against computer
function randomPicker(){
     return Math.floor(Math.random() * 7);
}

//get computer to pick random box
var computer = document.getElementsByTagName("button")[2];

computer.addEventListener("click", function(){
    var picked = box[randomPicker()];
    if(picked.style.background == "yellow"){
        picked.style.background = "yellow";
    } else{
        picked.style.background = "green"
    }
    

})
