let workTime = 25 * 60; // 25 minutes in seconds
let breakTime =  5 * 60; // 5 minutes in seconds
let currentTime = workTime;
let isBreak = false;
let timerInterval;

const timerDisplay = document.getElementById('timer-display');
const statusDisplay = document.getElementById('status');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const messageDisplay = document.getElementById('message');


function updateTime(){
    let minutes = Math.floor(currentTime/60);
    let seconds = currentTime%60;
    if (seconds<10){
        seconds = "0"+ seconds
    }
    timerDisplay.textContent = `${minutes}:${seconds}`
}

function startTimer(){
    timerInterval = setInterval(()=>{
        currentTime--;
        updateTime();

        if(currentTime<=0){
            clearInterval(timerInterval);
            toggle();
        }
    }, 1000)
}

function toggle(){
    if (isBreak){
        currentTime = workTime;
        statusDisplay.textContent = "Work";
        statusDisplay.style.color = '#ff5733'; 
        messageDisplay.textContent = "Time to focus! Work session ended.";
        isBreak = false;
    }
    else{
        currentTime = breakTime;
        statusDisplay.textContent = "Break";
        statusDisplay.style.color = '#2e8b57';
        messageDisplay.textContent = "Take a short break!";
        isBreak = true;
    }
    startTimer();
}

function resetTimer(){
    clearInterval(timerDisplay);
    currentTime = workTime;
    isBreak = false;
    statusDisplay.textContent = "Work";
    statusDisplay.style.color = '#ff5733'; // Default work color
    messageDisplay.textContent = "";
    updateTime();   
}

startButton.addEventListener('click', ()=>{
    if(!timerInterval){
        startTimer();
        startButton.textContent = "Pause";
        startButton.style.backgroundColor = "#ff9800";
    } else{
        clearInterval(timerInterval);
        timerInterval = null;
        startButton.textContent = "Start";
        startButton.style.backgroundColor = "#4CAF50";
    }
})

resetButton.addEventListener('click', resetTimer);

updateTime();











































































































































































// let workTime = 25 * 60; // 25 minutes in seconds
// let breakTime = 5 * 60; // 5 minutes in seconds
// let currentTime = workTime;
// let isBreak = false;
// let timerInterval;

// const timerDisplay = document.getElementById('timer-display');
// const statusDisplay = document.getElementById('status');
// const startButton = document.getElementById('start');
// const resetButton = document.getElementById('reset');
// const messageDisplay = document.getElementById('message');

// function updateTimerDisplay() {
//     let minutes = Math.floor(currentTime / 60);
//     let seconds = currentTime % 60;
//     seconds = seconds < 10 ? '0' + seconds : seconds;
//     timerDisplay.textContent = `${minutes}:${seconds}`;
// }

// function startTimer() {
//     timerInterval = setInterval(() => {
//         currentTime--;
//         updateTimerDisplay();

//         if (currentTime <= 0) {
//             clearInterval(timerInterval);
//             toggleSession();
//         }
//     }, 1000);
// }

// function toggleSession() {
//     if (isBreak) {
//         currentTime = workTime;
//         statusDisplay.textContent = "Work";
//         statusDisplay.style.color = '#ff5733'; // Red color for work session
//         messageDisplay.textContent = "Time to focus! Work session ended.";
//         isBreak = false;
//     } else {
//         currentTime = breakTime;
//         statusDisplay.textContent = "Break";
//         statusDisplay.style.color = '#2e8b57'; // Green color for break
//         messageDisplay.textContent = "Take a short break!";
//         isBreak = true;
//     }

//     startTimer();
// }

// function resetTimer() {
//     clearInterval(timerInterval);
//     currentTime = workTime;
//     isBreak = false;
//     statusDisplay.textContent = "Work";
//     statusDisplay.style.color = '#ff5733'; // Default work color
//     messageDisplay.textContent = "";
//     updateTimerDisplay();
// }

// startButton.addEventListener('click', () => {
//     if (!timerInterval) {
//         startTimer();
//         startButton.textContent = "Pause";
//         startButton.style.backgroundColor = "#ff9800"; // Change color to orange
//     } else {
//         clearInterval(timerInterval);
//         timerInterval = null;
//         startButton.textContent = "Start";
//         startButton.style.backgroundColor = "#4CAF50"; // Reset to green
//     }
// });

// resetButton.addEventListener('click', resetTimer);

// updateTimerDisplay();