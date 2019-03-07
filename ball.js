const VERY_RIGHT = 1200;
const VERY_BOTTOM = 500;
const MILISECOND = 1;
// const log = console.log;
let balls = [];
let n = parseInt(prompt(' Enter the ball number'));
//document.getElementById('number').value
for (let i=0;i<n;i++){
    balls[balls.length] = {
        // x : Math.floor(Math.random()*(VERY_RIGHT-this.r) +this.r),
        // y : Math.floor(Math.random()*(VERY_BOTTOM-this.r) +this.r),//sai
        x : Math.floor(Math.random()*(VERY_RIGHT-100))+50,
        y : Math.floor(Math.random()*(VERY_BOTTOM-100))+50,
        vx : Math.floor(Math.random()*3)+1,
        vy : Math.floor(Math.random()*3)+1,
        r : Math.floor(Math.random()*40)+10,
        color : getRandomColor()
    };
}

// function show() {
    function drawWar() {
        setTimeout(function () {
            let pen = document.getElementById("myCanvas").getContext('2d')
            pen.clearRect(0,0,VERY_RIGHT,VERY_BOTTOM);
            // drawBall(ball.x,ball.y,ball.r)
            for (let ball of balls){
                if (ball.x>VERY_RIGHT - ball.r || ball.x < ball.r){
                    ball.vx = -ball.vx
                }
                if (ball.y>VERY_BOTTOM - ball.r || ball.y < ball.r){
                    ball.vy = -ball.vy
                }
                pen.beginPath();
                pen.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI)
                pen.fillStyle = ball.color;
                pen.fill();

                ball.x +=ball.vx;
                ball.y +=ball.vy;
            }
            drawWar()
        }, 10*MILISECOND)
    }
    drawWar();
// }
// show();

function getRandomHex() {
    return Math.floor(Math.random() * 255)
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + ',' + green + ',' + blue + ')';
}



// function drawBall(x, y, r) {
//     let pen = document.getElementById('batle_field').getContext('2d')
//     log('ball', x, y, r)
//     pen.beginPath();
//     pen.arc(x, y, r, 0,2*Math.PI);
//     pen.stroke();
// }