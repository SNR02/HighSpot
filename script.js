//Lists
const leftList = document.querySelector(".left-list");
const rightList = document.querySelector(".right-list");

//buttons
const buttonsDiv = document.querySelector(".buttons");
const allRightButton = document.getElementById("allRight");
const allLeftButton = document.getElementById("allLeft");
const oneRightButton = document.getElementById("oneRight");
const oneLeftButton = document.getElementById("oneLeft");


const leftElements = document.querySelectorAll(".left-list li");
const rightElements = document.querySelectorAll(".right-list li");

if(rightElements.length==0){
    allLeftButton.disabled=true;
}

allRightButton.addEventListener("click",function(){
    const shiftItems = document.querySelectorAll(".left-list li");
    console.log(shiftItems);
    shiftItems.forEach(item =>{
        rightList.append(item);
    })

    leftList.innerHTML="";

});

console.log(leftList);
console.log(rightList);

allLeftButton.addEventListener("click",function(){
    const shiftItems = document.querySelectorAll(".right-list li");
    console.log(shiftItems);
    shiftItems.forEach(item =>{
        leftList.append(item);
    })
    console.log(leftList);
    rightList.innerHTML="";

});

oneRightButton.addEventListener("click",function(){

    const checks = document.querySelectorAll(".left-list input");
    const shiftItem = [];
    checks.forEach(element =>{
        if(element.checked===true){
            shiftItem.push(element.closest("li"));
        }
    })
    shiftItem.forEach(item =>{
        rightList.append(item);
    })
});

oneLeftButton.addEventListener("click",function(){
    const checks = document.querySelectorAll(".right-list input");
    const shiftItem = [];
    checks.forEach(element =>{
        if(element.checked===true){
            shiftItem.push(element.closest("li"));
        }
    })
    shiftItem.forEach(item =>{
        leftList.append(item);
    })

});

leftList.addEventListener("click",function(e){
    if(e.target.tagName === "INPUT"){
        oneRightButton.disabled=false;
    }
})


rightList.addEventListener("click",function(e){
    if(e.target.tagName === "INPUT"){
        oneLeftButton.disabled=false;
    }
})