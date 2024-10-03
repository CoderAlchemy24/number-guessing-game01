const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})


let maxGuesses = 0;

const randomNumber = Math.ceil(Math.random()*100);
console.log('Gondoltam egy számot! :', randomNumber);

console.log("Number Guessing Game");


function ChooseLevel(){
rl.question('Choose difficulty level (1-3) \n', (answer) => {
    const num = Number(parseInt(answer));

    if (num === 1)
    {   const level = 'Könnyű';
        maxGuesses = 10;
        console.log(`Te a ${level} szintet választottad.`);
    }
    else if (num === 2){
        const level = 'Közepes';
        maxGuesses = 5;
        console.log(`Te a ${level} szintet választottad.`);
    }
    else if (num === 3){
        const level = 'Nehéz';
        maxGuesses = 3;
        console.log(`Te a ${level} szintet választottad.`);
    }
    else {console.log('Érvénytelen szint-választás');
        const level = 'Könnyű';
        maxGuesses = 10;
          console.log(`Alapértelmezett szint: Könnyű`);
    };
    console.log(`${maxGuesses} próbálkozásod van!`)
    rl.close;
  });
}

function ChooseNumber(){
  rl.question('Mondj egy számot 1 és 100 között! \n ', (answer2) => {
    
    let number = Number(parseInt(answer2));
    console.log(`${number}-t választottad`);
    if (number === randomNumber){ console.log('Eltaláltad!')}
    else if (number < randomNumber) {console.log('Nagyobb számra gondoltam!')}
    else if (number > randomNumber) {console.log('Kisebb számra gondoltam!')}
  
   
  })
}

function Game(){
    ChooseLevel();
    
    
        ChooseNumber();
      
        
    }
    rl.close;


Game();