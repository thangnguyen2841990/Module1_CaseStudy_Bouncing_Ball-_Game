class Ball {
    _x;
    _y;
    _radius;
    _color;
    _dx; //góc độ di chuyển của bóng.
    _dy;  // góc độ di chuyển của bóng.


    constructor(x, y, radius, color, dx, dy) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
        this._dx = dx;
        this._dy = dy;
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

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get dx() {
        return this._dx;
    }

    set dx(value) {
        this._dx = value;
    }

    get dy() {
        return this._dy;
    }

    set dy(value) {
        this._dy = value;
    }

    drawBall(ctx) {  // vẽ bóng.
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
        ctx.fillStyle = this._color;
        ctx.fill();
    }
}