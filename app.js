const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");



let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    // 캔버스 안의 좌표값
  const x= event.offsetX
  const y= event.offsetY
  
} 

function onMouseDown(event){
    painting = true;
}
function onMouseUp(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}