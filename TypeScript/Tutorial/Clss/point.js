"use strict";
exports.__esModule = true;
exports.Point3 = void 0;
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
exports.Point3 = Point3;
