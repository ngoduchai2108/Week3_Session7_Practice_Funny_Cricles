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
        vx : Math.floor(Math.random()*3)+3,
        vy : Math.floor(Math.random()*3)+3,
        r : Math.floor(Math.random()*10)+40,
        color : getRandomColor()
    };
}
// function checkDistance(x1,y1,r1,x2,y2,r2) {
//     let d = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
//     if (d<r1+r2){
//         return false;
//     }
//     return true;
// }
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

                for (let i=0; i<n;i++){
                    for (let j=i+1;j<n;j++){
                        if (Math.sqrt((balls[i].x-balls[j].x) * (balls[i].x-balls[j].x)
                            + (balls[i].y-balls[j].y)*(balls[i].y-balls[j].y)) < balls[i].r+balls[j].r){
                            balls[i].vx = -balls[i].vx
                            balls[i].vy = -balls[i].vy
                            balls[j].vx = -balls[j].vx
                            balls[j].vy = -balls[j].vy
                            balls[i].color = getRandomColor();
                            balls[j].color = getRandomColor();
                        }
                    }
                }

                pen.beginPath();
                pen.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI)
                pen.fillStyle = ball.color;
                pen.fill();

                ball.x +=ball.vx;
                ball.y +=ball.vy;

            }
            for (let i=0; i<n;i++){
                for (let j=i+1;j<n;j++) {
                    if (balls[i].color === balls[j].color){
                        alert('You Win!!!')
                        break;
                    }
                }
            }

            drawWar()
        }, 10*MILISECOND)
    }
    drawWar();
// }
// show();
//

//Cach 1
function getRandomColor() {
    let color = ["AABBCC",  "11CCFF", "22DDCC", "AAFF22"]
    return "#"+color[Math.floor(Math.random()*4)];

}
//Cach 2
// function getRandomHex() {
//     return Math.floor(Math.random() * 255)
// }
//
// function getRandomColor() {
//     let red = getRandomHex();
//     let green = getRandomHex();
//     let blue = getRandomHex();
//     return "rgb(" + red + ',' + green + ',' + blue + ')';
// }



// function drawBall(x, y, r) {
//     let pen = document.getElementById('batle_field').getContext('2d')
//     log('ball', x, y, r)
//     pen.beginPath();
//     pen.arc(x, y, r, 0,2*Math.PI);
//     pen.stroke();
// }