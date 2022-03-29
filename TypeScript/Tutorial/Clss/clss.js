var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("x is ", this.x, " & y is ", this.y);
    };
    Point.prototype.Line = function (another) {
        console.log("x is ", this.x, " & y is ", this.y);
        console.log(another);
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
var point2 = new Point(2, 3);
point2.draw();
