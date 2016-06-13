function Rect(){
    createjs.Shape.call(this);

    this.setColor = function (colorString){
        this.graphics.beginFill(colorString);
        this.graphics.drawRect(0,0,40,40);
        this.graphics.endFill();
        this._RectType = colorString;
    }
    this.getRectType = function(){
        return this._RectType;
    }
}
Rect.prototype = new createjs.Shape();