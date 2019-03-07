const VERY_RIGHT = 400;
const VERY_BOTTOM = 400;
const MILISECOND = 1;
const SECONND = 1000;
const log = console.log;
let balls = [];
for (let i=0;i<2;i++){
    balls[balls.length] = {
        // x : Math.floor(Math.random()*(VERY_RIGHT-this.r) +this.r),
        // y : Math.floor(Math.random()*(VERY_BOTTOM-this.r) +this.r),
        x : Math.floor(Math.random()*VERY_RIGHT),
        y : Math.floor(Math.random()*VERY_BOTTOM),
        vx : 1,
        vy : 1,
        r : 30
    };
}

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
            pen.stroke();

            ball.x +=ball.vx;
            ball.y +=ball.vy;
        }
        drawWar()
    }, 10*MILISECOND)
}
drawWar();



// function drawBall(x, y, r) {
//     let pen = document.getElementById('batle_field').getContext('2d')
//     log('ball', x, y, r)
//     pen.beginPath();
//     pen.arc(x, y, r, 0,2*Math.PI);
//     pen.stroke();
// }