function myFunc() {
    var a = 1;
    var b;
    var c;
    var d; //not recommended
    var e = [1, 2, 3];
    var f = [1, "s", true, "sudam"];
    var h;
    var i;
    var g; // tuple
    g = [2, "sudam"];
    console.log(g);
    var person = {
        name: "Sudam"
    };
    var ColorRed = 0;
    var ColorGreen = 0;
    var ColorBlue = 0;
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    console.log(Color.Blue);
    var Color2;
    (function (Color2) {
        Color2[Color2["Red"] = 0] = "Red";
        Color2[Color2["Green"] = 1] = "Green";
        Color2[Color2["Blue"] = 2] = "Blue";
    })(Color2 || (Color2 = {}));
    console.log(Color2.Blue);
}
myFunc();
