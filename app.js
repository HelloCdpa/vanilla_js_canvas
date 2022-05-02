const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

ctx.strokeStyle = "##2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    // 캔버스 안의 좌표값
  const x= event.offsetX
  const y= event.offsetY
  if(!painting){
      //클릭하지 않았을 때 
      ctx.beginPath();
      ctx.moveTo(x,y);
  }else{
      //마우스가 움직이는 동안 계속 실행됨
      ctx.lineTo(x,y);
      ctx.stroke();
  }
  
} 

function onMouseUp(event){
    stopPainting();
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}


// 컬러선택 Array를 대표하는 이름 : anyname
Array.from(colors).forEach(anyname =>anyname.addEventListener("click", handleColorClick));