let funcA = function (msg: string) {
  console.log(msg);
};
console.log(funcA("Hello"));

let funcB = (msg: string) => {
  console.log(msg);
};
console.log(funcB("Hello"));

let funcC = (msg: string) => {
  console.log(msg);
  console.log(msg.charAt(1));
};
console.log(funcC("Hello"));
