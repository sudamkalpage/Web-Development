var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log("x is ", this.x, " & y is ", this.y);
    };
    Point3.prototype.getY = function () {
        return this.y;
    };
    Point3.prototype.setY = function (value) {
        if (value > 100 || value < 0) {
            console.log("Error: Value doesn't fit with its limits.");
        }
        this.y = value;
    };
    return Point3;
}());
var point3 = new Point3(11, 12);
point3.x = 1;
// point3.y = 2; // giving error since private
console.log("y:", point3.getY());
point3.setY(13);
console.log("y:", point3.getY());
point3.draw();
