class Bar {
    _x;
    _y;
    _width;
    _height;
    _speed;
    _color;

    constructor(x, y, width, height, speed, color) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._speed = speed;
        this._color = color;
    }


    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }


    moveLeft() {
        this._x -= this._speed;
    }

    moveRight() {
        this._x += this._speed;
    }
    upSpeed(){
        this._speed *= 1.5;
    }
    downSpeed(){
        this._speed /= 1.5;
    }

    drawBar(ctx) {
        ctx.beginPath();
        ctx.rect(this._x, this._y, this._width, this._height);
        ctx.fillStyle = this._color;
        ctx.fill();
    }
}