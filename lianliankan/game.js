/*
*author： azoth
* mail:zhou.vip@icloud.com
* qq:490488746
 */
var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

var gameView = new createjs.Container();
gameView.x = 30;
gameView.y = 30;
stage.addChild(gameView);
var rectArr = [[],[],[],[]];
var colorType = [];
var clickColor = 0;
var cleanObj = {};
function init(){
    //颜色数组初始化
    for(var colortypenum = 0;colortypenum<8;colortypenum++){
        colorType[colortypenum] = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    colorType = colorType.concat( colorType );
    var shuffle = function(o){ //v1.0
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    shuffle(colorType);

    for(var indexY=0;indexY<4;indexY++){
        for(var indexX = 0;indexX<4;indexX++){
            var c = new Rect();
            gameView.addChild(c);
            rectArr[indexX][indexY] = c;
            c.indexX = indexX;
            c.indexY = indexY;
            c.x = indexX*55;
            c.y = indexY*55;
            c.setColor(colorType[indexX*4+indexY]);
            c.addEventListener('click',function(e){
                if(clickColor == 0){
                    clickColor = e.target.getRectType();
                    cleanObj = e.target;
                    console.log(clickColor, e.target.getRectType());
                    return;
                }
                if(clickColor == e.target.getRectType() && cleanObj!==e.target){
                    cleanObj.visible = false;
                    e.target.visible = false;
                }
                cleanObj = {};
                clickColor = 0;
                

                console.log(clickColor, e.target.getRectType());

            })

        }
    }
}
init();

