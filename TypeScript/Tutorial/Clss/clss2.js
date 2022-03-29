"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var point3 = new point_1.Point3(11, 12);
point3.x = 1;
// point3.y = 2; // giving error since private
console.log("y:", point3.getY());
point3.setY(13);
console.log("y:", point3.getY());
point3.draw();
