interface Point {
  x: number;
  y: number;
}

let funcD = (point: Point) => {
  console.log(point.x);
  console.log(point.y);
};
funcD({ x: 2, y: 3 });
