class Point3 {
  constructor(public x?: number, private y?: number) {}

  draw() {
    console.log("x is ", this.x, " & y is ", this.y);
  }

  getY() {
    return this.y;
  }

  setY(value) {
    if (value > 100 || value < 0) {
      console.log("Error: Value doesn't fit with its limits.");
    }
    this.y = value;
  }
}

let point3 = new Point3(11, 12);
point3.x = 1;
// point3.y = 2; // giving error since private
console.log("y:", point3.getY());
point3.setY(13);
console.log("y:", point3.getY());
point3.draw();
