class Point {
  x: number;
  y: number;
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("x is ", this.x, " & y is ", this.y);
  }
  Line(another: Point) {
    console.log("x is ", this.x, " & y is ", this.y);
    console.log(another);
  }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

let point2 = new Point(2, 3);
point2.draw();
