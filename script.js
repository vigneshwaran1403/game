let game=document.getElementById("game")
let walls=document.getElementById("walls")
let player=document.getElementById("box")
let jumping=document.getElementById("btn")
jumping.addEventListener("click",jump)
let score=0;
let a=1;
result.style.display="none"

  function jump()
{
  
  a=0;
  
  let box=parseInt(window.getComputedStyle(player).getPropertyValue('top')) 
  let jumpValue =parseInt(window.getComputedStyle(walls).getPropertyValue("left"))
    
    if(box==0 && jumpValue>70 && 0<jumpValue)
  
    {
      player.style.bottom=100+"px";
      score++;
      if(score>5 && score<10)
      {
      walls.style.animationDuration=1+"s";
      }
      else if(score>10)
      {
      let b=walls.style.animationDuration=0.5+"s";
      console.log(b)
      }
      setTimeout(function(){
        player.style.bottom=0+"px";
    },500)
    
    }
    else{
      game.style.display="none"
      btn.style.display="none"
      result.style.display="block"
      res.innerHTML=`YOUR SCORE IS :${score}`
    }
}

setTimeout(function(){
if(a==1)
{
  game.style.display="none"
      btn.style.display="none"
      result.style.display="block"
      res.innerHTML=`YOUR SCORE IS :${score}`
}
else{
   a=1;
}
},2000)


