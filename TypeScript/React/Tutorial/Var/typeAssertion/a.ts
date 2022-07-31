let message;
message = "sudam";

let len: number;
len = (<string>message).length;
console.log(len);

let len2: number;
len2 = (message as string).length;
console.log(len2);

let message1: string;
message1 = "sudam";

let len3: number;
len3 = message1.length;
console.log(len3);
