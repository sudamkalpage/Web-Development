export class Point3 {
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
