import { numbers, pieces } from "./constants";
export var reverse = function (t) {
    if (typeof t === "number") {
        t = t.toString();
    }
    return t.split("").reverse().join("");
};
export var chunk = function (t, end) {
    if (end === void 0) { end = 3; }
    return t.match(new RegExp(".{1,".concat(end, "}"), "g"));
};
export var getPieces = function (n) {
    var p = [];
    n.forEach(function (t, i) {
        var r = "";
        var g = +t;
        switch (t.length) {
            case 1:
                r += numbers[g];
                break;
            case 2:
            case 3:
                r += numbers.hasOwnProperty(g) ? numbers[g] : writeNumber(t);
                break;
        }
        if (i in pieces) {
            r += " ".concat(pieces[i]);
        }
        p.push(r);
    });
    return p.reverse().join(" ");
};
var writeNumber = function (t) {
    switch (t.length) {
        case 1:
            return numbers[+t[0]];
        case 2:
            return "".concat(numbers[+"".concat(t[0], "0")], " ").concat(t[1] === "0" ? "" : numbers[+t[1]]);
        case 3:
            var result = "".concat(numbers[+t[0]], " hundred");
            if (t[1] !== "0") {
                result += " ".concat(numbers[+"".concat(t[1], "0")]);
            }
            if (t[2] !== "0") {
                result += " ".concat(numbers[+t[2]]);
            }
            return result;
    }
};
