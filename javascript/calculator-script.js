var current="0";
var arr=[];
var memory="";

var btn = document.querySelector('.numbers');
document.body.addEventListener('keypress', doSomething1);
btn.addEventListener('click', doSomething);


function doSomething(e) {
  if (e.target !== e.currentTarget) {
    var num = e.target.value;
    if(num == '='){
      calculate();
    }
    else if(num == 'C'){
      clearScreen("");
    }
    else if(0<=Number(num) && 9>=Number(num)){
      add(num);
    }
    else{
      addArr(num);
    }
  }
}

function doSomething1(event){
    var x = event.key;
    if(x == 'Enter'){
        calculate();
      }
      else if(x == 'C'){
        clearScreen("");
      }
      else if(0<=x && 9>=x){
        add(x);
      }
      else{
        addArr(x);
      }
}

//clear screen
function clearScreen(elem){
  //console.log("clear");
  if(elem == 0){
    document.querySelector(".display").innerHTML=elem;
    elem = "";
  }else{
    document.querySelector(".display").innerHTML=elem;
  }
  current=elem;
  memory = elem;
  arr = [];
}

//add number into string
function add(elem){
  //console.log("add");
  if(eval(current)==0){
    current = elem;
  }
  else{
    current = current + elem;
  }
  memory = memory + elem;
  document.querySelector(".display").innerHTML=memory;
}

//for +,-,*,/ operations
function addArr(elem){
  //console.log("addArr");
  if((arr[arr.length-1]>=0 && arr[arr.length-1]<=9) || arr.length == 0){
    arr.push(current);
    arr.push(elem);
    current="0";
    memory=arr.reduce((t,x)=>{return t+x},"");
    document.querySelector(".display").innerHTML=memory;
  }
}

//calculate the value
function calculate(){
  //console.log("calculate");
  arr.push(current);
  arr=arr.reduce((t,x)=>{return t+x},"");
  current=eval(arr);
  document.querySelector(".display").innerHTML=eval(arr);
  clearScreen(current);
}
