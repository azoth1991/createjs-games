/**
 * Created by azoth on 16/6/12.
 */

var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

var gameView = new createjs.Container();
var gameWN = 20,gameHN = 20,der= 0,count=0;

stage.addChild(gameView);
var rectArr = [];
//场景初始化
for(var i= 0;i<gameWN;i++){
    rectArr.push([]);
}
var colorType = ['#D4D4D4','#4D4D4D','#1E90FF'];

//snake初始化
var snake = [{w:10,h:10}];
var ball = [13,10];

function init(){

    for(var indexY=0;indexY<gameWN;indexY++){
        for(var indexX = 0;indexX<gameHN;indexX++){
            var c = new Rect();
            gameView.addChild(c);
            rectArr[indexX][indexY] = c;
            c.indexX = indexX;
            c.indexY = indexY;
            c.x = indexX*gameWN;
            c.y = indexY*gameHN;
            c.setColor(colorType[0]);
        }
    }
}

function render(){
    init();
    for(var i=0;i<snake.length;i++){
        rectArr[snake[i].w][snake[i].h].setColor(colorType[1]);
    }
    rectArr[ball[0]][ball[1]].setColor(colorType[2]);
}
createjs.Ticker.setFPS(3);
createjs.Ticker.addEventListener("tick", handleTick);
function handleTick(event) {
    var start = snake[0];
    var w,h;
    var eat=false;
    switch (der){
        case 0:
            w = start.w;
            start.w++;
            h = start.h;
            break;
        case 1:
            w = start.w;
            start.w--;
            h = start.h;
            break;
        case 2:
            w = start.w;
            h = start.h;
            start.h++;
            break;
        case 3:
            w = start.w;
            h = start.h;
            start.h--;
            break;
    }
    snake.push({w:w, h:h});
    checkfail(w,h);
    //判断是否吃到了球
    if(start.w==ball[0]&&start.h==ball[1]){
        ball = [Math.round(Math.random()*8+1),Math.round(Math.random()*8+1)];
        eat = true;
        count++;
        document.getElementsByTagName('span')[0].innerHTML = count;
    } else {
        snake.splice(1,1);
    }
    render();
}
window.onkeydown = handleKeyDown;
window.focus();
var ARROW_KEY_UP=38;
var ARROW_KEY_DOWN=40;
var ARROW_KEY_LEFT=37;
var ARROW_KEY_RIGHT=39;
function handleKeyDown(e){
    e = !e ? window.event : e;
    switch(e.keyCode){
        case ARROW_KEY_UP:
            der = 3;
            break;
        case ARROW_KEY_DOWN:
            der = 2;
            break;
        case ARROW_KEY_LEFT:
            der = 1;
            break;
        case ARROW_KEY_RIGHT:
            der = 0;
            break;
    }
}

function checkfail(w,h){
    if(snake.length>1){
        for(var i=0;i<snake.length-1;i++){
            if(snake[i].w == w && snake[i].h == h){
                alert('碰到自己了');
                snake = [{w:10,h:10}];
                ball = [13,10];
                der= 0;
                count=0;
            }
        }
    }
    if(w>gameWN-1 || w<0 || h>gameHN-1 || h<0){
        alert('碰到了墙');
        snake = [{w:10,h:10}];
        ball = [13,10];
        der= 0;
        count=0;
    }
}