// let hr = 0;
// let min = 0;
// let sec = 0;
// let count = 0;
// let flage=0;

// let timer = false;

// function start() {
//     timer = true;
//     if(flage==0){
//         flage--;
//         stopwatch();
//     }
// }

// function stop() {
//   timer = false;
//   flage=0;

// }

// function reset() {
//   timer = false;
//   flage=0;
//   hr = 0;
//   min = 0;
//   sec = 0;
//   count = 0;
//   document.getElementById("box1").innerHTML = "0"+hr;
//   document.getElementById("box3").innerHTML = "0"+min;
//   document.getElementById("box5").innerHTML = "0"+sec;
//   document.getElementById("box7").innerHTML = "0"+count;
// }

// function stopwatch() {
//   if (timer == true) {
//     count = count + 1;
//     if (count == 100) {
//       sec = sec + 1;
//       count = 0;
//     }
//     if (sec == 60) {
//       min = min + 1;
//       sec = 0;
//     }
//     if (min == 60) {
//       hr = hr + 1;
//       min = 0;
//       sec = 0;
//     }

//     if(sec > 9){
//         document.getElementById("box5").innerHTML = sec;
//     }else{
//         document.getElementById("box5").innerHTML = "0"+sec;
//     }

//     if(min > 9){
//         document.getElementById("box3").innerHTML = min;
//     }else{
//         document.getElementById("box3").innerHTML = "0"+min;
//     }

//     if(hr > 9){
//         document.getElementById("box1").innerHTML = hr;
//     }else{
//         document.getElementById("box1").innerHTML = "0"+hr;
//     }

//     document.getElementById("box7").innerHTML = count;

//     setTimeout("stopwatch()", 9);
//   }
// }




// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-




let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let flage = 0;
let timer = true;

function start() {
  timer = true;
  if(flage==0){
    flage--;
    main();
  }
}
function stop() {
  timer = false;
  flage=0;

}
function reset() {
  timer = false;
  flage=0;  
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("box1").innerHTML = "0"+hr;
  document.getElementById("box3").innerHTML = "0"+min;
  document.getElementById("box5").innerHTML = "0"+sec;
  document.getElementById("box7").innerHTML = "0"+count;

}

function main() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      count = 0;
      sec = sec + 1;
    }
    if (sec == 60) {
      sec = 0;
      min = min + 1;
    }
    if (min == 60) {
      min = 0;
      hr = hr + 1;
    }

    if(sec<10){
      document.getElementById("box5").innerHTML = "0"+sec;
    }
    else{
      document.getElementById("box5").innerHTML = sec;
    }
    
    if(min<10){
      document.getElementById("box3").innerHTML = "0"+min;
    }
    else{
      document.getElementById("box3").innerHTML = min;
    }
    if(hr<10){
      document.getElementById("box1").innerHTML = "0"+hr;
    }
    else{
      document.getElementById("box1").innerHTML = hr;
    }
    
    document.getElementById("box7").innerHTML = count;
    setTimeout("main()", 9);
  }
}
