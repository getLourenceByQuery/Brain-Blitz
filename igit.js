
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let randomArr = [];

    function GetRandom(arr) {
        const randElem = Math.floor(Math.random() * arr.length);
        return arr[randElem];
    }

    function ShufRandom(arr) {
        for (let i = arr.length - 1; i >  0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function displayRand(arrNum,arrLet) {
        let sequence = [];

        for ( let i = 0; i < arrNum; i++){
            sequence.push(GetRandom(numbers));
        }

        for ( let i = 0; i < arrLet; i++){
            sequence.push(GetRandom(letters));
        }

        randomArr = ShufRandom(sequence);

    }

    document.addEventListener('DOMContentLoaded', function(){
        cat.pause();
        winning.pause();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

//-------------------------------------------------------------------------------------------------------
      const typeTimer = document.getElementById('typeTime');
    
    
    function Timertype(){

      const duration = 10000;
      const end = new Date().getTime() + duration;


      const timer = setInterval(function() {
      const now = new Date().getTime();
      const remaining = end - now;

      const sec = Math.floor((remaining + 999)/1000);

      typeTimer.innerHTML = sec;

      if (remaining <= 0) {
          typeTimer.innerHTML = "0";
          clearInterval(timer);
          typeTimer.style.display = 'none';
          youLose();
        } else if (answer.value.toUpperCase() == randomArr.join('')){
          typeTimer.innerHTML = "0";
          clearInterval(timer);
          typeTimer.style.display = 'none';
          submit.click();
        }

        }, 100);
    }

//-------------------------------------------------------------------------------------------------------

function disableTab() {
  const focusableSelector = `
    a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])
  `;

  document.querySelectorAll(focusableSelector).forEach(element => {
    element.tabIndex = -1;
  });
}

window.onload = disableTab;


//---------------------------------------------------------------------

function ready(){
  const duration = 3000;
  const end = new Date().getTime() + duration;

  const ready = document.getElementById('ready');

  const timer = setInterval(function() {
  const now = new Date().getTime();
  const remaining = end - now;

  const sec = Math.floor((remaining + 999)/1000);

  ready.innerHTML = sec;

  if (remaining <= 0) {
      ready.innerHTML = "Go!";
        setTimeout(() => {
        clearInterval(timer);
        ready.style.display = 'none';
  },900);
    }
  
  }, 100);

}



//---------------------------------------------------------------------

function viewTime(timeview){

  setTimeout(() => {

  const duration = timeview;
  const end = new Date().getTime() + duration;

  const vtt = document.getElementById('vtt');

  const timer = setInterval(function() {
  const now = new Date().getTime();
  const remaining = end - now;

  const sec = Math.floor((remaining + 999)/1000);

  vtt.innerHTML = 'Viewing time: ' + sec;

  if (remaining <= 0) {
      vtt.innerHTML = "0";
      clearInterval(timer);
      vtt.style.display = 'none';
    }
  
  }, 100);

  },4000);

}

//---------------------------------------------------------------------
  const winning = document.getElementById('winning');

  function youWin(){
    const win = document.getElementById('win');
    const reward = document.getElementById('reward');
    const txt = document.getElementById('wintxt');

    win.style.display = 'flex';
    win.style.zIndex = "1000";

     setTimeout(() =>{
      txt.style.display = 'none';
    },2500);

    setTimeout(() =>{
      reward.style.top = '50%';
      reward.style.visibility = 'visible';
      reward.style.transform = 'translate(-50%, -50%) scale(1)';
      winning.play();
      displayReward();
      
      setTimeout(() =>{
        reward.style.animation = 'pulse 5.5s ease-in-out infinite'
      },5000);
      

    },2000);

   

    
  }

  const rewardloss = document.getElementById('rewardloss');
  const cat = document.getElementById('cat');

 function youLose(){
  const lose = document.getElementById('lose');
    const txt = document.getElementById('losstxt');



  lose.style.display = 'flex';
  lose.style.zIndex = "1000";


  setTimeout(() =>{
      txt.style.display = 'none';
    },2500);

  
  setTimeout(() =>{
      rewardloss.style.top = '50%';
      rewardloss.style.visibility = 'visible';
      rewardloss.style.transform = 'translate(-50%, -50%) scale(1)';
      cat.play();
    },2000);

 }


//---------------------------------------------------------------------
const rewardArray = [
    'reward/Dragon\'s Hoard.png',
    'reward/Hydra\'s Wrath.png',
    'reward/Legendary Lion.png',
    'reward/Minotaur\'s Fury.png',
    'reward/Mythical Griffin.png',
    'reward/Phoenix Ascension.png'
];

const randomReward = document.getElementById('randomReward');
const A = document.getElementById('A');

function displayReward(){
  const randChoice = Math.floor(Math.random() * rewardArray.length);
  const rewardSCR =   rewardArray[randChoice];

  randomReward.src = rewardSCR;
  A.href = rewardSCR;

  A.addEventListener('click', function(){
      winning.pause();
    setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
    },1000);
  });
}

//---------------------------------------------------------------------
    let answer = document.getElementById('answer');
    const submit = document.getElementById('submitBTN');


function displayDiff(){

    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');
    const strt = document.getElementById('start');
    const gameField = document.getElementById('Game');
    let fieldElements = document.getElementById('Field');
    

    function timerSeq(viewingTime) {
     
    setTimeout(() => {
        fieldElements.classList.add('visible');

        setTimeout(() => {
            fieldElements.classList.remove('visible');

            setTimeout(() => {
                fieldElements.classList.add('hidden');
            }, 0);
            
        }, viewingTime);
        
    }, 4000);
}

    function delayInput(waitTime){
       setTimeout(() =>{
        submit.classList.add('visible');
      },waitTime);

      setTimeout(() => {
          answer.removeAttribute('disabled');
          answer.removeAttribute('placeholder')
          answer.focus();
          Timertype();
        }, waitTime);

    }


    function scrolled() {
      if (gameField) {
        gameField.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    function checker() {
        submit.addEventListener('click', function(){
            if(answer.value.toUpperCase() == randomArr.join('')){ 
              youWin();
              } 
            else {
              youLose();
            }
        });
    }


    btn1.addEventListener('click', function(){
        strt.textContent = 'Easy Start ->';
        strt.addEventListener('click', function(){
                timerSeq(6000);
                viewTime(6000);
                ready();
                scrolled();
                displayRand(2,4);
                fieldElements.textContent = randomArr.join('');
                answer.maxLength = '6';
                delayInput(10000);
                checker();
        });
        
    });



    btn2.addEventListener('click', function(){
        strt.textContent ='Medium Start ->';
        strt.addEventListener('click', function(){
                timerSeq(5000);
                viewTime(5000);
                ready();
                scrolled();
                displayRand(3,5);
                fieldElements.textContent = randomArr.join('');
                answer.maxLength = '8';
                delayInput(9500);
                checker();
        });
    });


    btn3.addEventListener('click', function(){
        strt.textContent = 'Hard Start ->';
        strt.addEventListener('click', function(){
                timerSeq(4000);
                viewTime(4000);
                ready();
                scrolled();
                displayRand(4,6);
                fieldElements.textContent = randomArr.join('');
                answer.maxLength = '10';
                delayInput(8000);
                checker();
        });
    });
    
    
}



//---------------------------------------------------------------------------------------------------

displayReward();

displayDiff();

