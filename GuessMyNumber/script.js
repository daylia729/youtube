//点击agin按钮或刷新初始化，生成随机数
//比较输入的数字和随机数，相等score不变，不相等score-1，并给出高或者低的提示，直到相等
//highscrore记录最高分

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 10;
let highscrore = 0;

function checkGuess(){
    const Guess = document.querySelector('.guess').value;
    if(!Guess){
        document.querySelector('.message').textContent = 'Please enter a number!'
    }else{
        if(Guess == secretNumber){
        document.querySelector('.message').textContent = 'Right number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b437';
        document.querySelector('.guess').disabled = true;
        if(highscrore<=score){
            highscrore =score;
        }
        document.querySelector('.highscore').textContent = highscrore
        }else if(Guess > secretNumber){
        document.querySelector('.message').textContent = 'Too high!';
        score=score-1;
        document.querySelector('.score').textContent = score;
        }else{
        document.querySelector('.message').textContent = 'Too low!';
        score=score-1;
        document.querySelector('.score').textContent = score;
        }
    }
    if (score < 1){
        document.querySelector('.message').textContent = 'You lost the game...';
        document.querySelector('body').style.backgroundColor = '#e81313ff';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.guess').disabled = true;
    }
    document.querySelector('.guess').value = '';
}

function gameInit(){
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').disabled = false;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
}