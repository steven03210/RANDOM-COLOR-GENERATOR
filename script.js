function ChangeColor(){
  document.body.style.backgroundColor=genRandomColor();
}

function genRandomColor(){
  let r=0,g=0,b=0;
  r=Math.round(Math.random()*100);
  g=Math.round(Math.random()*100);
  b=Math.round(Math.random()*100);
  console.log("rgb("+r+","+g+","+b+")")
    return "rgb("+r+","+g+","+b+")";
  
}

function GenTextColor(){
  document.body.style.textColor=genRandomColor();


  let b=0,t=0,n=0;
  b=Math.round(Math.random()*100);
  t=Math.round(Math.random()*100);
  n=Math.round(Math.random()*100);
  console.log("btn("+b+","+t+","+n+")")
    return "btn("+b+","+t+","+n+")";
  
}