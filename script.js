const input= document.querySelector("input"),
  guess= document.querySelector(".guess"),
  checkbutton=document.querySelector("button"),
  chancesremaining=document.querySelector(".chances");

input.focus();

let randNum= Math.floor(Math.random()*100);
console.log(randNum)
chance = 10;

checkbutton.addEventListener("click",() =>{
  chance--;
  let inputValue=input.value;
  if(inputValue==randNum){
    [guess.textContent,input.disabled] = ["Congratulations!! Correct Guess",true];
    [checkbutton.textContent, guess.computedStyleMap.color]=["Replay", "#333"];
  }
  else if(inputValue>randNum && inputValue<100){
    [guess.textContent, chancesremaining.textContent]=["Your guess is high", chance];
    guess.computedStyleMap.color="#333";
  }
  else if(inputValue<randNum && inputValue>0){
    [guess.textContent, chancesremaining.textContent]=["Your guess is low", chance];
    guess.style.color="#333"
  }
  else{
     [guess.textContent, chancesremaining.textContent]=["The number is invalid", chance];
    guess.style.color="DE0611";
  }

  if(chance==0){
    [checkbutton.textContent, input.disabled, inputValue]=["Replay", true, ""]
    [guess.textContent, guess.style.color]=["You lost","DE0611"]
  }
  if (chance<0){
    window.location.reload();
  }
  
})