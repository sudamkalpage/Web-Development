function myFunc() {
  let a: number;
  let b: boolean;
  let c: string;
  let d: any; //not recommended
  let e: number[] = [1, 2, 3];
  let f: any[] = [1, "s", true, "sudam"];

  const ColorRed = 0;
  const ColorGreen = 0;
  const ColorBlue = 0;

  enum Color {
    Red,
    Green,
    Blue,
  }

  console.log(Color.Blue);

  enum Color2 { // always recommended to explicitly declare values (later insertions appends)
    Red = 0,
    Green = 1,
    Blue = 2,
  }
  console.log(Color2.Blue);
}

myFunc();
