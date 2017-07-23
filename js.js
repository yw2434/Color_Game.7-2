/**
 * Created by yawang on 2017/7/23.
 */
var colors=randomColor();
var squares=document.querySelectorAll(".square");
var hardBtn=document.querySelector("#hard");
var colorDisplay=document.querySelector("#colorShow");
var pickedColor=pickColor(colors);
var reStart=document.querySelector("#reset");


hardBtn.addEventListener("click",function () {
    for (var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].addEventListener("click",function () {
            if(this.style.backgroundColor===pickedColor){
                alert("right");
                changeColor(squares);
            }else{
                alert("wrong");
                this.style.backgroundColor="#252525";
            }
        })
    }
})

function pickColor(arr) {
    var num=Math.floor(Math.random()* arr.length+1);
    colorDisplay.textContent=arr[num];
    return arr[num];
}




function changeColor(arr) {
    for(var i=0; i<arr.length; i++){
        arr[i].style.backgroundColor=pickedColor;
    }
}

function randomColor() {
    var color=[];
    for(var i=0; i<6; i++){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        color[i]="rgb("+r+", "+g+", "+b+")";
    }
    return color;
}
randomColor();

reStart.addEventListener("click",function () {
    randomColor();
    for (var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor=colors[i];}
    pickColor(colors);
})






