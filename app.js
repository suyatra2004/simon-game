let gamesequence=[];//empty array creation
let usersequence=[];
let s=[];
let btns=["red","yellow","green","blue"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash");
    }, 250)// here "flash" class gets removed from the button class list at an interval of  0.25s(250 ms)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    }, 250)// here "flash" class gets removed from the button class list at an interval of  0.25s(250 ms)
}

function levelUp(){
 usersequence=[];
level++;
h2.innerText=`level=${level}`;// on clicking any key on the keyboard, level gets updated and it gets displayed on the screen
//random button choose
let randomIdx=Math.floor(Math.random()*3);
let randomColor=btns[randomIdx];
let ranbtn=document.querySelector(`.${randomColor}`);
console.log(ranbtn);
gamesequence.push(randomColor);
console.log(gamesequence);
gameFlash(ranbtn);
}

function checkans(idx){
    //console.log("curr level=", level);
    
    if(usersequence[idx]===gamesequence[idx]){
        if(level>3){
            h2.innerText=`correct guess! click on next button `;
        }
        
        if(usersequence.length==gamesequence.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start again`;
        let bdy=document.querySelector("body");
        bdy.classList.add("bodyyy");
         setTimeout(function(){
         bdy.classList.remove("bodyyy");
         },150);
        reset();
    }
}

function btnpress(){
   
    let btn=this;//
    userflash(btn);
    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    usersequence.push(usercolor);
    checkans(usersequence.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(bt of allbtn){
    bt.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gamesequence=[];
    usersequence=[];
    level=0;
}