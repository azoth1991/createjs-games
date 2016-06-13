/**
 * Created by azoth on 16/6/12.
 */

var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

var gameView = new createjs.Container();
gameView.x = 200;
gameView.y = 200;
var gameWN = 20,gameHN = 20,timer= 0,der= 0;

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
createjs.Ticker.setFPS(1);
createjs.Ticker.addEventListener("tick", handleTick);
function handleTick(event) {
    var start = snake[0];
    var w,h;
    var eat=false;
    for(var i=0;i<snake.length;i++){
        if(der == 0){
            w = snake[i].w;
            snake[i].w++;
            h = snake[i].h;
        }
    }
    snake.push({w:w, h:h});
    for(var i=0;i<snake.length;i++){
        if(snake[i].w==ball[0]&&snake[i].h==ball[1]){
            ball = [1,1];
            eat = true;
        }
    }
    if(!eat){
        snake.pop();
    }
    render();
}
stage.addEventListener()