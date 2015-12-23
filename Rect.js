function Rect(){
    createjs.Shape.call(this);
    this.setRectType = function(type){
        switch (type){
            case 1:
                this.setColor("#cccccc");
                break;
            case 2:
                this.setColor("#ff6600");
                break;
            case 3:
                this.setColor("#0000ff");
                break;
        }
    }

    this.setColor = function (colorString){
        this.graphics.beginFill(colorString);
        this.graphics.drawRect(0,0,40,40);
        this.graphics.endFill();
        this._RectType = colorString;
    }
    this.getRectType = function(){
        return this._RectType;
    }
    this.setRectType(1);
}
Rect.prototype = new createjs.Shape();