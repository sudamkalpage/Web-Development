let funcA = function (msg: string) {
  console.log(msg);
};
funcA("Hello");

let funcB = (msg: string) => {
  console.log(msg);
};
funcB("Hello");

let funcC = (msg: string) => {
  console.log(msg);
  console.log(msg.charAt(1));
};
funcC("Hello");
