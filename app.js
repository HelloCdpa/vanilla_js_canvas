const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode")

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

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
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
    
}

// 채우기를 눌렀을 때 버튼의 변화
function handleModeClick(){
    if(filling===true){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "Paint";
    }
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
}


// 컬러선택 Array를 대표하는 이름 : anyname
Array.from(colors).forEach(anyname =>anyname.addEventListener("click", handleColorClick));

// 브러쉬 사이즈 조절
if(range){
    range.addEventListener("input", handleRangeChange)
}

if(mode){
    mode.addEventListener("click",handleModeClick)
}